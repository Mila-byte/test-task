<template>
  <div @click="$emit('click-btn')" :class="{ 'back-btn': backBtn }" class="basic-button">
    <input :class="[colorClass]" type="button" :value="titleBtn" />
  </div>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    colorClass: {
      type: String,
      default: "grey",
    },
    titleBtn: {
      type: String,
      default: "",
    },
    backBtn: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.basic-button {
  &:hover {
    filter: brightness(105%);
  }
  &:active {
    filter: brightness(120%);
  }
  &.back-btn {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      border-bottom: 10px solid transparent;
      border-top: 10px solid transparent;
      border-right: 19px solid red;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  input {
    cursor: pointer;
    width: 350px;
    height: 58px;
    border-radius: 35px;
    &.grey {
      background: #c4c4c4;
    }
    &.green {
      background: #009c41;
    }
  }
}
</style>
