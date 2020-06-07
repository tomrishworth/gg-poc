<template>
  <div id="app">
    <p class="text-center">
      Scenario 1: Calculated monthly contributions are
      <strong>less than</strong> maximum contributions
    </p>
    <div class="contributions mb-5">
      <div class="d-flex align-items-center mb-4">
        <div class="font-weight-bold flex-shrink-0 mr-4">Your Monthly Contributions:</div>
        <b-form-input type="number" style="width: 80px" v-model="slider1"></b-form-input>
      </div>
      <custom-slider min="0" max="90" v-model="slider1" />
    </div>

    <p class="text-center">
      Scenario 2: Calculated monthly contributions are
      <strong>greater than</strong> maximum contributions
    </p>
    <div class="contributions mb-5">
      <div class="d-flex align-items-center mb-4">
        <div class="font-weight-bold flex-shrink-0 mr-4">Your Monthly Contributions:</div>
        <b-form-input style="width: 80px" v-model="slider2"></b-form-input>
      </div>
      <custom-slider min="0" max="70" overMax :yourMax="40" v-model="slider2" />
    </div>
    <div class="contributions mb-5">
      <div class="d-flex align-items-center mb-4">
        <div class="font-weight-bold flex-shrink-0 mr-4">Your Monthly Contributions:</div>
        <b-form-input style="width: 80px" v-model="slider3"></b-form-input>
      </div>
      <custom-slider min="0" max="70" :yourMax="65" overMax v-model="slider3" />
    </div>
  </div>
</template>

<script>
import CustomSlider from "@/components/CustomRangeSlider";

export default {
  name: "App",
  data() {
    return {
      slider1: 70,
      slider2: 40,
      slider3: 65
    };
  },
  components: {
    CustomSlider
  }
};
</script>

<style lang="scss">
$lighter-grey: #f5f6fa;
$light-grey: #e3e9eb;
$light-blue: #4f9efa;
$dark-blue: #12426d;

#app {
  background: #fff;
  margin-top: 100px;
}

.contributions {
  padding: 30px 100px 50px 60px;
  border-radius: 8px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: $lighter-grey;
  color: $dark-blue;
}
</style>
