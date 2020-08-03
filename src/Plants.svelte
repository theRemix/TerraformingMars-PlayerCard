<script>
import { onDestroy } from 'svelte'
import { state, spendCredits, creditRegister, queueSpend } from './stores'

const dec8 = () => queueSpend($spendCredits, $creditRegister, 'PlantS', $state, (n => n - 8))
const dec1 = () => queueSpend($spendCredits, $creditRegister, 'PlantS', $state, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, $creditRegister, 'PlantS', $state, (n => n + 1))
const decP = () => queueSpend($spendCredits, $creditRegister, 'PlantP', $state, (n => n - 1))
const incP = () => queueSpend($spendCredits, $creditRegister, 'PlantP', $state, (n => n + 1))
</script>

<main>
<h2>
  <button on:click={ dec8 }>-8</button>
  <button on:click={ dec1 }>-1</button>
  Plants 🍱 : { $state.PlantS }
  <button on:click={ inc1 }>+1</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Plants ⚛ : { $state.PlantP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
