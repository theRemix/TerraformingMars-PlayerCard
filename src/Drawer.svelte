<script>
import {
  Generation, TR,
  MCreditS, MCreditP,
  SteelS, SteelP,
  TitaniumS, TitaniumP,
  PlantS, PlantP,
  EnergyS, EnergyP,
  HeatS, HeatP,
  spendCredits, creditRegister,
} from './stores'

const productionPhase = () => {
  // Increment Generation
  Generation.update(n => n + 1)

  // EnergyS -> HeatS
  HeatS.update(n => n + $EnergyS)

  // Income = TR + MCP
  MCreditS.update(n => n + $TR + $MCreditP)

  // Resource Production
  SteelS.update(n => n + $SteelP)
  TitaniumS.update(n => n + $TitaniumP)
  PlantS.update(n => n + $PlantP)
  EnergyS.update(n => n + $EnergyP)
  HeatS.update(n => n + $HeatP)
}

const Types = {
  MCreditS, MCreditP,
  SteelS, SteelP,
  TitaniumS, TitaniumP,
  PlantS, PlantP,
  EnergyS, EnergyP,
  HeatS, HeatP,
}

const enableSpendCredits = () => spendCredits.set(true)
const disableSpendCredits = () => { // undo all transactions in register
  $creditRegister.forEach(({ type, amount }) =>
    Types[type].update(n => n - amount)
  )
  creditRegister.set([])
  spendCredits.set(false)
}
const commitSpendCredits = () => { // empty creditRegister
  creditRegister.set([])
  spendCredits.set(false)
}

</script>

<div style="border:1px solid red;">

<button on:click={ productionPhase }>Production Phase</button>

{#if !$spendCredits}
  <button on:click={ enableSpendCredits }>Spend Credits</button>
{:else}
  <button on:click={ disableSpendCredits }>Cancel Spend Credits</button>
  <button on:click={ commitSpendCredits }>Commit Spend Credits</button>
{/if}

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
