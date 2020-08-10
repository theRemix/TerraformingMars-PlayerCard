<script>
import { state, spendCredits, creditRegister, creditRegisterTotal, resetConfirmVisible } from './stores'
import HistoryControls from './HistoryControls.svelte'
import ResetControls from './ResetControls.svelte'
import TerraformRank from './TerraformRank.svelte'
import Generation from './Generation.svelte'

// item: {type, amount} => "+/- amount"
const itemQuantityFormat = ({ amount }) =>
  amount >= 0 ? '+'+amount : amount

// item: {type, amount} => "(+/i mc)"
const itemQuantityConvertedFormat = ({ type, amount }) => {
  const prefixStr = amount >= 0 ? '+' : ''

  switch(type){
    case 'SteelS':
      return `${prefixStr}${amount * 2}`
      break
    case 'TitaniumS':
      return `${prefixStr}${amount * 3}`
      break
    default:
      return ''
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

<TerraformRank />

{#if !$spendCredits}
  <div class="normal-mode">
    <div class="switch-mode-button">
      <button class="button-switch" on:click={ enableSpendCredits }>Enter Buy Mode</button>
    </div>

    {#if !$resetConfirmVisible}
      <HistoryControls />
    {/if}
  </div>
  
  <div class="action-buttons">
    <ResetControls />
    <Generation />
  </div>
{/if}

{#if $spendCredits}
<div class="spend-mode">
  <div class="exit-spend-mode-button">
    <button class="button-exit" on:click={ disableSpendCredits }>Cancel</button>
  </div>

  {#if $spendCredits && !$creditRegister.length}
    <p class="placeholder-text">Use the counters to plan your move, then click Buy to initate all actions.</p>
  {/if}


  <div class="grid-summary-container">
    {#if $spendCredits && $creditRegister.length}
      <div class="grid-mega-credits-total">
        <div class="grid-table-resource">
          <div class="grid-table-quantity">
            {$creditRegisterTotal}
          </div>
          <div class="counter-label spend spend-MCreditS">
            <span>MegaCredits</span>
          </div>
        </div>
        <div class="grid-table-mega-credits">
          value
        </div>
      </div>
    {/if}
    <div class="grid-summary">
      <ul class="grid-table">
        {#each $creditRegister as item}
          <li class="grid-table-row">
            <div class="grid-table-resource">
              <div class="grid-table-quantity quantity-type-{item.type}">
                {itemQuantityFormat(item)}
              </div>
              <div class="counter-label spend spend-{item.type}">
                <span>{item.type}</span>
              </div>
            </div>
            {#if itemQuantityConvertedFormat(item)}
              <div class="grid-table-mega-credits">
                {itemQuantityConvertedFormat(item)} <span class="mini-counter-label"></span>
              </div>
            {/if}
          </li>
        {/each}
      </ul>

    </div>  
  </div>

  <div class="grid-actions">
    {#if $spendCredits && $creditRegister.length}
      <button class="button-buy" on:click={ commitSpendCredits }>Buy</button>
    {/if}
  </div>
</div>

{/if}

