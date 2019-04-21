<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        workYear: {
          type: 'select',
          attr: {
            multiple: true
          },
          value: [],
          sourceData: [
            {
              label: '1年',
              value: 1
            },
            {
              label: '2年',
              value: 2
            },
            {
              label: '3年',
              value: 3
            }
          ]
        },
        level: {
          type: 'select',
          attr: {
            multiple: false
          },
          value: [],
          sourceData: [
            {
              label: '高级',
              value: 1
            },
            {
              label: '中级',
              value: 2
            },
            {
              label: '低级',
              value: 3
            }
          ]
        }
      },
      currentOption: '',
      renderMethods: {
        select: this.renderSelect
      }
    }
  },
  watch: {
    currentOption(val) {
      console.log(val)
    }
  },
  computed: {
    ...mapState({
      test: state => state.test
    })
  },
  render() {
    const formList = Object.keys(this.form).map(item => {
      const oaItem = this.renderMethods[this.form[item].type](this.form[item])
      return oaItem
    })
    return <el-form>{formList}</el-form>
  },
  created() {
    this.changeTest(12312123132)
    console.log(this.test)
  },
  mounted() {
    this.$router.push({
      name: 'myCanvas'
    })
  },
  methods: {
    ...mapMutations(['changeTest']),
    renderSelect(item) {
      const { attr, sourceData } = item
      if (sourceData.length) {
        const optionList = sourceData.map(option => {
          return <el-option value={option['value']} label={option.label} />
        })
        return (
          <div>
            <el-select placeholder="请选择" {...attr} v-model={item.value}>
              {optionList}
            </el-select>
          </div>
        )
      } else {
        return ''
      }
    },
    renderFormItem(render) {
      return <el-form-item>{render}</el-form-item>
    }
  }
}
</script>

<style>
</style>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        workYear: {
          type: 'select',
          attr: {
            multiple: true
          },
          value: [],
          sourceData: [
            {
              label: '1年',
              value: 1
            },
            {
              label: '2年',
              value: 2
            },
            {
              label: '3年',
              value: 3
            }
          ]
        },
        level: {
          type: 'select',
          attr: {
            multiple: false
          },
          value: [],
          sourceData: [
            {
              label: '高级',
              value: 1
            },
            {
              label: '中级',
              value: 2
            },
            {
              label: '低级',
              value: 3
            }
          ]
        }
      },
      currentOption: '',
      renderMethods: {
        select: this.renderSelect
      }
    }
  },
  watch: {
    currentOption(val) {
      console.log(val)
    }
  },
  computed: {
    ...mapState({
      test: state => state.test
    })
  },
  render() {
    const formList = Object.keys(this.form).map(item => {
      const oaItem = this.renderMethods[this.form[item].type](this.form[item])
      return oaItem
    })
    return <el-form>{formList}</el-form>
  },
  created() {
    this.changeTest(12312123132)
    console.log(this.test)
  },
  mounted() {
    this.$router.push({
      name: 'myCanvas'
    })
  },
  methods: {
    ...mapMutations(['changeTest']),
    renderSelect(item) {
      const { attr, sourceData } = item
      if (sourceData.length) {
        const optionList = sourceData.map(option => {
          return <el-option value={option['value']} label={option.label} />
        })
        return (
          <div>
            <el-select placeholder="请选择" {...attr} v-model={item.value}>
              {optionList}
            </el-select>
          </div>
        )
      } else {
        return ''
      }
    },
    renderFormItem(render) {
      return <el-form-item>{render}</el-form-item>
    }
  }
}
</script>

<style scoped>
.demo {
  font-size: 100px;
}
</style>
