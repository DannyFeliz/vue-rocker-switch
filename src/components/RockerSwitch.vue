<template>
  <div class="rocker-switch-container">
    <label class="rocker" :style="this.rockerSize">
      <input type="checkbox" v-model="isChecked" ref="switch" v-bind="$attrs">
      <span class="switch-left" @click="changeState(true, $event)">
        <span>{{ labelOn }}</span>
      </span>
      <span class="switch-right" @click="changeState(false, $event)">
        <span>{{ labelOff }}</span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RockerSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: [String, Number],
      default: "small",
      validator(size) {
        return (
          ["small", "medium", "large"].includes(
            size.toString().toLowerCase()
          ) || typeof size === "number"
        );
      }
    },
    labelOn: {
      type: [String, Number],
      default: "On"
    },
    labelOff: {
      type: [String, Number],
      default: "Off"
    },
    activeColorLabel: {
      type: String,
      default: "#fff"
    },
    inactiveColorLabel: {
      type: String,
      default: "#333"
    },
    backgroundColorOn: {
      type: String,
      default: "#0084d0;"
    },
    backgroundColorOff: {
      type: String,
      default: "#bd5757;"
    },
    borderColor: {
      type: String,
      default: "#eee"
    },
    toggle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isChecked: this.value,
      sizes: {
        small: 0.5,
        medium: 0.8,
        large: 0.9
      }
    };
  },
  computed: {
    labelsSize() {
      return { on: this.labelOn.length, off: this.labelOff.length };
    },
    rockerSize() {
      return {
        fontSize:
          (typeof this.size === "number" ? this.size : this.sizes[this.size]) +
          "em"
      };
    },
    isDisabled() {
      return (
        !!(
          !!this.$attrs.hasOwnProperty("disabled") &&
          this.$attrs.disabled === ""
        ) || this.$attrs.disabled === true
      );
    }
  },
  mounted() {
    this.setUpColors();
  },
  methods: {
    setUpColors() {
      const root = document.documentElement;

      root.style.setProperty("--onColor", this.backgroundColorOn);
      root.style.setProperty("--offColor", this.backgroundColorOff);
      root.style.setProperty("--borderColor", this.borderColor);
      root.style.setProperty("--activeColorLabel", this.activeColorLabel);
      root.style.setProperty("--inactiveColorLabel", this.inactiveColorLabel);
    },
    changeState(value, event) {
      if (this.isDisabled) {
        event.preventDefault();
        return;
      }

      if (!this.toggle) {
        if (this.$refs.switch.checked != value) {
          this.isChecked = value;
          this.$emit("change", value);
        }
        event.preventDefault();
        return;
      } else {
        this.$emit("change", !this.isChecked);
      }
    }
  }
};
</script>

<style>
:root {
  --onColor: #0084d0;
  --offColor: #bd5757;
  --borderColor: #eee;
  --activeColorLabel: #fff;
  --inactiveColorLabel: #333;
}
.rocker-switch-container {
  display: inline-block;
}
.rocker-switch-container .mid {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
}
.rocker-switch-container .rocker {
  display: inline-block;
  position: relative;
  /*
   SIZE OF SWITCH
   ==============
   All sizes are in em - therefore
   changing the font-size here
   will change the size of the switch.
   See .rocker-small below as example.
   */
  font-size: 0.6em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: var(--inactiveColorLabel);
  width: 7em;
  height: 4em;
  overflow: hidden;
  border-bottom: 0.5em solid var(--borderColor);
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  font-size: 100%;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -o-user-select: none;
  -moz-user-select: none;
}
.rocker-switch-container .rocker-small {
  font-size: 0.75em;
  /* Sizes the switch */
  margin: 1em;
}
.rocker-switch-container .rocker::before {
  content: "";
  position: absolute;
  top: 0.5em;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  border: 0.5em solid var(--borderColor);
  border-bottom: 0;
}
.rocker-switch-container .rocker input {
  opacity: 0;
  width: 0;
  height: 0;
}
.rocker-switch-container .switch-left,
.rocker-switch-container .switch-right {
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 3em;
  transition: 0.2s;
}
.rocker-switch-container .switch-left {
  height: 2.4em;
  width: 2.75em;
  left: 0.85em;
  bottom: 0.4em;
  background-color: #ddd;
  transform: rotate(15deg) skewX(15deg);
}
.rocker-switch-container .switch-right {
  right: 0.5em;
  bottom: 0;
  background-color: var(--offColor);
  color: var(--activeColorLabel);
}
.rocker-switch-container .switch-left::before,
.rocker-switch-container .switch-right::before {
  content: "";
  position: absolute;
  width: 0.4em;
  height: 2.45em;
  bottom: -0.45em;
  background-color: #ccc;
  transform: skewY(-65deg);
}
.rocker-switch-container .switch-left::before {
  left: -0.4em;
}
.rocker-switch-container .switch-right::before {
  right: -0.375em;
  background-color: transparent;
  transform: skewY(65deg);
}
.rocker-switch-container input:checked + .switch-left {
  background-color: var(--onColor);
  color: var(--activeColorLabel);
  bottom: 0px;
  left: 0.5em;
  height: 2.5em;
  width: 3em;
  transform: rotate(0deg) skewX(0deg);
}
.rocker-switch-container input:checked + .switch-left::before {
  background-color: transparent;
  width: 3.0833em;
}
.rocker-switch-container input:checked + .switch-left + .switch-right {
  background-color: #ddd;
  color: var(--inactiveColorLabel);
  bottom: 0.4em;
  right: 0.8em;
  height: 2.4em;
  width: 2.75em;
  transform: rotate(-15deg) skewX(-15deg);
}
.rocker-switch-container input:checked + .switch-left + .switch-right::before {
  background-color: #ccc;
}
.rocker-switch-container input:focus + .switch-left {
  color: var(--inactiveColorLabel);
}
.rocker-switch-container input:checked:focus + .switch-left {
  color: var(--activeColorLabel);
}
.rocker-switch-container input:focus + .switch-left + .switch-right {
  color: var(--activeColorLabel);
}
.rocker-switch-container input:checked:focus + .switch-left + .switch-right {
  color: var(--inactiveColorLabel);
}
</style>
