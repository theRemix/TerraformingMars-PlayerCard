<script>
import { fly, fade } from 'svelte/transition'
import { state, spendCredits, creditRegister, queueSpend } from './stores'
import { createChangeCounter, updateCounterChange, counterChangeInAnim } from './utils'

let counterChange = createChangeCounter('TR')

const dec5 = () => {
  queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n - 5))
  counterChange = updateCounterChange(
    counterChange,
    (n => n - 5),
    (reset) => counterChange = reset
  )
}
const dec1 = () => {
  queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n - 1))
  counterChange = updateCounterChange(
    counterChange,
    (n => n - 1),
    (reset) => counterChange = reset
  )
}
const inc1 = () => {
  queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n + 1))
  counterChange = updateCounterChange(
    counterChange,
    (n => n + 1),
    (reset) => counterChange = reset
  )
}
const inc5 = () => {
  queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n + 5))
  counterChange = updateCounterChange(
    counterChange,
    (n => n + 5),
    (reset) => counterChange = reset
  )
}
</script>

<div class="grid-area-container grid-area-container">

  <div class="grid-area-resources grid-area-TR">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ dec1 } class="counter-button-resource minus">-1</button>
          <button on:click={ dec5 } class="counter-button-resource minus">-5</button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.TR }
        </div>
        <div class="counter-label">
          <span>TR</span>
        </div>
        {#if counterChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ inc1 } class="counter-button-resource plus">+1</button>
          <button on:click={ inc5 } class="counter-button-resource plus">+5</button>
        </div>
      </div>
    </div>
  </div>
</div>