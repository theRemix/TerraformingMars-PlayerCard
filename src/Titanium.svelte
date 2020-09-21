<script>
import { fly, fade } from 'svelte/transition'
import { state, changeCounters, creditRegister, queueSpend } from './stores'
import { counterChangeInAnim } from './utils'

const dec5 = () =>
  queueSpend($creditRegister, 'TitaniumS', $state, (n => n - 5))

const dec1 = () =>
  queueSpend($creditRegister, 'TitaniumS', $state, (n => n - 1))

const inc1 = () =>
  queueSpend($creditRegister, 'TitaniumS', $state, (n => n + 1))

const inc5 = () =>
  queueSpend($creditRegister, 'TitaniumS', $state, (n => n + 5))

const decP = () =>
  queueSpend($creditRegister, 'TitaniumP', $state, (n => n - 1))

const incP = () =>
  queueSpend($creditRegister, 'TitaniumP', $state, (n => n + 1))

</script>

<div class="grid-area-container grid-area-container">

  <div class="grid-area-resources grid-area-TitaniumS">
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
          { $state.TitaniumS }
        </div>
        <div class="counter-label">
          <span>Titanium</span>
        </div>
        {#if $changeCounters.TitaniumS.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.TitaniumS.text }
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

  <div class="grid-area-income grid-area-TitaniumP">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button on:click={ decP } class="counter-button-resource">-1</button>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.TitaniumP }
        </div>
        {#if $changeCounters.TitaniumP.text !== ''}
        <div class="counter-change" in:fly={counterChangeInAnim} out:fade>
          { $changeCounters.TitaniumP.text }
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

