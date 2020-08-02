<script>
import {
  Generation, TR,
  MCreditS, MCreditP,
  SteelS, SteelP,
  TitaniumS, TitaniumP,
  PlantS, PlantP,
  EnergyS, EnergyP,
  HeatS, HeatP
} from './stores'

const productionPhase = () => {
  // Increment Generation
  Generation.update(n => n + 1)

  // EnergyS -> HeatS
  HeatS.update(n => n + $EnergyS)

  // Income = TR + MCP
  MCreditS.update(n => n + $TR + $MCreditP)

  // Resource Production
  SteelS.update(n => n + $SteelP)
  TitaniumS.update(n => n + $TitaniumP)
  PlantS.update(n => n + $PlantP)
  EnergyS.update(n => n + $EnergyP)
  HeatS.update(n => n + $HeatP)
}
</script>
<main>
	<h2>Drawer</h2>
  <button on:click={ productionPhase }>Production Phase</button>
</main>
