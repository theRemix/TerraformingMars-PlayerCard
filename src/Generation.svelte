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

<div class="grid-area">
  <span class="production-generation">{ $state.Generation }</span>

  <button class="button-production" disabled={$spendCredits} on:click={ productionPhase }>
    <span class="production-text">Start Production</span>
  </button>
</div>
