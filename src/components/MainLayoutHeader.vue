<template>
  <div class="main-layout-header">
    <span v-if="routerPage === 'login'"
      >Lorem ipsum dolor sit amet.</span
    >
    <switch-component v-else />
    <img src="../assets/user.png" alt="user" />
  </div>
</template>

<script>
import SwitchComponent from './BasicElements/SwitchComponent.vue'
export default {
  components: { SwitchComponent },
  name: 'MainLayoutHeader',
  props: {
    routerPage: {
      type: String,
      default: 'login'
    }
  }
}
</script>

<style scoped lang="scss">
.main-layout-header {
  span {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    @media screen and (max-width: 768px) {
      font-size: 24px;
      padding-left: 5px;
    }
  }
  border-bottom: 5px solid #fff;
  text-align: right;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    border: none;
  }
  img {
    margin-left: 10px;
    object-fit: contain;
    @media screen and (max-width: 768px) {
      height: 39px;
      margin-bottom: 5px;
    }
  }
}
</style>
