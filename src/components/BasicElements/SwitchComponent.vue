<template>
  <div class="custom-switch">
    <div
      class="custom-switch__first"
      :class="{ active: activeTab === 'first' }"
      @click="activeTab = 'first'"
    >
      <span>Lorem, ipsum dolor.</span>
    </div>
    <div
      class="custom-switch__second"
      :class="{ active: activeTab === 'second' }"
      @click="activeTab = 'second'"
    >
      <span>Lorem, ipsum dolor.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
  data() {
    return {
      activeTab: 'second'
    }
  }
}
</script>

<style scoped lang="scss">
.custom-switch {
  width: 100%;
  background: #fff;
  border-radius: 35px;
  display: flex;
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    width: 330px;
  }
  &__first,
  &__second {
    width: 50%;
    padding: 15px 15px;
    border-radius: 35px;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      font-size: 18px;
      padding: 5px;
    }
    &.active {
      background: #ff7728;
      color: #fff;
    }
  }
}
</style>
