<script>
import { onDestroy } from 'svelte'
import { state, spendCredits, creditRegister, queueSpend } from './stores'

const dec8 = () => queueSpend($spendCredits, $creditRegister, 'PlantS', $state, (n => n - 8))
const dec1 = () => queueSpend($spendCredits, $creditRegister, 'PlantS', $state, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, $creditRegister, 'PlantS', $state, (n => n + 1))
const decP = () => queueSpend($spendCredits, $creditRegister, 'PlantP', $state, (n => n - 1))
const incP = () => queueSpend($spendCredits, $creditRegister, 'PlantP', $state, (n => n + 1))
</script>

<div class="grid-area-container grid-area-container-plants">
  PLANTS
  <div class="grid-area-income grid-area-plants">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>MegaCredits Income</span>
        </div>
        <div class="counter-count">
          { $state.PlantP }
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

  <div class="grid-area-resources grid-area-resources grid-area-resources-plants">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Plants Resources</span>
        </div>
        <div class="counter-count">
          { $state.PlantS }
        </div>
        <div class="counter-change">
          +4
        </div>
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources counter-buttons-resources-plant-tile">
          <button on:click={ dec8 } class="counter-button-resource plant-tile">
            <div class="plant-tile-icon">
              ⬢
            </div>
            <div class="plant-tile-count">
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
