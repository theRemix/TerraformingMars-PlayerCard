import { writable } from 'svelte/store'

export const TR = writable(20)
export const Generation = writable(1)

export const MCreditS = writable(0)
export const MCreditP = writable(1)

export const SteelS = writable(0)
export const SteelP = writable(1)

export const TitaniumS = writable(0)
export const TitaniumP = writable(1)

export const PlantS = writable(0)
export const PlantP = writable(1)

export const EnergyS = writable(0)
export const EnergyP = writable(1)

export const HeatS = writable(0)
export const HeatP = writable(1)

export const logs = writable([])

export const spendCredits = writable(false)
export const creditRegister = writable([]) // [{ type, amount }]

// creditRegister: [{type, amount}]
export const queueSpend = (spendCredits, creditRegister, creditRegister$, counterType, counter, counter$, counterFn) => {
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
  counter.update(counterFn)
}

