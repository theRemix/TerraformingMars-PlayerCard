import { writable, derived } from 'svelte/store'
import { createChangeCounter, updateCounterChange } from './utils'

const initialState = {
  TR: 20,
  Generation: 1,
  MCreditS: 0,
  MCreditP: 0,
  SteelS: 0,
  SteelP: 0,
  TitaniumS: 0,
  TitaniumP: 0,
  PlantS: 0,
  PlantP: 0,
  EnergyS: 0,
  EnergyP: 0,
  HeatS: 0,
  HeatP: 0,
  spendCredits: false
}
export const state = writable({})
export const resetState = () => state.set(initialState)
export const resetConfirmVisible = writable(false)

export const changeCounters = writable({
  MCreditS: createChangeCounter('MCreditS'),
  MCreditP: createChangeCounter('MCreditP'),
  SteelS: createChangeCounter('SteelS'),
  SteelP: createChangeCounter('SteelP'),
  TitaniumS: createChangeCounter('TitaniumS'),
  TitaniumP: createChangeCounter('TitaniumP'),
  PlantS: createChangeCounter('PlantS'),
  PlantP: createChangeCounter('PlantP'),
  EnergyS: createChangeCounter('EnergyS'),
  EnergyP: createChangeCounter('EnergyP'),
  HeatS: createChangeCounter('HeatS'),
  HeatP: createChangeCounter('HeatP'),
})

// ## SESSIONS ##
if (Storage && localStorage.getItem('state')) {
  state.set(JSON.parse(localStorage.getItem('state')))
} else {
  resetState()
}


export const logs = writable([])

export const creditRegister = writable([]) // [{ type, amount }]

export const creditRegisterTotal = derived(
  creditRegister,
  $creditRegister =>
    $creditRegister.reduce((total, {type, amount}) => {
      switch(type){
        case 'SteelS':
          return total + amount * 2
          break
        case 'TitaniumS':
          return total + amount * 3
          break
        case 'MCreditS':
          return total + amount
        default:
          return total
      }
    }, 0)
)

export const history = writable([]) // [{ committed, state }]

state.subscribe($state => {

  console.log({ $state })

  if (!$state.spendCredits){

    // ## HISTORY ##
    history.update($history => {
      const stepIdx = $history
        .map(({committed}) => committed)
        .lastIndexOf(true) // last committed item

      const history = stepIdx >= 0 ?
        $history.slice(stepIdx) : // discard any committed undos
        $history

      return [
        {
          committed: false,
          state: $state
        },
        ...history.map(item => ({ ...item, committed: false })) // reset
      ]
    })
  }

  // ## SESSIONS ##
  if (Storage) {
    localStorage.setItem('state', JSON.stringify($state))
  }

})

// creditRegister: [{type, amount}]
export const queueSpend = (creditRegister$, counterType, state$, counterFn) => {
  if(state$.spendCredits){ // queue for commit
    // look for existing entry by type
    const reg = creditRegister$.find(({type}) => type === counterType)
    if(reg){
      // if change is _0_ then remove the item from register
      if(counterFn(reg.amount) === 0) {
        // remove item
        creditRegister.set([...creditRegister$.filter(({type}) => type !== counterType)])
      } else {
        // use existing register entry
        reg.amount = counterFn(reg.amount)
        creditRegister.set(creditRegister$)
      }
    } else {
      // create new register entry
      creditRegister.set([
        ...creditRegister$,
        {
          type: counterType,
          amount: counterFn(0)
        }
      ])
    }
  }

  // commit now
  state.update(() => ({
    ...state$,
    [counterType]: counterFn(state$[counterType])
  }))

  // change counter animation
  changeCounters.update(cc => ({
    ...cc,
    [counterType]: updateCounterChange(
      cc[counterType],
      counterFn
    )
  }))
}

