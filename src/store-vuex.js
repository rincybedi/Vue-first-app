import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    instrumentList: [
      {
        modelName: "Ibanez GRG170DX Electric Guitar, Black",
        desc: `GRG-shape maple neck
        Basswood body
        24 medium frets
        Rosewood fingerboard
        Fat 10 bridge
        Country of Origin: Indonesia`,
        imageSrc:
          "data:image/jpeg;base64,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",
        type: "",
        listPrice: "413",
      },
      {
        modelName: "Fender Squier 0370005506 Bullet Fat",
        desc: `Chord with comfort and bend strings with ease from this 'c' shaped satin finished neck, 21 medium jumbo frets and modern 9.5 fingerboard radius
        Rock a little harder and experience rich sustain from the dual coil humbucking pickup located near the synchronized tremolo
        Express yourself by creating sharp and flat pitch variations via the chrome synchronized tremolo indicative of the Stratocaster`,
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWBxuaCVgS3lBm8ek0dDopbdsuCqn5-bqmGg&usqp=CAU",
        type: "",
        listPrice: "233",
      },
    ],
  },

  mutations: {
    addNewInstrument: function(state, payload) {
      this.instrumentList.push({
        modelName: payload.modelName,
        desc: payload.desc,
        listPrice: payload.listPrice,
        type: payload.type,
        imageSrc: payload.imageSrc,
      });
    },
  },
});
