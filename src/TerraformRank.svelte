<script>
import { onDestroy } from 'svelte'
import {
  TR, Generation,
  spendCredits, creditRegister, queueSpend
} from './stores'

const dec5 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TR', TR, $TR, (n => n - 5))
const dec1 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TR', TR, $TR, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TR', TR, $TR, (n => n + 1))
const inc5 = () => queueSpend($spendCredits, creditRegister, $creditRegister, 'TR', TR, $TR, (n => n + 5))
</script>

<div class="grid-area-container grid-area-container-tr">
  <div class="grid-area-income grid-area-tr">
    <div class="grid-area">
      <div class="counter">
        <div class="counter-label">
          <span>TR Income</span>
        </div>
        <div class="counter-count">
          { $TR }
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


<h2>
  Generation { $Generation }
</h2>