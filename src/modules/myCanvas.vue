<template>

  <div>
    <img ref="myImg"
      src="../assets/demo.jpg"
      width="750"
      height="1624">
    <canvas ref="myCanvas"
      :width="width"
      :height="height"></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      jsonData: {
        angle: 180,
        height: 1000,
        width: 750,
        prism_wordsInfo: [
          {
            pos: [
              {
                x: 62,
                y: 119
              },
              {
                x: 138,
                y: 119
              },
              {
                x: 138,
                y: 141
              },
              {
                x: 62,
                y: 141
              }
            ],
            prob: 88,
            word: '6L 07*'
          },
          {
            pos: [
              {
                x: 247,
                y: 119
              },
              {
                x: 320,
                y: 119
              },
              {
                x: 320,
                y: 141
              },
              {
                x: 247,
                y: 141
              }
            ],
            prob: 87,
            word: '610v*'
          },
          {
            pos: [
              {
                x: 427,
                y: 119
              },
              {
                x: 503,
                y: 119
              },
              {
                x: 503,
                y: 141
              },
              {
                x: 427,
                y: 141
              }
            ],
            prob: 99,
            word: '6007*'
          },
          {
            pos: [
              {
                x: 610,
                y: 119
              },
              {
                x: 687,
                y: 119
              },
              {
                x: 687,
                y: 140
              },
              {
                x: 610,
                y: 140
              }
            ],
            prob: 98,
            word: '6807*'
          },
          {
            pos: [
              {
                x: 82,
                y: 160
              },
              {
                x: 119,
                y: 160
              },
              {
                x: 119,
                y: 185
              },
              {
                x: 82,
                y: 185
              }
            ],
            prob: 97,
            word: '9v'
          },
          {
            pos: [
              {
                x: 252,
                y: 157
              },
              {
                x: 314,
                y: 161
              },
              {
                x: 312,
                y: 186
              },
              {
                x: 251,
                y: 183
              }
            ],
            prob: 81,
            word: '%Gv'
          },
          {
            pos: [
              {
                x: 434,
                y: 159
              },
              {
                x: 496,
                y: 160
              },
              {
                x: 495,
                y: 186
              },
              {
                x: 433,
                y: 184
              }
            ],
            prob: 94,
            word: 'h vv'
          },
          {
            pos: [
              {
                x: 62,
                y: 302
              },
              {
                x: 140,
                y: 301
              },
              {
                x: 140,
                y: 323
              },
              {
                x: 62,
                y: 324
              }
            ],
            prob: 97,
            word: '6088*'
          },
          {
            pos: [
              {
                x: 245,
                y: 302
              },
              {
                x: 322,
                y: 302
              },
              {
                x: 322,
                y: 323
              },
              {
                x: 245,
                y: 323
              }
            ],
            prob: 99,
            word: '6698'
          },
          {
            pos: [
              {
                x: 429,
                y: 301
              },
              {
                x: 502,
                y: 302
              },
              {
                x: 502,
                y: 323
              },
              {
                x: 429,
                y: 322
              }
            ],
            prob: 92,
            word: '6188*'
          },
          {
            pos: [
              {
                x: 611,
                y: 302
              },
              {
                x: 686,
                y: 302
              },
              {
                x: 686,
                y: 323
              },
              {
                x: 611,
                y: 323
              }
            ],
            prob: 94,
            word: '66L 8'
          },
          {
            pos: [
              {
                x: 69,
                y: 340
              },
              {
                x: 130,
                y: 344
              },
              {
                x: 129,
                y: 369
              },
              {
                x: 68,
                y: 366
              }
            ],
            prob: 78,
            word: '%8v'
          },
          {
            pos: [
              {
                x: 252,
                y: 341
              },
              {
                x: 314,
                y: 344
              },
              {
                x: 313,
                y: 369
              },
              {
                x: 251,
                y: 366
              }
            ],
            prob: 98,
            word: 'h7v'
          },
          {
            pos: [
              {
                x: 617,
                y: 340
              },
              {
                x: 680,
                y: 345
              },
              {
                x: 678,
                y: 369
              },
              {
                x: 616,
                y: 364
              }
            ],
            prob: 79,
            word: '%lv'
          },
          {
            pos: [
              {
                x: 62,
                y: 484
              },
              {
                x: 139,
                y: 484
              },
              {
                x: 139,
                y: 505
              },
              {
                x: 62,
                y: 505
              }
            ],
            prob: 89,
            word: '67677'
          },
          {
            pos: [
              {
                x: 245,
                y: 484
              },
              {
                x: 322,
                y: 484
              },
              {
                x: 322,
                y: 505
              },
              {
                x: 245,
                y: 505
              }
            ],
            prob: 88,
            word: '68777'
          },
          {
            pos: [
              {
                x: 426,
                y: 484
              },
              {
                x: 504,
                y: 484
              },
              {
                x: 504,
                y: 505
              },
              {
                x: 426,
                y: 505
              }
            ],
            prob: 86,
            word: '66877'
          },
          {
            pos: [
              {
                x: 610,
                y: 484
              },
              {
                x: 687,
                y: 484
              },
              {
                x: 687,
                y: 505
              },
              {
                x: 610,
                y: 505
              }
            ],
            prob: 97,
            word: '69077'
          },
          {
            pos: [
              {
                x: 69,
                y: 523
              },
              {
                x: 130,
                y: 526
              },
              {
                x: 128,
                y: 552
              },
              {
                x: 68,
                y: 548
              }
            ],
            prob: 84,
            word: 'h0v'
          },
          {
            pos: [
              {
                x: 265,
                y: 524
              },
              {
                x: 304,
                y: 524
              },
              {
                x: 304,
                y: 552
              },
              {
                x: 265,
                y: 552
              }
            ],
            prob: 82,
            word: '0v'
          },
          {
            pos: [
              {
                x: 434,
                y: 523
              },
              {
                x: 496,
                y: 525
              },
              {
                x: 495,
                y: 551
              },
              {
                x: 433,
                y: 548
              }
            ],
            prob: 82,
            word: '%68'
          },
          {
            pos: [
              {
                x: 617,
                y: 523
              },
              {
                x: 679,
                y: 525
              },
              {
                x: 678,
                y: 551
              },
              {
                x: 616,
                y: 549
              }
            ],
            prob: 68,
            word: '%88'
          },
          {
            pos: [
              {
                x: 64,
                y: 667
              },
              {
                x: 136,
                y: 667
              },
              {
                x: 136,
                y: 688
              },
              {
                x: 64,
                y: 688
              }
            ],
            prob: 86,
            word: '6vl 7*'
          },
          {
            pos: [
              {
                x: 246,
                y: 667
              },
              {
                x: 321,
                y: 667
              },
              {
                x: 321,
                y: 688
              },
              {
                x: 246,
                y: 688
              }
            ],
            prob: 84,
            word: '6LZE*'
          },
          {
            pos: [
              {
                x: 427,
                y: 667
              },
              {
                x: 503,
                y: 667
              },
              {
                x: 503,
                y: 688
              },
              {
                x: 427,
                y: 688
              }
            ],
            prob: 91,
            word: '67L 8±'
          },
          {
            pos: [
              {
                x: 610,
                y: 667
              },
              {
                x: 687,
                y: 667
              },
              {
                x: 687,
                y: 688
              },
              {
                x: 610,
                y: 688
              }
            ],
            prob: 92,
            word: '6788*'
          },
          {
            pos: [
              {
                x: 81,
                y: 708
              },
              {
                x: 119,
                y: 708
              },
              {
                x: 119,
                y: 733
              },
              {
                x: 81,
                y: 733
              }
            ],
            prob: 90,
            word: '88'
          },
          {
            pos: [
              {
                x: 252,
                y: 705
              },
              {
                x: 314,
                y: 709
              },
              {
                x: 312,
                y: 734
              },
              {
                x: 251,
                y: 730
              }
            ],
            prob: 81,
            word: '%LS'
          },
          {
            pos: [
              {
                x: 434,
                y: 705
              },
              {
                x: 496,
                y: 709
              },
              {
                x: 495,
                y: 734
              },
              {
                x: 433,
                y: 731
              }
            ],
            prob: 85,
            word: 'h 98'
          },
          {
            pos: [
              {
                x: 629,
                y: 708
              },
              {
                x: 667,
                y: 708
              },
              {
                x: 667,
                y: 733
              },
              {
                x: 629,
                y: 733
              }
            ],
            prob: 93,
            word: '98'
          },
          {
            pos: [
              {
                x: 432,
                y: 912
              },
              {
                x: 547,
                y: 910
              },
              {
                x: 548,
                y: 941
              },
              {
                x: 432,
                y: 944
              }
            ],
            prob: 99,
            word: '6878*'
          }
        ],
        prism_tablesInfo: [],
        orgHeight: 1000,
        orgWidth: 750
      },
      height: 0,
      width: 0,
      prism_wordsInfo: [],
      img: null
    }
  },
  computed: {
    ...mapState(['test'])
  },
  created() {
    console.log('test123', this.test)

    const { height, width, prism_wordsInfo } = this.jsonData
    this.height = height
    this.width = width
    this.prism_wordsInfo = prism_wordsInfo
    this.prism_wordsInfo = this.prism_wordsInfo.filter(item => {
      const a = item.word.match(/\d+/g)
      if (a && a.length && a[0] > 100) {
        item.num = a[0]
        item.x1 = item.pos[3].x
        item.y1 = item.pos[3].y
        item.x2 = item.pos[2].x
        item.size = item.pos[2].y - item.pos[1].y
        item.y2 = item.pos[2].y + item.size
        return item
      }
    })
    console.log(this.prism_wordsInfo)
  },
  mounted() {
    this.$nextTick(() => {
      const ctx = this.$refs.myCanvas.getContext('2d')
      const img = this.$refs.myImg
      img.onload = () => {
        ctx.drawImage(img, 0, 0)
        this.prism_wordsInfo.forEach(item => {
          ctx.font = '24px Arial'
          ctx.fillText(item.num, item.x1, item.y1 + 30)
        })
      }
    })
  }
}
</script>

<style>
</style>
