<script>
import { fly, fade } from 'svelte/transition'
import { state, spendCredits, creditRegister, queueSpend } from './stores'
import { createChangeCounter, updateCounterChange, counterChangeInAnim } from './utils'

let counterSChange = createChangeCounter('MCreditS')
let counterPChange = createChangeCounter('MCreditP')

const dec5 = () => {
  queueSpend($spendCredits, $creditRegister, 'MCreditS', $state, (n => n - 5))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 5),
    (reset) => counterSChange = reset
  )
}
const dec1 = () => {
  queueSpend($spendCredits, $creditRegister, 'MCreditS', $state, (n => n - 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 1),
    (reset) => counterSChange = reset
  )
}
const inc1 = () => {
  queueSpend($spendCredits, $creditRegister, 'MCreditS', $state, (n => n + 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n + 1),
    (reset) => counterSChange = reset
  )
}
const inc5 = () => {
  queueSpend($spendCredits, $creditRegister, 'MCreditS', $state, (n => n + 5))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n + 5),
    (reset) => counterSChange = reset
  )
}
const decP = () => {
  queueSpend($spendCredits, $creditRegister, 'MCreditP', $state, (n => n - 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n - 1),
    (reset) => counterPChange = reset
  )
}
const incP = () => {
  queueSpend($spendCredits, $creditRegister, 'MCreditP', $state, (n => n + 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n + 1),
    (reset) => counterPChange = reset
  )
}


</script>

<div class="grid-area-container grid-area-container">

  <div class="grid-area-resources grid-area-MCreditS">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ dec1 } class="counter-button-resource minus">-1</button>
          <button on:click={ dec5 } class="counter-button-resource minus">-5</button>
          <div class="button-spacer"></div>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.MCreditS }
        </div>
        <div class="counter-label">
          <span>M€</span>
        </div>
        {#if counterSChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterSChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ inc1 } class="counter-button-resource plus">+1</button>
          <button on:click={ inc5 } class="counter-button-resource plus">+5</button>
          <div class="button-spacer"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-area-income grid-area-MCreditP">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ decP } class="counter-button-resource">-1</button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.MCreditP }
        </div>
        {#if counterPChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterPChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ incP } class="counter-button-resource">+1</button>
        </div>
      </div>
    </div>
  </div>

</div>
