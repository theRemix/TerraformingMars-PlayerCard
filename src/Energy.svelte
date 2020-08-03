<script>
import { onDestroy } from 'svelte'
import {
  state,
  spendCredits, creditRegister, queueSpend
} from './stores'

const dec1 = () => queueSpend($spendCredits, $creditRegister, 'EnergyS', $state, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, $creditRegister, 'EnergyS', $state, (n => n + 1))
const decP = () => queueSpend($spendCredits, $creditRegister, 'EnergyP', $state, (n => n - 1))
const incP = () => queueSpend($spendCredits, $creditRegister, 'EnergyP', $state, (n => n + 1))
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

  <div class="grid-area-resources grid-area-resources grid-area-resources-energy">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Energy Resources</span>
        </div>
        <div class="counter-count">
          { $state.EnergyS }
        </div>
        <div class="counter-change">
          +4
        </div>
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
