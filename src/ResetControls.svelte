<script>
import { resetState, resetConfirmVisible } from './stores'

const showConfirm = () => resetConfirmVisible.set(true)
const hideConfirm = () => resetConfirmVisible.set(false)
const resetBoard = () => {
  resetState()
  hideConfirm()
}
</script>

{#if !$resetConfirmVisible}
  <button on:click={ showConfirm }>Reset Board</button>
{:else}
  <button on:click={ hideConfirm }>Cancel</button>
  <button on:click={ resetBoard }>Confirm</button>
{/if}
