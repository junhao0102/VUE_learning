export const mixin = {
  methods: {
    showname() {
      alert(this.name);
    }
  },
  mounted() {
    console.log("mixin mounted");
  }
};
