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
  <button class="button-reset" on:click={ showConfirm }>☰</button>
{:else}
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-body modal-reset">
        <h1>Are you sure?</h1>
        <p>All game points will be reset to default values.</p>
      </div>
      <div class="modal-buttons">
        <button class="button-cancel" on:click={ hideConfirm }>Cancel</button>
        <button class="button-confirm" on:click={ resetBoard }>Confirm</button>
      </div>
    </div>
  </div>
{/if}
