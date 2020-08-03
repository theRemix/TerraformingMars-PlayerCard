<script>
import { resetState } from './stores'

let confirmModal = false
const showConfirm = () => confirmModal = true
const hideConfirm = () => confirmModal = false
const resetBoard = () => {
  resetState()
  confirmModal = false
}
</script>

{#if !confirmModal}
  <button on:click={ showConfirm }>Reset Board</button>
{:else}
  <button on:click={ hideConfirm }>Cancel</button>
  <button on:click={ resetBoard }>Confirm</button>
{/if}
