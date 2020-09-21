<script>
import { state, changeCounters, creditRegister } from './stores'
import { updateCounterChange } from './utils'

const productionPhase = () => {

  // change counter animation
  changeCounters.update(cc => ({
    ...cc,
    HeatS: updateCounterChange(
      cc.HeatS,
      () => $state.EnergyS + $state.HeatP,
    ),
    MCreditS: updateCounterChange(
      cc.MCreditS,
      () => $state.TR + $state.MCreditP,
    ),
    SteelS: updateCounterChange(
      cc.SteelS,
      () => $state.SteelP,
    ),
    TitaniumS: updateCounterChange(
      cc.TitaniumS,
      () => $state.TitaniumP,
    ),
    PlantS: updateCounterChange(
      cc.PlantS,
      () => $state.PlantP,
    ),
    EnergyS: updateCounterChange(
      cc.EnergyS,
      () => $state.EnergyP - $state.EnergyS,
    ),
  }))

  state.update(state => ({
    ...state,

    // Increment Generation
    Generation: state.Generation + 1,

    // EnergyS -> HeatS
    HeatS: state.HeatS + state.EnergyS + state.HeatP,

    // Income = TR + MCP
    MCreditS: state.MCreditS + state.TR + state.MCreditP,

    // Resource Production
    SteelS: state.SteelS + state.SteelP,
    TitaniumS: state.TitaniumS + state.TitaniumP,
    PlantS: state.PlantS + state.PlantP,
    EnergyS: state.EnergyP,
  }))

  hideConfirm()
}

let productionConfirmVisible = false
const showConfirm = () => productionConfirmVisible = true
const hideConfirm = () => productionConfirmVisible = false
</script>


{#if !productionConfirmVisible}
  <button class="button-generation" disabled={$state.spendCredits} on:click={ showConfirm }>
    <div class="generation-text">
      { $state.Generation }
      <span></span>
    </div>

    <div class="generation-label">Generation</div>
  </button>
{:else}
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-body modal-generation">
        <h1>Advance Generation<br />{$state.Generation} → {$state.Generation + 1}</h1>
        <p>Produce income and resources based on TR?</p>
      </div>
      <div class="modal-buttons">
        <button class="button-cancel" on:click={ hideConfirm }>Cancel</button>
        <button class="button-confirm" on:click={ productionPhase }>Confirm</button>
      </div>
    </div>
  </div>
{/if}
