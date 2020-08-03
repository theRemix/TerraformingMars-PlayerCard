<script>
  import Drawer from './Drawer.svelte'
  import TerraformRank from './TerraformRank.svelte'
  import MegaCredits from './MegaCredits.svelte'
  import Steel from './Steel.svelte'
  import Titanium from './Titanium.svelte'
  import Plants from './Plants.svelte'
  import Energy from './Energy.svelte'
  import Heat from './Heat.svelte'
</script>


<div class="grid">
  <div class="row">
    <div class="column medium-3 summary-column">
      <Drawer />
    </div>
    <div class="column medium-9 main-column">
      <div class="main">
        <div class="main-header">
          <div class="row">
            <div class="column medium-4 tr-column">
              <TerraformRank />
            </div>
            <div class="column medium-4 production-button-column">
              <div class="grid-area">
                <button class="button-production">
                  <span class="production-generation">3</span>
                  <span class="production-text">Start Production</span>
                </button>
              </div>
            </div>
            <div class="column action-buttons-column">
              <div class="grid-area">
                <div class="action-buttons">
                  <button class="button-undo">
                    ↺
                  </button>
                  <button class="button-redo">
                    ↻
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-row">
          <div class="row">
            <div class="column medium-4">
              <MegaCredits />
            </div>
            <div class="column medium-4">
              <div class="grid-area-container grid-area-container-steel">
                <div class="grid-area-income grid-area-steel">
                  <div class="grid-area">
                    <div class="counter">
                      <div class="counter-label">
                        <span>Steel Income</span>
                      </div>
                      <div class="counter-count">
                        8
                      </div>
                      <div class="counter-change">
                        +4
                      </div>
                    </div>
                    <div class="counter-buttons">
                      <div class="counter-buttons-resources counter-buttons-resources-five">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                      <div class="counter-buttons-resources counter-buttons-resources-one">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid-area-resources grid-area-resources grid-area-resources-steel">
                  <div class="grid-area">
                    <div class="counter">
                      <div class="counter-label">
                        <span>Steel Resources</span>
                      </div>
                      <div class="counter-count">
                        8
                      </div>
                      <div class="counter-change">
                        +4
                      </div>
                    </div>
                    <div class="counter-buttons">
                      <div class="counter-buttons-resources counter-buttons-resources-five">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                      <div class="counter-buttons-resources counter-buttons-resources-one">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column medium-4">
              <div class="grid-area-container grid-area-container-titanium">
                <div class="grid-area-income grid-area-titanium">
                  <div class="grid-area">
                    <div class="counter">
                      <div class="counter-label">
                        <span>Titanium Income</span>
                      </div>
                      <div class="counter-count">
                        8
                      </div>
                      <div class="counter-change">
                        +4
                      </div>
                    </div>
                    <div class="counter-buttons">
                      <div class="counter-buttons-resources counter-buttons-resources-five">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                      <div class="counter-buttons-resources counter-buttons-resources-one">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="grid-area-resources grid-area-resources grid-area-resources-titanium">
                  <div class="grid-area">
                    <div class="counter">
                      <div class="counter-label">
                        <span>Titanium Resources</span>
                      </div>
                      <div class="counter-count">
                        8
                      </div>
                      <div class="counter-change">
                        +4
                      </div>
                    </div>
                    <div class="counter-buttons">
                      <div class="counter-buttons-resources counter-buttons-resources-five">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                      <div class="counter-buttons-resources counter-buttons-resources-one">
                        <button class="counter-button-resource plus">+</button>
                        <button class="counter-button-resource minus">-</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Steel />
        <Titanium />
        <Plants />
        <Energy />
        <Heat />
      </div>
    </div>
  </div>
</div>