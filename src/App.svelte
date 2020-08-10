<script>
  import Drawer from './Drawer.svelte'
  import MegaCredits from './MegaCredits.svelte'
  import Steel from './Steel.svelte'
  import Titanium from './Titanium.svelte'
  import Plants from './Plants.svelte'
  import Energy from './Energy.svelte'
  import Heat from './Heat.svelte'
</script>

<div class="flip-your-phone">
  Please turn your device to landscape orientation.
</div>
<div class="grid">
  <div class="row">
    <div class="column medium-3 summary-column">
      <Drawer />
    </div>
    <div class="column medium-9 main-column">
      <div class="main">
        <div class="main-row">
          <div class="row">
            <div class="column medium-4">
              <MegaCredits />
            </div>
            <div class="column medium-4">
              <Steel />
            </div>
            <div class="column medium-4">
              <Titanium />
            </div>
          </div>
        </div>
        <div class="main-row">
          <div class="row">
            <div class="column medium-4">
              <Plants />
            </div>
            <div class="column medium-4">
              <Energy />
            </div>
            <div class="column medium-4">
              <Heat />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
