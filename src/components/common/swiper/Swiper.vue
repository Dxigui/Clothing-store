<template>
  <div id="CS-swiper">
    <div class="swiper-img"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div class="indi-item"
          v-for="(item, index) in slideCount"
          :class="{active: index === currentIndex-1}"
          :key="index">
          </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  // props: {
  //   interval: {
  //     type: Number,
  //     default: 3000
  //   },
  //   animDuration: {
  //     type: Number,
  //     default: 300
  //   },
  //   moveRatio: {
  //     type: Number,
  //     default: 0.25
  //   },
  //   showIndicator: {
  //     type: Boolean,
  //     default: true
  //   }
  // },
  // data () {
  //   return {
  //     slideCount: 0, // 元素个数
  //     totalWidth: 0, // swiper 宽度
  //     swiperStyle: {}, // swiper 样式
  //     currentIndex: 1, // 当前 index
  //     scrolling: false // 是否在滚动
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.handleDom()
  //     this.startTimer()
  //   }, 2000)
  // },
  // methods: {
  //   // 定时器操作
  //   startTimer () {
  //     this.playTimer = window.setInterval(() => {
  //       console.log('timer')
  //       this.currentIndex++
  //       this.scrollContent(-this.currentIndex * this.totalWidth)
  //     }, this.interval)
  //   },
  //   stopTimer () {
  //     window.clearInterval(this.playTimer)
  //   },

  //   scrollContent (curPosition) {
  //     console.log('content')
  //     this.scrolling = true
  //     this.swiperStyle.transition = `transform ${this.animDuration}ms`
  //     this.setTransform(curPosition)
  //     this.checkPosition()
  //     this.scrolling = false
  //   },

  //   checkPosition () {
  //     window.setTimeout(() => {
  //       this.swiperStyle.transition = '0ms'
  //       if (this.currentIndex >= this.slideCount + 1) {
  //         this.currentIndex = 1
  //         console.log(`index${this.currentIndex}`)
  //         this.setTransform(-this.currentIndex * this.totalWidth)
  //       } else if (this.currentIndex <= 0) {
  //         this.currentIndex = this.slideCount
  //         this.setTransform(-this.currentIndex * this.totalWidth)
  //       }
  //       this.$emit('transitionEnd', this.currentIndex)
  //     }, this.animDuration)
  //   },

  //   setTransform (position) {
  //     this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
  //     this.swiperStyle['-webkit-transform'] = `translate3d(${position}px, 0, 0)`
  //     this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`
  //     console.log(this.swiperStyle)
  //   },

  //   handleDom () {
  //     const swiperEl = document.querySelector('.swiper-img')
  //     const slidesEls = swiperEl.getElementsByClassName('slide')
  //     this.slildeCount = slidesEls.length
  //     if (this.slideCount > 1) {
  //       const cloneFirst = slidesEls[0].cloneNode(true)
  //       const cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
  //       swiperEl.insertBefore(cloneLast, slidesEls[0])
  //       swiperEl.appendChild(cloneFirst)
  //       this.totalWidth = swiperEl.offsetWidth
  //       this.swiperStyle = swiperEl.style
  //       console.log('handler')
  //     }
  //     this.setTransform(-this.totalWidth)
  //   },

  //   touchStart (e) {
  //     if (this.scrolling) return
  //     console.log('touchstart')
  //     this.stopTimer()
  //     this.startX = e.touches[0].pageX
  //   },

  //   touchMove (e) {
  //     console.log('move')
  //     this.currentX = e.touches[0].pageX
  //     this.distance = this.currentX - this.startX
  //     const currentPosition = -this.currentIndex * this.totalWidth
  //     const moveDistance = this.distance + currentPosition

  //     this.setTransform(moveDistance)
  //   },

  //   touchEnd (e) {
  //     console.log('end')
  //     const currentMove = Math.abs(this.distance)

  //     if (this.distance === 0) {
  //       return
  //     } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
  //       this.currentIndex--
  //     } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
  //       this.currentIndex++
  //     }
  //     this.scrollContent(-this.currentIndex * this.totalWidth)

  //     this.startTimer()
  //   },

  //   previous () {
  //     this.changeItem(-1)
  //   },

  //   next () {
  //     this.changeItem(1)
  //   },

  //   changeItem (num) {
  //     this.stopTimer()
  //     this.currentIndex += num
  //     this.scrollContent(-this.currentIndex * this.totalWidth)

  //     this.startTimer()
  //   }
  // }
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false // 是否正在滚动
    }
  },
  mounted: function () {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom()

      // 2.开启定时器
      this.startTimer()
    }, 3000)
  },
  methods: {
    /**
     * 定时器操作
     */
    startTimer: function () {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    stopTimer: function () {
      window.clearInterval(this.playTimer)
    },

    /**
     * 滚动到正确的位置
     */
    scrollContent: function (currentPosition) {
      // 0.设置正在滚动
      this.scrolling = true

      // 1.开始滚动动画
      this.swiperStyle.transition = 'transform ' + this.animDuration + 'ms'
      this.setTransform(currentPosition)

      // 2.判断滚动到的位置
      this.checkPosition()

      // 4.滚动完成
      this.scrolling = false
    },

    /**
     * 校验正确的位置
     */
    checkPosition: function () {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }

        // 2.结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex - 1)
      }, this.animDuration)
    },

    /**
     * 设置滚动的位置
     */
    setTransform: function (position) {
      this.swiperStyle.transform = `translate3d(${position / 14}rem, 0, 0)`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`
    },

    /**
     * 操作DOM, 在DOM前后添加Slide
     */
    handleDom: function () {
      // 1.获取要操作的元素
      const swiperEl = document.querySelector('.swiper-img')
      const slidesEls = swiperEl.getElementsByClassName('slide')

      // 2.保存个数
      this.slideCount = slidesEls.length

      // 3.如果大于1个, 那么在前后分别添加一个slide
      if (this.slideCount > 1) {
        const cloneFirst = slidesEls[0].cloneNode(true)
        const cloneLast = slidesEls[this.slideCount - 1].cloneNode(true)
        swiperEl.insertBefore(cloneLast, slidesEls[0])
        swiperEl.appendChild(cloneFirst)
        this.totalWidth = swiperEl.offsetWidth
        this.swiperStyle = swiperEl.style
      }

      // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth)
    },

    /**
     * 拖动事件的处理
     */
    touchStart (e) {
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return

      // 2.停止定时器
      console.log(this.stopTimer())
      this.stopTimer()

      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX
    },

    touchMove (e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      const currentPosition = -this.currentIndex * this.totalWidth
      const moveDistance = this.distance + currentPosition

      // 2.设置当前的位置
      this.setTransform(moveDistance)
    },

    touchEnd: function (e) {
      // 1.获取移动的距离
      const currentMove = Math.abs(this.distance)

      // 2.判断最终的距离
      if (this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
        this.currentIndex++
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 4.移动完成后重新开启定时器
      this.startTimer()
    },

    /**
     * 控制上一个, 下一个
     */
    previous: function () {
      this.changeItem(-1)
    },

    next: function () {
      this.changeItem(1)
    },

    changeItem: function (num) {
      // 1.移除定时器
      this.stopTimer()

      // 2.修改index和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 3.添加定时器
      this.startTimer()
    }
  }
}
</script>

<style scoped>
#CS-swiper {
  overflow: hidden;
  position: relative;
}
.swiper-img {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: .5rem;
}
.indi-item {
  box-sizing: border-box;
  width: .5rem;
  height: .5rem;
  border-radius: .25rem;
  background-color: #fff;
  line-height: .5rem;
  text-align: center;
  font-size: .85rem;
  margin: 0 .35rem;
}
.indi-item.active {
  background-color: rgba(212,62.46,1);
}
</style>
