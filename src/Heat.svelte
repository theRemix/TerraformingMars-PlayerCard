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

<div class="grid-area-container grid-area-container">
  <div class="grid-area-income grid-area-HeatP">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ decP } class="counter-button-resource">-1</button>
        </div>
      </div>
      <div class="counter">
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
        <div class="counter-buttons-resources">
          <button on:click={ incP } class="counter-button-resource">+1</button>
        </div>
      </div>
    </div>
  </div>

  <div class="grid-area-resources grid-area-HeatS">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <div class="button-spacer"></div>
          <button on:click={ dec1 } class="counter-button-resource">-1</button>
          <button on:click={ dec8 } class="counter-button-resource counter-button-resource-heat">
            <div class="counter-button-inner">
              <span class="counter-button-heat-graphic"></span>
              <span class="counter-button-heat-amount">-8</span>
            </div>
          </button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.HeatS }
        </div>
        <div class="counter-label">
          <span>Heat</span>
        </div>
        {#if counterSChange.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { counterSChange.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <div class="button-spacer"></div>
          <button on:click={ inc1 } class="counter-button-resource">+1</button>
          <div class="counter-button-resource counter-button-resource-placeholder"></div>
        </div>
      </div>
    </div>
  </div>
</div>

