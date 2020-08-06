<script>
import { state, spendCredits, creditRegister, creditRegisterTotal, resetConfirmVisible } from './stores'
import HistoryControls from './HistoryControls.svelte'
import ResetControls from './ResetControls.svelte'

// item: {type, amount}
const itemQuantityFormat = ({ type, amount }) => {
  const amountStr = amount >= 0 ? '+'+amount : amount

  switch(type){
    case 'SteelS':
      return `${amountStr} (${amount * 2} M€)`
      break
    case 'TitaniumS':
      return `${amountStr} (${amount * 3} M€)`
      break
    default:
      return amountStr
  }
}

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

<div style="border:1px solid red;">

{#if !$spendCredits}
  <button on:click={ enableSpendCredits }>Spend Credits</button>

  <ResetControls />

  {#if !$resetConfirmVisible}
    <HistoryControls />
  {/if}
{/if}


</div>

<div class="grid-summary-container">
  <div class="grid-summary">

  {#if $spendCredits}
    <button class="clear-all-button" style="border:1px solid red;" on:click={ disableSpendCredits }>Clear All</button>
  {/if}

    <ul class="log grid-table">
      {#each $creditRegister as item}
        <li class="grid-table-row">
          <div class="grid-table-resource">
            <div class="spend-income spend-income-mega-credits">
              {item.type}
              <span>{item.type}</span>
            </div>
          </div>
          <div class="grid-table-quantity">
            {itemQuantityFormat(item)}
          </div>
          <div class="grid-table-mega-credits">
          </div>
        </li>
      {/each}
    </ul>

    {#if $spendCredits && $creditRegister.length}
      <div class="grid-table-row grid-table-summary">
        <div class="grid-table-resource">
          <div class="spend-resource spend-resource-mega-credits">
            <span>MCR</span>
          </div>
        </div>
        <div class="grid-table-quantity">
          {$creditRegisterTotal}
        </div>
      </div>
    {/if}

  </div>

  <div class="grid-actions">
  {#if $spendCredits && $creditRegister.length}
    <button class="submit-button" style="border:1px solid red;" on:click={ commitSpendCredits }>Submit</button>
  {/if}
  </div>
</div>
