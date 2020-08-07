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

<div class="action-buttons">
  <ResetControls />
</div>

{#if !$spendCredits}
  <div class="switch-mode-button">
    <button class="button-switch" on:click={ enableSpendCredits }>Enter Spend Mode</button>
  </div>

  {#if !$resetConfirmVisible}
    <HistoryControls />
  {/if}

{/if}

{#if $spendCredits}
  <div class="exit-spend-mode-button">
    <button class="button-exit" on:click={ disableSpendCredits }>Exit Spend Mode</button>
  </div>
{/if}

<div class="grid-summary-container">
  <div class="grid-summary">
    <ul class="grid-table">
      {#each $creditRegister as item}
        <li class="grid-table-row">
          <div class="grid-table-resource">
            <div class="grid-table-quantity">
              {itemQuantityFormat(item)}
            </div>
            <div class="counter-label spend spend-{item.type}">
              <span>{item.type}</span>
            </div>
            <div style="border: 1px solid red;" class="grid-table-mega-credits">
              -0 <span class="mini-counter-label"></span>
            </div>
          </div>
        </li>
      {/each}
    </ul>

    {#if $spendCredits && $creditRegister.length}
      <div class="grid-table-row grid-table-summary">
        <div class="grid-table-resource">
          <div class="grid-table-quantity">
            {$creditRegisterTotal}
          </div>
          <div class="counter-label spend spend-MCreditS">
            <span>MegaCredits</span>
          </div>
          <div class="grid-table-mega-credits">
            M€ Value
          </div>
        </div>
      </div>
    {/if}

  </div>

  {#if $spendCredits && !$creditRegister.length}
    <p class="placeholder-text">Use the counters to plan your move, then click Buy to initate all actions.</p>
  {/if}

  <div class="grid-actions">
  {#if $spendCredits && $creditRegister.length}
    <button class="button-buy" on:click={ commitSpendCredits }>Buy</button>
  {/if}
  </div>
</div>
