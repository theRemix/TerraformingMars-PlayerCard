<script>
import { onDestroy } from 'svelte'
import { HeatS, HeatP } from './stores'

const dec8 = () => HeatS.update(n => n - 8)
const dec1 = () => HeatS.update(n => n - 1)
const inc1 = () => HeatS.update(n => n + 1)
const decP = () => HeatP.update(n => n - 1)
const incP = () => HeatP.update(n => n + 1)
</script>

<main>
<h2>
  <button on:click={ dec8 }>-8</button>
  <button on:click={ dec1 }>-1</button>
  Heat 🍱 : { $HeatS }
  <button on:click={ inc1 }>+1</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Heat ⚛ : { $HeatP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
