<script>
import { onDestroy } from 'svelte'
import { history, state } from './stores'
import { resetCounterChange } from './utils'

const undo = () => {
  const step = $history
    .slice(1) // skip "current" step
    .find(({committed}) => !committed)

  if(!step) return

  step.committed = true
  const prevHistory = [...$history]


  // caution! creates a new history record
  state.set(step.state)

  // overwrite history
  history.set(prevHistory)

  // reset counterChange, fixes "stuck" counters on mobile
  resetCounterChange()
}

const redo = () => {
  const stepIdx = $history
    .map(({committed}) => committed)
    .lastIndexOf(true) // last committed item
  const step = $history[stepIdx]
  const prevStep = $history[stepIdx-1]

  if(!step || !prevStep) return

  // uncommit step
  step.committed = false

  // commit previous step
  prevStep.committed = true

  const prevHistory = [...$history]

  // caution! creates a new history record
  state.set(prevStep.state)

  // overwrite history
  history.set(prevHistory)

  // reset counterChange, fixes "stuck" counters on mobile
  resetCounterChange()
}
</script>

<div class="undo-redo-buttons">
  <button class="button-undo" on:click={ undo }></button>
  <button class="button-redo" on:click={ redo }></button>
</div>
