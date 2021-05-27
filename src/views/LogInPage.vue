<template>
  <main-layout showSubHeader>
    <main-layout-header />
    <p class="subtitle">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure?
    </p>
    <BasicInput title="lorem" clearBtn />
    <BasicInput title="lorem" />
    <div class="buttons">
      <BasicButton backBtn titleBtn="lorem" class="login-btn" />
      <BasicButton
        class="login-btn"
        colorClass="green"
        titleBtn="lorem"
        @click-btn="$emit('change-route', 'OrderPage')"
      />
    </div>
  </main-layout>
</template>

<script>
import MainLayoutHeader from '../components/MainLayoutHeader.vue'
export default {
  name: 'LogInPage',
  components: {
    BasicInput: () => import('@/components/BasicElements/BasicInput.vue'),
    MainLayout: () => import('@/components/MainLayout.vue'),
    BasicButton: () => import('@/components/BasicElements/BasicButton'),
    MainLayoutHeader
  }
}
</script>

<style lang="scss">
p {
  color: #fff;
}
.subtitle {
  text-align: center;
  font-size: 24px;
  margin-top: 65px;
}
.buttons {
  display: flex;
  .login-btn {
    margin-top: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>
