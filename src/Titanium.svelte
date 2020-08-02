<script>
import { onDestroy } from 'svelte'
import { TitaniumS, TitaniumP } from './stores'

let titaniumS = 0
let titaniumP = 0

const unsubS = TitaniumS.subscribe(n => titaniumS = n)
const unsubP = TitaniumP.subscribe(n => titaniumP = n)

onDestroy(() => {
  unsubS()
  unsubP()
})

const dec5 = () => TitaniumS.update(n => n - 5)
const dec1 = () => TitaniumS.update(n => n - 1)
const inc1 = () => TitaniumS.update(n => n + 1)
const inc5 = () => TitaniumS.update(n => n + 5)
const decP = () => TitaniumP.update(n => n - 1)
const incP = () => TitaniumP.update(n => n + 1)
</script>

<main>
<h2>
  <button on:click={ dec5 }>-5</button>
  <button on:click={ dec1 }>-1</button>
  Titanium 🍱 : { titaniumS }
  <button on:click={ inc1 }>+1</button>
  <button on:click={ inc5 }>+5</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Titanium ⚛ : { titaniumP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
