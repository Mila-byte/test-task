<template>
  <div class="table-header">
    <div
      class="table-item"
      v-for="(title, index) of tableHeaders"
      :key="index"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    tableHeaders: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.table-header {
  display: grid;
  grid-template-columns: repeat(6, 1fr) 2fr 2fr 1fr;
  color: #fff;
  margin: 5px;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  .table-item {
    padding: 0 10px;
    text-align: center;
    line-height: 23px;
  }
}
</style>
