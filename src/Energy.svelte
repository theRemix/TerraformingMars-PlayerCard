<script>
import { fly, fade } from 'svelte/transition'
import { state, spendCredits, creditRegister, queueSpend } from './stores'
import { createChangeCounter, updateCounterChange, counterChangeInAnim } from './utils'

let counterSChange = createChangeCounter('EnergyS')
let counterPChange = createChangeCounter('EnergyP')

const dec1 = () => {
  queueSpend($spendCredits, $creditRegister, 'EnergyS', $state, (n => n - 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 1),
    (reset) => counterSChange = reset
  )
}
const inc1 = () => {
  queueSpend($spendCredits, $creditRegister, 'EnergyS', $state, (n => n + 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n + 1),
    (reset) => counterSChange = reset
  )
}
const decP = () => {
  queueSpend($spendCredits, $creditRegister, 'EnergyP', $state, (n => n - 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n - 1),
    (reset) => counterPChange = reset
  )
}
const incP = () => {
  queueSpend($spendCredits, $creditRegister, 'EnergyP', $state, (n => n + 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n + 1),
    (reset) => counterPChange = reset
  )
}
</script>

<div class="grid-area-container grid-area-container-energy">
  ENERGY
  <div class="grid-area-income grid-area-energy">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Energy Income</span>
        </div>
        <div class="counter-count">
          { $state.EnergyP }
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

  <div class="grid-area-resources grid-area-resources grid-area-resources-energy">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Energy Resources</span>
        </div>
        <div class="counter-count">
          { $state.EnergyS }
        </div>
        {#if counterSChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterSChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources counter-buttons-resources-one">
          <button on:click={ inc1 } class="counter-button-resource plus">+</button>
          <button on:click={ dec1 } class="counter-button-resource minus">-</button>
        </div>
      </div>
    </div>
  </div>
</div>
