<template>
  <div class="wrapper">
    <div class="main-header">
      <div class="header">
        <span>Text</span>
        <span>Text</span>
        <span class="profile-logo">
          <img
            class="profile-logo__image"
            src="../assets/profile-logo.svg"
            alt="profile"
          />
        </span>
      </div>
      <div v-if="showSubHeader" class="sub_header">
        <span>Text</span>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  props: {
    showSubHeader: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  position: relative;
  height: 100vh;
  background: url(../assets/main-background.png) center no-repeat;
  background-size: cover;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    background: linear-gradient(#2d3b5e80, #21325e80);
    z-index: 0;
  }
  .content {
      width: 100%;
      z-index: 10;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .main-header {
    background: #f5f5f5;
    z-index: 10;
    width: 100%;
    position: relative;
    .header {
      color: #009c41;
      font-weight: 700;
      .profile-logo {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: #009c41;
        display: flex;
        justify-content: center;
        align-items: center;
        &__image {
          width: 15px;
          height: 18px;
        }
        &:hover {
          filter: brightness(105%);
          cursor: pointer;
        }
        &:active {
          filter: brightness(120%);
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        }
      }
      display: flex;
      justify-content: flex-end;
      background: #fff;
      padding: 10px 10px 10px 10px;
      box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
    }
    .sub_header {
      display: flex;
      justify-content: flex-end;
      padding: 10px 10px 10px 10px;
      z-index: 10;
    }
  }
}
</style>
