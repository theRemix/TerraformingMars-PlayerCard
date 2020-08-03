<script>
import { fly, fade } from 'svelte/transition'
import { state, spendCredits, creditRegister, queueSpend } from './stores'
import { createChangeCounter, updateCounterChange, counterChangeInAnim } from './utils'

let counterSChange = createChangeCounter('HeatS')
let counterPChange = createChangeCounter('HeatP')

const dec8 = () => {
  queueSpend($spendCredits, $creditRegister, 'HeatS', $state, (n => n - 8))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 8),
    (reset) => counterSChange = reset
  )
}
const dec1 = () => {
  queueSpend($spendCredits, $creditRegister, 'HeatS', $state, (n => n - 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n - 1),
    (reset) => counterSChange = reset
  )
}
const inc1 = () => {
  queueSpend($spendCredits, $creditRegister, 'HeatS', $state, (n => n + 1))
  counterSChange = updateCounterChange(
    counterSChange,
    (n => n + 1),
    (reset) => counterSChange = reset
  )
}
const decP = () => {
  queueSpend($spendCredits, $creditRegister, 'HeatP', $state, (n => n - 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n - 1),
    (reset) => counterPChange = reset
  )
}
const incP = () => {
  queueSpend($spendCredits, $creditRegister, 'HeatP', $state, (n => n + 1))
  counterPChange = updateCounterChange(
    counterPChange,
    (n => n + 1),
    (reset) => counterPChange = reset
  )
}
</script>

<div class="grid-area-container grid-area-container-heat">
  HEAT
  <div class="grid-area-income grid-area-heat">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Heat Income</span>
        </div>
        <div class="counter-count">
          { $state.HeatP }
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

  <div class="grid-area-resources grid-area-resources grid-area-resources-heat">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Heat Resources</span>
        </div>
        <div class="counter-count">
          { $state.HeatS }
        </div>
        {#if counterSChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterSChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources counter-buttons-resources-temperature">
          <button on:click={ dec8 } class="counter-button-resource temperature">
            <div class="temperature-icon">
              1°
            </div>
            <div class="temperature-count">
              -8
            </div>
          </button>
        </div>
        <div class="counter-buttons-resources counter-buttons-resources-one">
          <button on:click={ inc1 } class="counter-button-resource plus">+</button>
          <button on:click={ dec1 } class="counter-button-resource minus">-</button>
        </div>
      </div>
    </div>
  </div>
</div>
