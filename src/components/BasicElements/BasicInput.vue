<template>
  <div class="basic-input__component">
    <div class="basic-input__text">{{ title }}</div>
    <div class="basic-input">
      <span v-if="clearBtn" class="clear-btn">+</span>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    clearBtn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.basic-input__component {
  margin-top: 55px;
  .basic-input__text {
    text-align: end;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 15px;
    padding-right: 40px;
  }
  .basic-input {
    position: relative;

    .clear-btn {
      position: absolute;
      top: 14%;
      left: 20px;
      font-weight: 900;
      color: #1d4076;
      font-size: 42px;
      transform: rotate(45deg);
      @media screen and (max-width: 768px) {
        top: 4%;
      }
    }
    input {
      width: 250px;
      padding: 16px 50px;
      border-radius: 35px;
      font-size: 21px;
      @media screen and (max-width: 768px) {
        width: 230px;
        padding: 8px 50px;
      }
    }
  }
}
</style>
