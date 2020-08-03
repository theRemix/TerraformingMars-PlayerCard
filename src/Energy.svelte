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

<main>
<h2>
  <button on:click={ dec1 }>-1</button>
  Energy 🍱 : { $state.EnergyS }
  <button on:click={ inc1 }>+1</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Energy ⚛ : { $state.EnergyP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
