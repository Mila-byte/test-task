<template>
  <div>
    <div>{{ title }}</div>
    <div class="basic-input">
      <span v-if="clearBtn" class="clear-btn">+</span>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInput",
  props: {
    clearBtn: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss">
.basic-input {
  position: relative;
  .clear-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 28px;
    color: aqua;
  }
  input {
    width: 350px;
    padding: 16px 28px;
    border-radius: 35px;
    font-size: 21px;
  }
}
</style>
