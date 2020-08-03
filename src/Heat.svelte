<script>
import { onDestroy } from 'svelte'
import {
  HeatS, HeatP,
  spendCredits, creditRegister, queueSpend
} from './stores'

const dec8 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'HeatS', HeatS, $HeatS, (n => n - 8))
const dec1 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'HeatS', HeatS, $HeatS, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'HeatS', HeatS, $HeatS, (n => n + 1))
const decP = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'HeatP', HeatP, $HeatP, (n => n - 1))
const incP = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'HeatP', HeatP, $HeatP, (n => n + 1))
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
          { $HeatP }
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

  <div class="grid-area-resources grid-area-resources grid-area-resources-heat">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>Heat Resources</span>
        </div>
        <div class="counter-count">
          { $HeatS }
        </div>
        <div class="counter-change">
          +4
        </div>
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

