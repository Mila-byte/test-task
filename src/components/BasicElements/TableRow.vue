<template>
  <div class="table_content">
    <div @click="activeOrder(items.id)" class="table-row">
      <div v-for="item in items" :key="item.id" class="table-item">
        {{ item }}
      </div>
    </div>
    <button class="message__button"></button>
    <button class="edit__button"></button>
  </div>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    items: {
      type: Object,
      default: () => {},
      activeOrderId: {
        type: String,
        default: "",
      },
    },
  },
  methods: {
    activeOrder(id) {
      this.$emit("active-order", id)
    },
  },
}
</script>

<style lang="scss">
.table_content {
  display: flex;
  button {
    background: #fff;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
    &.message__button {
        position: relative;
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
    }
    &.edit__button {
        position: relative;
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
    }
  }
  .table-row {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    border-radius: 35px;
    background: #fff;
    margin: 5px;

    cursor: pointer;
    .table-item {
      padding: 10px;
      &:not(:last-child) {
        border-right: 1px solid #e5e5e5;
      }
    }
  }
}
</style>
