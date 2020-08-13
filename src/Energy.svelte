<script>
import { fly, fade } from 'svelte/transition'
import { state, changeCounters, spendCredits, creditRegister, queueSpend } from './stores'
import { counterChangeInAnim } from './utils'

const dec1 = () =>
  queueSpend($spendCredits, $creditRegister, 'EnergyS', $state, (n => n - 1))

const inc1 = () =>
  queueSpend($spendCredits, $creditRegister, 'EnergyS', $state, (n => n + 1))

const decP = () =>
  queueSpend($spendCredits, $creditRegister, 'EnergyP', $state, (n => n - 1))

const incP = () =>
  queueSpend($spendCredits, $creditRegister, 'EnergyP', $state, (n => n + 1))

</script>

<div class="grid-area-container grid-area-container">
  <div class="grid-area-income grid-area-EnergyP">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ decP } class="counter-button-resource">-1</button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.EnergyP }
        </div>
        {#if $changeCounters.EnergyP.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.EnergyP.text }
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

  <div class="grid-area-resources grid-area-EnergyS">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <div class="button-spacer"></div>
          <button on:click={ dec1 } class="counter-button-resource minus">-1</button>
          <button class="counter-button-resource counter-button-resource-energy">
            <div class="counter-button-inner">
              <span class="counter-button-energy-graphic"></span>
              <span class="counter-button-energy-amount">0</span>
            </div>
          </button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.EnergyS }
        </div>
        <div class="counter-label">
          <span>Energy</span>
        </div>
        {#if $changeCounters.EnergyS.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.EnergyS.text }
        </div>
        {/if}
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <div class="button-spacer"></div>
          <button on:click={ inc1 } class="counter-button-resource plus">+1</button>
          <div class="counter-button-resource counter-button-resource-placeholder"></div>
        </div>
      </div>
    </div>
  </div>
</div>
