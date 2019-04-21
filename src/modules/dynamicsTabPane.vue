<template>
  <div>
    <el-tabs v-model="currentTab">
      <el-tab-pane v-for="tab in tabList"
        :key="tab.value"
        :label="tab.label"
        :name="tab.value" />
    </el-tabs>
    <div v-if="currentPane&&currentPane.columnDefs&&currentPane.columnDefs.length">
      <ag-grid-vue class="ag-theme-balham table__wrap"
        :columnDefs="currentPane.columnDefs"
        :rowData="currentPane.rowData"></ag-grid-vue>
    </div>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      tabList: [
        { label: 'ASN明细', value: 'detail' },
        {
          label: '收货验货',
          value: 'receive'
        },
        { label: '上架纪录', value: 'ground' }
      ],
      currentTab: '',
      tabPane: {
        detail: {
          columnDefs: [
            { headerName: '行号', field: 'rowid' },
            { headerName: '行状态', field: 'stautsCh' },
            { headerName: 'SKU', field: 'sku' },
            { headerName: 'SKU品名', field: 'skuName' }
          ],
          rowData: [
            {
              rowid: 1,
              stauts: 1,
              stautsCh: '部分上架',
              sku: 321356456,
              skuName: '41码袜子'
            }
          ]
        }
      }
    }
  },
  computed: {
    currentPane() {
      return this.tabPane[this.currentTab]
    }
  },
  created() {
    this.currentTab = this.tabList[0].value
  }
}
</script>

<style lang="scss" scoped>
.table__wrap {
  height: 500px;
}
</style>
