<script>
import { onDestroy } from 'svelte'
import { TR } from './stores'

let tr = 0

const unsubscribe = TR.subscribe(n => tr = n)

onDestroy(unsubscribe)

const dec5 = () => TR.update(n => n - 5)
const dec1 = () => TR.update(n => n - 1)
const inc1 = () => TR.update(n => n + 1)
const inc5 = () => TR.update(n => n + 5)
</script>

<main>
<h2>
  <button on:click={ dec5 }>-5</button>
  <button on:click={ dec1 }>-1</button>
  TR: { tr }
  <button on:click={ inc1 }>+1</button>
  <button on:click={ inc5 }>+5</button>
</h2>
</main>
