<template>
  <div class="each-instrument-div" v-if="validateInstrumentType()">
    <div class="card-expansion">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-media>
            <img v-bind:src="instrument.imageSrc" alt="No Image" />
          </md-card-media>
          <md-card-header>
            <div class="md-title">{{ instrument.modelName }}</div>
            <div class="md-subhead">
              {{ instrument.listPrice | appendDollar() }}
            </div>
            <div class="md-subhead" v-fontcolor="blue">
              {{ instrument.type }}
            </div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <md-button
                  class="md-raised md-accent"
                  @click="removeInstrument(instrument.modelName)"
                  >Delete</md-button
                >
              </div>

              <md-card-expand-trigger>
                <md-button>Learn more</md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                {{ instrument.desc }}
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-ripple>
      </md-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Store } from "../store.js";
export default {
  name: "Instrument",
  props: {
    instrument: {
      type: Object,
    },
  },
  filters: {
    modifyType: (value, newType) => {
      return value + "  " + newType;
    },
    appendDollar: (value) => {
      return "$" + value;
    },
  },
  methods: {
    validateInstrumentType: () => {
      return true;
    },

    removeInstrument: (modelName) => {
      Store.removeInstrument(modelName);
    },
  },
};
</script>
<style scoped>
.card-expansion {
  display: inline-block;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.each-instrument-div {
  display: inline-block;
}
</style>
