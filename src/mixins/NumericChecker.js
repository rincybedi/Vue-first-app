export default {
  methods: {
    checkInputIsNumeric: function(input) {
      if (isNaN(input)) {
        return false;
      }

      return true;
    },
  },
};
