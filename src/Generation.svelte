<script>
import { state, creditRegister, spendCredits } from './stores'

const productionPhase = () => {
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
}

</script>


<div class="generation">
  <button class="button-generation" disabled={$spendCredits} on:click={ productionPhase }>
    { $state.Generation }
    <span>↑</span>
  </button>
  <div class="generation-label">Generation</div>
</div>
