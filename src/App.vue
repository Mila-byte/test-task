<template>
  <component @change-route="changeRoute" :is="currentComponent"></component>
</template>

<script>
import LogInPage from "./views/LogInPage.vue"
import OrderPage from "./views/OrderPage.vue"

export default {
  name: "App",
  components: {
    LogInPage,
    OrderPage,
  },
  data() {
    return {
      currentComponent: "LogInPage",
    }
  },
  methods: {
    changeRoute(route) {
      this.currentComponent = route
    },
  },
}
</script>

<style></style>
