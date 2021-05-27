<template>
  <div class="table-order">
    <TableHeader :tableHeaders="tableHeaders" />
    <TableRow
      v-for="tableRow of tableContent"
      :key="tableRow.id"
      :row-id="tableRow.id"
      :tableHeaders="tableHeaders"
      :activeOrder="activeOrderId === tableRow.id"
      :tableRow="tableRow"
      @active-order="setActiveOrder"
    />
  </div>
</template>

<script>
import { tableHeaders, tableContent } from '@/test-data'

export default {
  name: 'TableOrder',
  components: {
    TableHeader: () => import('@/components/BasicElements/TableHeader'),
    TableRow: () => import('@/components/BasicElements/TableRow.vue')
  },
  data() {
    return {
      tableContent,
      tableHeaders,
      activeOrderId: null
    }
  },
  methods: {
    setActiveOrder(id) {
      this.activeOrderId = id
    }
  }
}
</script>

<style lang="scss">
.table-order {
  width: 80%;
  display: flex;
  flex-direction: column;
  border-top: 3px solid #fff;
  margin-top: 26px;
  @media screen and (max-width: 768px) {
    width: 329px;
  }
}
</style>
