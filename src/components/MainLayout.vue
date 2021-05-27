<template>
  <div class="wrapper">
    <div class="main-header">
      <div class="header">
        <div class="header-text">
          <span>Lorem, ipsum.</span>
          <span>lorem</span>
          <span class="sub-title-show">Lorem, ipsum dolor.</span>
        </div>
        <span class="profile-logo">
          <img
            class="profile-logo__image"
            src="../assets/profile-logo.svg"
            alt="profile"
          />
        </span>
      </div>
      <div v-if="showSubHeader" class="sub_header">
        <span>Lorem, ipsum.</span>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
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
  background: url(../assets/main-background.png) center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  overflow: auto;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    background: linear-gradient(#21325e90, #21325e);
    z-index: 0;
  }
  .content {
    z-index: 10;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .main-header {
    background: #f5f5f5;
    z-index: 10;
    width: 100%;
    position: relative;

    @media screen and (max-width: 768px) {
      background: #fff;
    }
    .header {
      color: #009c41;
      font-weight: 700;
      align-items: center;
      &-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        @media screen and (max-width: 768px) {
          .sub-title-show {
            display: block;
          }
        }
        @media screen and (min-width: 768px) {
          .sub-title-show {
            display: none;
          }
        }
      }
      .profile-logo {
        width: 38px;
        height: 38px;
        border-radius: 10px;
        background: #009c41;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 19px;
        @media screen and (max-width: 768px) {
          margin-left: 10px;
        }
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
      padding: 10px 24px 10px 10px;
      box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
      @media screen and (max-width: 768px) {
        box-shadow: none;
      }
    }
    .sub_header {
      display: flex;
      justify-content: flex-end;
      padding: 28px 62px 28px 10px;
      z-index: 10;
      color: #5f5f5f;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
