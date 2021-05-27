<template>
  <div class="table_content">
    <div class="table-header-mobile">
      <div class="table-header-mobile_buttons">
        <button class="table-header_btn-message"></button>
        <button class="table-header_btn-edit"></button>
      </div>
      <div class="table-header-mobile_car"></div>
    </div>
    <div
      class="table-row"
      :class="{ activeOrder: activeOrder }"
      @click="activateOrder(tableRow.id)"
    >
      <div
        v-for="(item, name, index) in tableRow"
        :key="index"
        class="table-item"
      >
        <span v-if="name !== 'active'">{{
          name === 'toDate' || name === 'fromDate'
            ? new Date(item).toLocaleDateString()
            : item
        }}</span>
        <img
          class="active-check"
          v-else-if="name === 'active' && item"
          src="../../assets/check.svg"
          alt=""
        />
      </div>

      <div
        class="table-item-mobile"
        v-for="(item, name, index) in tableRow"
        :key="item"
      >
        <div class="table-item-mobile_header">{{ tableHeaders[index] }}</div>
        <div class="table-item-mobile_content">{{ item }}</div>
      </div>
    </div>
    <button v-show="activeOrder" class="btn message__button"></button>
    <button v-show="activeOrder" class="btn edit__button"></button>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    tableRow: {
      type: Object,
      default: () => ({})
    },
    activeOrder: {
      type: Boolean,
      default: false
    },
    tableHeaders: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    activateOrder(id) {
      this.$emit('active-order', id)
    }
  }
}
</script>

<style lang="scss">
.table_content {
  position: relative;
  @media screen and (max-width: 768px) {
    width: 329px;
    margin: 0 auto;
    background: white;
    border-radius: 35px;
    margin-top: 20px;
  }
  .btn {
    background: #fff;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    border: none;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
      display: none;
    }
    &.message__button {
      right: -50px;
      @media screen and (max-width: 768px) {
        left: 4%;
      }
      &::before {
        position: absolute;
        content: '';
        width: 30px;
        height: 17px;
        background: url('../../assets/message.svg');
        left: 56%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        content: 'תחילש העצהה';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50px;
        color: #fff;
        @media screen and (max-width: 768px) {
          content: '';
        }
      }
    }

    &.edit__button {
      right: -105px;
      @media screen and (max-width: 768px) {
        left: 19%;
      }
      &::before {
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        background: url('../../assets/edit.svg');
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        content: 'תחילש העצהה';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50px;
        color: #fff;
        @media screen and (max-width: 768px) {
          content: '';
        }
      }
    }
  }
  .table-header-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      // background: yellow;
      width: 90%;
      height: 50px;
      border-radius: 35px 35px 0px 0px;
      border-bottom: 2px solid #1d4076;
      /* box-sizing: border-box; */
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    &_buttons {
      display: flex;
      align-items: center;
      height: 100%;
      button {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border: none;
        background-color: #009c41;
        margin: 0 5px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 70%;
        &.table-header_btn-message {
          background-image: url('../../assets/message_white.svg');
        }
        &.table-header_btn-edit {
          background-image: url('../../assets/edit-white.svg');
          background-size: 50%;
        }
      }
    }
    &_car {
      width: 80px;
      background: url('../../assets/car.svg') no-repeat center;
    }
  }
  .table-row {
    display: grid;
    grid-template-columns: repeat(6, 1fr) 2fr 2fr 1fr;
    border-radius: 35px;
    background: #fff;
    margin: 5px 0;
    padding: 10px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      pointer-events: none;
      background: #fff !important;
      color: #21325e !important;
    }
    &.activeOrder {
      background: #ff7728;
      color: #fff;
    }
    .table-item {
      padding: 0 10px;
      text-align: center;
      line-height: 23px;
      @media screen and (max-width: 768px) {
        display: none;
      }
      .active-check {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      &:not(:last-child) {
        border-right: 1px solid #e5e5e5;
        @media screen and (max-width: 768px) {
          border-right: none;
        }
      }
      &-mobile {
        display: none;
        &.first-item {
          padding-top: 50px;
        }
        &_header {
          color: #797979;
          font-size: 12px;
        }
        @media screen and (max-width: 768px) {
          display: block;
        }
      }
    }
  }
}
</style>
