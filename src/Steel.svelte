<script>
import { onDestroy } from 'svelte'
import { state, spendCredits, creditRegister, queueSpend } from './stores'

const dec5 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n - 5))
const dec1 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n + 1))
const inc5 = () => queueSpend($spendCredits, $creditRegister, 'SteelS', $state, (n => n + 5))
const decP = () => queueSpend($spendCredits, $creditRegister, 'SteelP', $state, (n => n - 1))
const incP = () => queueSpend($spendCredits, $creditRegister, 'SteelP', $state, (n => n + 1))
</script>

<main>
<h2>
  <button on:click={ dec5 }>-5</button>
  <button on:click={ dec1 }>-1</button>
  Steel 🍱 : { $state.SteelS }
  <button on:click={ inc1 }>+1</button>
  <button on:click={ inc5 }>+5</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Steel ⚛ : { $state.SteelP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
