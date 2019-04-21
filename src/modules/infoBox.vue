/ ** 
  主信息表组件,infoList接受定义的cell属性数组,infoObject接受对应cell的值
  infoList中的对象元素可以定义:cell标题(label)、cell属性名称(value)、cell里DOM元素(type)、cell样式(style)、Dom元素属性(props)、Dom元素数据源(dataSource)
 ** /
<script>
export default {
  props: {
    // cell 属性数组
    infoList: {
      type: Array,
      default: () => []
    },
    // cell填写的值
    infoObject: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // infoObject的副本
      form: {},
      // 根据cell指定type调用不同render函数
      method: {
        select: this.renderSelect,
        input: this.renderInput,
        text: this.renderText,
        datePicker: this.renderDatePicker
      }
    }
  },
  watch: {
    form: {
      // 监听form值,将表单的值传给父组件
      handler: function(val) {
        this.$emit('formChange', val)
      },
      deep: true
    }
  },
  created() {
    this.form = JSON.parse(JSON.stringify(this.infoObject))
  },
  render() {
    if (this.infoList && this.infoList.length) {
      const cellList = this.infoList.map((info, index) => {
        console.log()

        return (
          <div
            class="info-box__cell"
            style={
              index >= this.infoList.length - (this.infoList.length % 3)
                ? { 'border-bottom': 'none' }
                : ''
            }
          >
            <div class="cell__header">{info.label}</div>
            <div class="cell__content">{this.method[info.type](info)}</div>
          </div>
        )
      })
      return <div class="info-box__wrap">{cellList}</div>
    }
    return null
  },
  methods: {
    // render el-select
    renderSelect(item) {
      const { dataSource, props, style } = item
      const optionList = dataSource.map(data => {
        return <el-option value={data.value} label={data.label} />
      })
      return (
        <el-select
          props={props}
          style={style ? style : ''}
          v-model={this.form[item.value]}
        >
          {optionList}
        </el-select>
      )
    },
    // render el-input
    renderInput(item) {
      const { props, style } = item
      return (
        <el-input
          v-model={this.form[item.value]}
          props={props}
          style={style ? style : ''}
        />
      )
    },
    // render el-date-picker
    renderDatePicker(item) {
      const { props, style } = item
      return (
        <el-date-picker
          v-model={this.form[item.value]}
          props={props}
          style={style ? style : ''}
        />
      )
    },
    // render 纯文本
    renderText(item) {
      const { props, style } = item
      return (
        <span style={style ? style : ''} props={props}>
          {this.form[item.value]}
        </span>
      )
    }
  }
}
</script>

<style lang="scss" scoped>
$cell-width: calc(100% / 3);
.info-box__ {
  &wrap {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid;
  }
  &cell {
    height: 45px;
    box-sizing: border-box;
    width: $cell-width;
    display: flex;
    align-items: center;
    border-right: 1px solid;
    border-bottom: 1px solid;
    &:nth-child(3n + 3) {
      border-right: none;
    }
  }
}
.cell__ {
  &header {
    flex: 1;
    height: 100%;
    line-height: 45px;
    background-color: #f7f7f7;
    border-right: 1px solid;
    overflow: hidden;
  }
  &content {
    flex: 2;
    overflow: hidden;
  }
}
</style>
