<script>
import { fly, fade } from 'svelte/transition'
import { state, spendCredits, creditRegister, queueSpend } from './stores'
import { createChangeCounter, updateCounterChange, counterChangeInAnim } from './utils'

let counterSChange = createChangeCounter('SteelS')
let counterPChange = createChangeCounter('SteelP')

const dec5 = () => {
  queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n - 5))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 5),
    (reset) => counterSChange = reset
  )
}
const dec1 = () => {
  queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n - 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 1),
    (reset) => counterSChange = reset
  )
}
const inc1 = () => {
  queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n + 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n + 1),
    (reset) => counterSChange = reset
  )
}
const inc5 = () => {
  queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n + 5))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n + 5),
    (reset) => counterSChange = reset
  )
}
const decP = () => {
  queueSpend($spendCredits, $creditRegister, 'SteelP', $state, (n => n - 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n - 1),
    (reset) => counterPChange = reset
  )
}
const incP = () => {
  queueSpend($spendCredits, $creditRegister, 'SteelP', $state, (n => n + 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n + 1),
    (reset) => counterPChange = reset
  )
}
</script>

<div class="grid-area-container grid-area-container-steel">
  STEEL
  <div class="grid-area-income grid-area-steel">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Steel Income</span>
        </div>
        <div class="counter-count">
          { $state.SteelP }
        </div>
        {#if counterPChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterPChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources counter-buttons-resources-one">
          <button on:click={ incP } class="counter-button-resource plus">+</button>
          <button on:click={ decP } class="counter-button-resource minus">-</button>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-area-resources grid-area-resources grid-area-resources-steel">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Steel Resources</span>
        </div>
        <div class="counter-count">
          { $state.SteelS }
        </div>
        {#if counterSChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterSChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources counter-buttons-resources-five">
          <button on:click={ inc5 } class="counter-button-resource plus">+</button>
          <button on:click={ dec5 } class="counter-button-resource minus">-</button>
        </div>
        <div class="counter-buttons-resources counter-buttons-resources-one">
          <button on:click={ inc1 } class="counter-button-resource plus">+</button>
          <button on:click={ dec1 } class="counter-button-resource minus">-</button>
        </div>
      </div>
    </div>
  </div>
</div>
