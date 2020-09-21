<script>
import { fly, fade } from 'svelte/transition'
import { state, changeCounters, creditRegister, queueSpend } from './stores'
import { counterChangeInAnim } from './utils'

const dec8 = () =>
  queueSpend($creditRegister, 'PlantS', $state, (n => n - 8))

const dec1 = () =>
  queueSpend($creditRegister, 'PlantS', $state, (n => n - 1))

const inc1 = () =>
  queueSpend($creditRegister, 'PlantS', $state, (n => n + 1))

const decP = () =>
  queueSpend($creditRegister, 'PlantP', $state, (n => n - 1))

const incP = () =>
  queueSpend($creditRegister, 'PlantP', $state, (n => n + 1))

</script>

<div class="grid-area-container grid-area-container">
  <div class="grid-area-income grid-area-PlantP">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ decP } class="counter-button-resource">-1</button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.PlantP }
        </div>
        {#if $changeCounters.PlantP.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.PlantP.text }
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

  <div class="grid-area-resources grid-area-PlantS">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <div class="button-spacer"></div>
          <button on:click={ dec1 } class="counter-button-resource">-1</button>
          <button on:click={ dec8 } class="counter-button-resource counter-button-resource-plants">
            <div class="counter-button-inner">
              <span class="counter-button-plants-graphic"></span>
              <span class="counter-button-plants-amount">-8</span>
            </div>
          </button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.PlantS }
        </div>
        <div class="counter-label">
          <span>Plants</span>
        </div>
        {#if $changeCounters.PlantS.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.PlantS.text }
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
