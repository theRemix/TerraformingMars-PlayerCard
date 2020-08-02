<script>
import { onDestroy } from 'svelte'
import { PlantS, PlantP } from './stores'

const dec8 = () => PlantS.update(n => n - 8)
const dec1 = () => PlantS.update(n => n - 1)
const inc1 = () => PlantS.update(n => n + 1)
const decP = () => PlantP.update(n => n - 1)
const incP = () => PlantP.update(n => n + 1)
</script>

<main>
<h2>
  <button on:click={ dec8 }>-8</button>
  <button on:click={ dec1 }>-1</button>
  Plants 🍱 : { $PlantS }
  <button on:click={ inc1 }>+1</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Plants ⚛ : { $PlantP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
