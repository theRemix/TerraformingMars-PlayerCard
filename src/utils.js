import { changeCounters } from './stores'

const counterTimeouts = new Map()

const resetChangeCounter = id =>
  changeCounters.update(cc => ({
    ...cc,
    [id]: {
      ...cc[id],
      amount: 0,
      text: ''
    }
  }))

// counter: { id, amount, text }
export const updateCounterChange = (counter, fn) => {
  if(counterTimeouts.has(counter.id)){
    clearTimeout(counterTimeouts.get(counter.id))
  }

  counterTimeouts.set(counter.id, setTimeout(() => {
    resetChangeCounter(counter.id)
    counterTimeouts.delete(counter.id)
  }, 3000))

  counter.amount = fn(counter.amount)

  switch(true){
    case counter.amount < 0 :
      counter.text = counter.amount
      break
    case counter.amount > 0 :
      counter.text = `+${counter.amount}`
      break
    default:
      counter.text = ''
  }

  return { ...counter }
}

export const resetCounterChange = () => {
  for(let [id, timer] of counterTimeouts){
    resetChangeCounter(id)
    clearTimeout(timer)
    counterTimeouts.delete(id)
  }
}

export const counterChangeInAnim = { y: 20, duration: 500 }

export const createChangeCounter = id => ({
  id,
  amount: 0,
  text: ''
})
