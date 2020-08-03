<script>
import { onDestroy } from 'svelte'
import { state, spendCredits, creditRegister, queueSpend } from './stores'

const dec5 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n - 5))
const dec1 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n + 1))
const inc5 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n + 5))
const decP = () => queueSpend($spendCredits, $creditRegister, 'SteelP', $state, (n => n - 1))
const incP = () => queueSpend($spendCredits, $creditRegister, 'SteelP', $state, (n => n + 1))
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
        <div class="counter-change">
          +4
        </div>
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
        <div class="counter-change">
          +4
        </div>
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
