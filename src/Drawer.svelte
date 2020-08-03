<script>
import { creditRegister } from './stores'
import SpendCreditsControls from './SpendCreditsControls.svelte'
import ResetControls from './ResetControls.svelte'

</script>

<div style="border:1px solid red;">

<SpendCreditsControls />
<ResetControls />


</div>

<div class="grid-summary-container">
  <div class="grid-summary">

    <button class="clear-all-button" style="border:1px solid red;">Clear All</button>

    <ul class="log grid-table">
      {#each $creditRegister as item}
        <li class="grid-table-row">
          <div class="grid-table-resource">
            <div class="spend-income spend-income-mega-credits">
              {item.type}
              <span>{item.type}</span>
            </div>
          </div>
          <div class="grid-table-quantity">
            {item.amount >= 0 ? '+'+item.amount : item.amount}
          </div>
          <div class="grid-table-mega-credits">
          </div>
        </li>
      {/each}
    </ul>

    <div class="grid-table-row grid-table-summary">
      <div class="grid-table-resource">
        <div class="spend-resource spend-resource-mega-credits">
          <span>MCR</span>
        </div>
      </div>
      <div class="grid-table-quantity">
        -4
      </div>
    </div>

  </div>

  <div class="grid-actions">
    <button class="submit-button" style="border:1px solid red;">Submit</button>
  </div>
</div>
