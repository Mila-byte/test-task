<template>
  <div class="search-row">
    <BasicButton
      class="btn-desktop"
      colorClass="green"
      titleBtn="lorem"
      backBtn
    />
    <BasicButton class="btn-mobile" colorClass="green" titleBtn="+" backBtn />
    <search-input searchBtn custom-placeholder="lorem" />
  </div>
</template>

<script>
import BasicButton from '@/components/BasicElements/BasicButton'
import SearchInput from './BasicElements/SearchInput.vue'
export default {
  name: 'SearchRow',
  components: { BasicButton, SearchInput }
}
</script>

<style lang="scss">
.search-row {
  margin-top: 40px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
  input[type='button'] {
    width: 284px;
    @media screen and (max-width: 768px) {
      width: 40px;
    }
  }
  .btn {
    &-desktop {
      display: block;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &-mobile {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
  }
  .back-btn {
    &::after {
      left: 15%;
      top: 50%;
      transform: translateY(-50%);
      @media screen and (max-width: 768px) {
        border: none;
      }
    }
  }
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
