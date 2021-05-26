<template>
  <div class="table-order">
    <TableRow
      :activeOrderId="activeOrderId"
      :class="{ activeOrder: activeOrderId === item.id }"
      @active-order="setActiveOrder"
      v-for="item of tableData"
      :key="item.id"
      :items="item"
    />
  </div>
</template>

<script>
export default {
  name: "TableOrder",
  components: {
    TableRow: () => import("@/components/BasicElements/TableRow.vue"),
  },
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "first",
          order: 23456,
        },
        {
          id: 2,
          name: "second",
          order: 3383838,
        },
      ],
      activeOrderId: null,
    }
  },
  methods: {
    setActiveOrder(id) {
      this.activeOrderId = id
    },
  },
}
</script>

<style lang="scss">
.table-order {
  display: flex;
  flex-direction: column;
  .activeOrder {
    .table-row {
      background: #ff7728;
      color: #fff;
    }
  }
}
</style>
