<script>
import { fly, fade } from 'svelte/transition'
import { state, changeCounters, creditRegister, queueSpend } from './stores'
import { counterChangeInAnim } from './utils'

const dec8 = () =>
  queueSpend($creditRegister, 'HeatS', $state, (n => n - 8))

const dec1 = () =>
  queueSpend($creditRegister, 'HeatS', $state, (n => n - 1))

const inc1 = () =>
  queueSpend($creditRegister, 'HeatS', $state, (n => n + 1))

const decP = () =>
  queueSpend($creditRegister, 'HeatP', $state, (n => n - 1))

const incP = () =>
  queueSpend($creditRegister, 'HeatP', $state, (n => n + 1))

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
        {#if $changeCounters.HeatP.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.HeatP.text }
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
        {#if $changeCounters.HeatS.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.HeatS.text }
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

