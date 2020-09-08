<template>
  <div class="container" id="divInstrumentListConatiner">
    <div>
      <router-link to="/New">
        <md-button class="md-primary">Add New</md-button>
      </router-link>
      <md-button class="md-primary" @click="refreshList">Refresh</md-button>
    </div>
    <Instrument
      v-for="instrument in instrumentList"
      v-bind:key="instrument.modelName"
      v-bind:instrument="instrument"
    ></Instrument>
  </div>
</template>

<script lang="ts">
import Instrument from "./Instrument.vue";
import { Store } from "../store.js";
import Vue from "vue";
const EventBus = new Vue();
export default {
  name: "InstrumentList",
  data: () => {
    return {
      instrumentList: Store.state.instrumentList,
      renderComponent: true,
      componentKey: 0,
    };
  },
  components: { Instrument },
  mounted() {
    // alert("Mounted");
    EventBus.$on("custom-save-event", (foo) => {
      alert(foo);
      console.log(foo); // should be `bar`
    });
  },
  methods: {
    // saveNewInstrument: function(inst) {
    //   // console.log(inst);
    //   // alert("called");
    //   // if (!this;.instrumentList.filter((n) => n.name !== inst.name).length) {
    //   //   this.instrumentList.push(inst);
    //   // }
    // },
    // removeInstrument: function(id) {
    //   this.instrumentList = this.instrumentList.filter((n) => n.id !== id);
    // },

    refreshList: function() {
      this.componentKey += 1;
      // this.renderComponent = true;
    },
  },
};
</script>
