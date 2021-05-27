<template>
  <main-layout>
    <div class="content">
      <main-layout-header routerPage="order" style="width: 80%" />
      <SearchRow />
      <TableOrder />
    </div>
  </main-layout>
</template>

<script>
import SearchRow from '@/components/SearchRow'
import MainLayoutHeader from '../components/MainLayoutHeader.vue'
export default {
  name: 'OrderPage',
  components: {
    SearchRow,
    MainLayout: () => import('@/components/MainLayout.vue'),
    TableOrder: () => import('@/components/TableOrder.vue'),
    MainLayoutHeader
  }
}
</script>

