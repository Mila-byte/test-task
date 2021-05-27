<template>
  <div class="basic-input">
    <div>{{ title }}</div>
    <div class="basic-input__input">
      <span v-if="clearBtn" class="clear-btn">+</span>
      <span v-if="searchBtn" class="search-btn"></span>
      <input type="text" :placeholder="customPlaceholder" />
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
    },
    searchBtn: {
      type: Boolean,
      default: false
    },
    customPlaceholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.basic-input {
  width: 100%;
  &__input {
    position: relative;
    width: 100%;
    .clear-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 28px;
      color: aqua;
    }
    .search-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 28px;
      width: 25px;
      height: 25px;
      background: url('../../assets/search.svg') no-repeat center;
    }
    input {
      width: 100%;
      padding: 16px 28px;
      border-radius: 35px;
      font-size: 21px;
      box-sizing: border-box;
      text-align: right;
      font-weight: 700;
      &::placeholder {
        color: #b1b1b1;
      }
      @media screen and (max-width: 768px) {
        padding: 8px 0;
        width: auto;
        margin-right: 12px;
        &::placeholder {
          padding-right: 10px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
