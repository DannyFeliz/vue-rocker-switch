<template>
  <div>
    <img
      v-if="isOn"
      height="80"
      src="https://image.flaticon.com/icons/png/128/351/351667.png"
    />
    <img
      v-else
      height="80"
      src="https://image.flaticon.com/icons/png/256/515/515077.png"
    />
  </div>
</template>
<script>
export default {
  props: {
    isOn: Boolean
  }
};
</script>
