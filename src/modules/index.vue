<template>
  <div>
    <info-box :infoList="propsList"
      :infoObject="cellContent"
      @formChange="onFormChange"></info-box>
    <div>
      <dynamics-tab-pane></dynamics-tab-pane>
    </div>
  </div>
</template>

<script>
import InfoBox from './infoBox'
import DynamicsTabPane from './dynamicsTabPane'
export default {
  components: {
    InfoBox,
    DynamicsTabPane
  },
  data() {
    return {
      propsList: [
        {
          label: 'ASN单号',
          value: 'vsnId',
          type: 'text',
          style: {
            color: 'red'
          }
        },
        {
          label: '单据日期',
          value: 'date',
          type: 'datePicker',
          props: {
            'value-format': 'yyyy-MM-dd'
          }
        },
        {
          label: '类型',
          value: 'type',
          type: 'select',
          dataSource: [
            {
              value: 1,
              label: 1
            }
          ]
        },
        {
          label: '单号',
          value: 'testId',
          type: 'text'
        }
      ],
      cellContent: {
        vsnId: '1213',
        date: '',
        type: '',
        testId: 7777888
      }
    }
  },
  methods: {
    onFormChange(form) {
      this.cellContent = Object.assign(this.cellContent, form)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
