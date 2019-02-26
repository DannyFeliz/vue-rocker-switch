<template>
  <div id="app">
    <Lightbulb :isOn="currentValue" class="pointer"/>
    <div>
        <code>{{ currentValue }}</code>
    </div>
    <RockerSwitch
      labelOn="Yes"
      labelOff="No"
      activeColorLabel="chartreuse"
      inactiveColorLabel="darkred"
      backgroundColorOn="fuchsia"
      backgroundColorOff="#8389f8"
      borderColor="orange"
      size="medium"
      :value="currentValue"
      :toggle="false"
      @change="isOn => currentValue = isOn"
    />
    <RockerSwitch
      :size="1.2"
      :value="currentValue"
      background-color-on="green"
      activeColorLabel="yellow"
      @change="isOn => currentValue = isOn"
    />

  </div>
</template>

<script>
import Lightbulb from "./components/Lightbulb";
import RockerSwitch from "./components/RockerSwitch";

export default {
  name: "app",
  components: {
    RockerSwitch,
    Lightbulb
  },
  data() {
    return {
      currentValue: false
    };
  }
};
</script>

<style>
#app div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.pointer {
    cursor: pointer;
}
</style>
