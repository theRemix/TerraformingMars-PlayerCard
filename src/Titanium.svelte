<script>
import { onDestroy } from 'svelte'
import {
  TitaniumS, TitaniumP,
  spendCredits, creditRegister, queueSpend
} from './stores'

const dec5 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TitaniumS', TitaniumS, $TitaniumS, (n => n - 5))
const dec1 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TitaniumS', TitaniumS, $TitaniumS, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TitaniumS', TitaniumS, $TitaniumS, (n => n + 1))
const inc5 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TitaniumS', TitaniumS, $TitaniumS, (n => n + 5))
const decP = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TitaniumP', TitaniumP, $TitaniumP, (n => n - 1))
const incP = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TitaniumP', TitaniumP, $TitaniumP, (n => n + 1))
</script>

<div class="grid-area-container grid-area-container-mega-credits">
  <div class="grid-area-income grid-area-mega-credits">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>MegaCredits Income</span>
        </div>
        <div class="counter-count">
          { $TitaniumP }
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

  <div class="grid-area-resources grid-area-resources grid-area-resources-mega-credits">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>MegaCredits Resources</span>
        </div>
        <div class="counter-count">
          { $TitaniumS }
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