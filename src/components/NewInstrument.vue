<template>
  <div id="divNewInstrumentContainer" class="container">
    <span class="md-title">Add New Instrument</span>
    <md-field>
      <label for="modelName">Model</label>
      <md-input id="modelName" v-model="modelName" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-field>
      <label>Description</label>
      <md-textarea v-model="desc" md-counter="80"></md-textarea>
    </md-field>
    <md-field>
      <label for="instImageLink">Image Link</label>
      <md-input id="instImageLink" v-model="instImageLink" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <div>
      <label id="lblInstrumentType">Instrument Type</label>
      <md-radio v-model="instType" value="1">Keyboard</md-radio>
      <md-radio v-model="instType" value="2">Piano</md-radio>
      <md-radio v-model="instType" value="3">Guitar</md-radio>
    </div>
    <md-field>
      <label for="instPrice">List Price</label>
      <md-input
        type="number"
        id="instPrice"
        v-model="instPrice"
        required
      ></md-input>
      <span class="md-error">There is an error</span>
    </md-field>
    <md-button class="md-raised md-primary" @click="saveNew">
      Save
    </md-button>
    <router-link to="/List">
      <md-button class="md-primary">Go To List</md-button>
    </router-link>
  </div>
</template>

<script>
import NumericChecker from "../mixins/NumericChecker";
import { Store } from "../store.js";
export default {
  name: "NewInstrument",
  data: function() {
    return {
      id: Date.now(),
      modelName: "",
      instImageLink: "",
      instType: "",
      instPrice: "",
      desc: "",
      invalidInputMessage: "Invalid Input !!!",
    };
  },
  mixins: [NumericChecker],
  methods: {
    getNewInstrument: function() {
      var instrument = {
        modelName: this.modelName,
        instImageLink: this.instImageLink,
        instType: this.instType,
        instPrice: this.instPrice,
        desc: this.desc,
      };
      this.modelName = "";
      this.instImageLink = "";
      this.instType = "";
      this.instPrice = "";
      this.desc = "";
      return instrument;
    },
    saveNew: function() {
      Store.saveNewInstrument(this.getNewInstrument());
    },
    // emitCustomGlobalEvent: function() {
    //   const EventBus = new Vue();
    //   EventBus.$emit("custom-save-event", this.getNewInstrument());
    // },
  },
  watch: {
    instName: function(newVal, oldVal) {
      console.log("Instrument Name modfied from " + oldVal + " to " + newVal);
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

#lblInstrumentType {
  padding-right: 26px;
  top: -5px;
  position: relative;
}
</style>
