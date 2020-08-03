<script>
import { state, spendCredits, creditRegister } from './stores'

const enableSpendCredits = () => spendCredits.set(true)
const disableSpendCredits = () => { // undo all transactions in register
  $creditRegister.forEach(({ type, amount }) =>
    state.set({
      ...$state,
      [type]: $state[type] - amount
    })
  )
  creditRegister.set([])
  spendCredits.set(false)
}
const commitSpendCredits = () => { // empty creditRegister
  creditRegister.set([])
  spendCredits.set(false)
}

</script>

{#if !$spendCredits}
  <button on:click={ enableSpendCredits }>Spend Credits</button>
{:else}
  <button on:click={ disableSpendCredits }>Cancel Spend Credits</button>
  <button on:click={ commitSpendCredits }>Commit Spend Credits</button>
{/if}
