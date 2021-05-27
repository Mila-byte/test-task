<template>
  <div
    class="basic-button"
    :class="{ 'back-btn': backBtn }"
    @click="$emit('click-btn')"
  >
    <input :class="[colorClass]" type="button" :value="titleBtn" />
  </div>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    colorClass: {
      type: String,
      default: 'grey'
    },
    titleBtn: {
      type: String,
      default: ''
    },
    backBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.basic-button {
  @media screen and (max-width: 768px) {
    margin-left: 7px;
    margin-right: 7px;
  }
  input {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }
  &:hover {
    filter: brightness(105%);
  }
  &:active {
    filter: brightness(120%);
  }
  &.back-btn {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      border-bottom: 8px solid transparent;
      border-top: 8px solid transparent;
      border-right: 15px solid #fff;
      left: 29%;
      top: 50%;
      transform: translateY(-50%);

      @media screen and (max-width: 768px) {
        left: 12%;
        top: 56%;
      }
    }
  }
  input {
    cursor: pointer;
    width: 350px;
    border-radius: 35px;
    padding: 15px 0;
    @media screen and (max-width: 768px) {
      width: 156px;
      padding: 6px 0;
    }
    &.grey {
      background: #c4c4c4;
    }
    &.green {
      background: #009c41;
    }
  }
}
</style>
