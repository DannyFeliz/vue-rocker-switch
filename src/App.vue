<template>
  <div id="app">
    <RocketSwitch @change="isOn => currenValue = isOn"/>
  </div>
</template>

<script>
import RocketSwitch from "./components/RockerSwitch.vue";

export default {
  name: "app",
  components: {
    RocketSwitch
  },
  data() {
    return {
      currenValue: false
    };
  }
};
</script>

<style>
#app div {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
}
</style>
