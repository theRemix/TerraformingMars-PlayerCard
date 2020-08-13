const counterTimeouts = new Map()

// counter: { id, amount, text }
export const updateCounterChange = (counter, fn, resetCb) => {
  if(counterTimeouts.has(counter.id)){
    clearTimeout(counterTimeouts.get(counter.id)[1])
    counterTimeouts.delete(counter.id)
  }

  counterTimeouts.set(counter.id, [resetCb, setTimeout(() => {
    resetCb({ amount: 0, text: '' })
    counterTimeouts.delete(counter.id)
  }, 3000)])

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
  for(let [key, [resetCb, timer]] of counterTimeouts){
    resetCb({ amount: 0, text: '' })
    clearTimeout(timer)
    counterTimeouts.delete(key)
  }
}

export const counterChangeInAnim = { y: 20, duration: 500 }

export const createChangeCounter = id => ({
  id,
  amount: 0,
  text: ''
})
