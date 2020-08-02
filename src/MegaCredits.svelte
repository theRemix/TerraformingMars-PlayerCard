<script>
import { onDestroy } from 'svelte'
import { MCreditS, MCreditP } from './stores'

let mcS = 0
let mcP = 0

const unsubS = MCreditS.subscribe(n => mcS = n)
const unsubP = MCreditP.subscribe(n => mcP = n)

onDestroy(() => {
  unsubS()
  unsubP()
})

const dec5 = () => MCreditS.update(n => n - 5)
const dec1 = () => MCreditS.update(n => n - 1)
const inc1 = () => MCreditS.update(n => n + 1)
const inc5 = () => MCreditS.update(n => n + 5)
const decP = () => MCreditP.update(n => n - 1)
const incP = () => MCreditP.update(n => n + 1)
</script>

<main>
<h2>
  <button on:click={ dec5 }>-5</button>
  <button on:click={ dec1 }>-1</button>
  M€ 🍱 : { mcS }
  <button on:click={ inc1 }>+1</button>
  <button on:click={ inc5 }>+5</button>
</h2>
<h2>
  <button on:click={ decP }>-1</button>
  M€ ⚛ : { mcP }
  <button on:click={ incP }>+1</button>
</h2>
</main>
