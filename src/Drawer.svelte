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
<main>
	<h2>Drawer</h2>
  <button on:click={ productionPhase }>Production Phase</button>
  {#if !$spendCredits}
    <button on:click={ enableSpendCredits }>Spend Credits</button>
  {:else}
    <button on:click={ disableSpendCredits }>Cancel Spend Credits</button>
    <button on:click={ commitSpendCredits }>Commit Spend Credits</button>
  {/if}

  <ul class="log">
    {#each $creditRegister as item}
      <li>
        {item.type} : {item.amount >= 0 ? '+'+item.amount : item.amount}
      </li>
    {/each}
  </ul>

</main>
