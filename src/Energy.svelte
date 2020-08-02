<script>
import { onDestroy } from 'svelte'
import { EnergyS, EnergyP } from './stores'

let energyS = 0
let energyP = 0

const unsubS = EnergyS.subscribe(n => energyS = n)
const unsubP = EnergyP.subscribe(n => energyP = n)

onDestroy(() => {
  unsubS()
  unsubP()
})

const dec1 = () => EnergyS.update(n => n - 1)
const inc1 = () => EnergyS.update(n => n + 1)
const decP = () => EnergyP.update(n => n - 1)
const incP = () => EnergyP.update(n => n + 1)
</script>

<main>
<h2>
  <button on:click={ dec1 }>-1</button>
  Energy 🍱 : { energyS }
  <button on:click={ inc1 }>+1</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  Energy ⚛ : { energyP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
