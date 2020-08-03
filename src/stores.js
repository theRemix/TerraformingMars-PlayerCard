import { writable } from 'svelte/store'

export const state = writable({
  TR: 20,
  Generation: 1,
  MCreditS: 0,
  MCreditP: 1,
  SteelS: 0,
  SteelP: 1,
  TitaniumS: 0,
  TitaniumP: 1,
  PlantS: 0,
  PlantP: 1,
  EnergyS: 0,
  EnergyP: 1,
  HeatS: 0,
  HeatP: 1,
})

export const logs = writable([])

export const spendCredits = writable(false)
export const creditRegister = writable([]) // [{ type, amount }]

export const history = writable([]) // [{ committed, state }]

state.subscribe($state => {
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
})

// creditRegister: [{type, amount}]
export const queueSpend = (spendCredits, creditRegister$, counterType, state$, counterFn) => {
  if(spendCredits){ // queue for commit
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
}

