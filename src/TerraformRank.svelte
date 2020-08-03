<script>
import { onDestroy } from 'svelte'
import HistoryControls from './HistoryControls.svelte'
import { state, spendCredits, creditRegister, queueSpend } from './stores'

const dec5 = () => queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n - 5))
const dec1 = () => queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n - 1))
const inc1 = () => queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n + 1))
const inc5 = () => queueSpend($spendCredits, $creditRegister, 'TR', $state, (n => n + 5))
</script>

<main>
<h2>
  Generation { $state.Generation }
</h2>
<h2>
  <button on:click={ dec5 }>-5</button>
  <button on:click={ dec1 }>-1</button>
  TR: { $state.TR }
  <button on:click={ inc1 }>+1</button>
  <button on:click={ inc5 }>+5</button>
</h2>
<HistoryControls />
</main>
