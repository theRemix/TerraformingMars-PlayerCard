<script>
import { creditRegister } from './stores'
import ProductionPhaseControls from './ProductionPhaseControls.svelte'
import SpendCreditsControls from './SpendCreditsControls.svelte'

</script>
<main>
	<h2>Drawer</h2>
  <ProductionPhaseControls />
  <SpendCreditsControls />

  <ul class="log">
    {#each $creditRegister as item}
      <li>
        {item.type} : {item.amount >= 0 ? '+'+item.amount : item.amount}
      </li>
    {/each}
  </ul>

</main>
