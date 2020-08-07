<script>
import { state, creditRegister, spendCredits } from './stores'

const productionPhase = () => {
  state.update(state => ({
    ...state,

    // Increment Generation
    Generation: state.Generation + 1,

    // EnergyS -> HeatS
    HeatS: state.HeatS + state.EnergyS,

    // Income = TR + MCP
    MCreditS: state.MCreditS + state.TR + state.MCreditP,

    // Resource Production
    SteelS: state.SteelS + state.SteelP,
    TitaniumS: state.TitaniumS + state.TitaniumP,
    PlantS: state.PlantS + state.PlantP,
    EnergyS: state.EnergyS + state.EnergyP,
    HeatS: state.HeatS + state.HeatP,
  }))
}

</script>

<div class="grid-area-container grid-area-container-generation">
  <div class="grid-area-resources grid-area-generation">
    <div class="grid-area">
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <div class="counter-button-resource counter-button-resource-placeholder"></div>
          <div class="counter-button-resource counter-button-resource-placeholder"></div>
        </div>
      </div>
      <div class="counter">
        <div class="counter-count">
          { $state.Generation }
        </div>
        <div class="counter-label">
          <span>Generation</span>
        </div>
      </div>
      <div class="counter-buttons">
        <div class="counter-buttons-resources">
          <button class="counter-button-resource" disabled={$spendCredits} on:click={ productionPhase }>↑</button>
          <div class="counter-button-resource counter-button-resource-placeholder"></div>
        </div>
      </div>
    </div>
  </div>
</div>