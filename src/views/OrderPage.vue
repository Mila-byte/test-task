<template>
  <main-layout>
    <div class="content">
      <TableOrder />
    </div>
    <h2>hello</h2>
  </main-layout>
</template>

<script>
export default {
  name: "OrderPage",
  components: {
    MainLayout: () => import('@/components/MainLayout.vue'),
    TableOrder: () => import('@/components/TableOrder.vue')
  }
}
</script>

<style>
.content {
  width: 1100px;
  padding: 12px;
  display: flex;
  justify-content: center;
}
</style>
