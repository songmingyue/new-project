
/* eslint-disable */
<template>
	<div>
		<transition name="fade">
			<div class="cmpt-shade" v-show="value" @click.self="hide"></div>
		</transition>
		<transition name="slide">
			<div class="cmpt-address-pop" v-show="value">
				<div class="cmpt-address-tit">
					<h3>选择地址</h3>
				</div>
				<div class="cmpt-address-selected-wrapper">
					<div class="cmpt-address-selected">
						<p
							:class="{
								'cmpt-address-selected-item': true,
								'current': column === index,
								'ani': true
							}"
							v-for="(item, index) in selected"
              :key="index"
							@click="changeItem(index)"
						>
							{{item.name}}
						</p>
						<p
							:class="{
								'cmpt-address-selected-item': true,
								'current': column === selected.length
							}"
							@click="changeItem(selected.length)"
						>
							请选择
						</p>
					</div>
				</div>
				<div
					class="cmpt-address-list-wrapper"
					:style="{
						transform: `translateX(${distance}%)`,
						width: `${width}%`
					}"
				>
					<div class="cmpt-address-list" v-for="(item, col) in list" :key="col">
						<p
							:class="{
								'cmpt-address-item': true,
								'current': isCurrent(col, hor)
							}"
							v-for="(sub, hor) in item"
              :key="sub"
							@click="chooseItem(col, hor, sub)"
						>
							{{sub.name}}
						</p>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script type="text/javascript">
export default {
  name: 'addressList',

  props: {
    // 区域列表
    area: {
      type: Array
    },

    value: {
      type: Boolean
    }
  },

  watch: {
    // 监测父组件传来的数据，处理成组件需要的格式
    area(arr) {
      if (!arr || !arr.length) {
        return
      }
      // 每次父组件传来的数据有变化时，先清空列表
      this.list = []
      const list = JSON.parse(JSON.stringify(arr))
      this.handleData(list)
    },

    // 监测当前所选择的列索引，然后将横向区域滑动到对应的位置
    column(val) {
      const num = this.list ? this.list.length : 0
      // 计算横向区域需要滑动的距离
      this.distance = -val * (100 / num)
    },

    // 横向区域的宽度由list的长度决定
    list(val) {
      const len = val ? val.length : 0
      this.width = (len) * 100
    },

    value(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'initial'
      }
    }
  },

  data() {
    return {
      column: 0, // 当前选中列的索引值
      distance: 0, // 横向区域需要滑动的距离
      width: 100, // 横向区域的宽度（单位: %）
      list: [], // 根据父组件传来的数据，处理成组件所需要的数据
      selected: [], // 当前选择的数据
      clicking: false, // 防止重复点击
      current: [] // 存放当前所选纵和列的索引值，用来处理高亮
    }
  },

  methods: {
    chooseItem(col, hor, item) {
      // 防止重复点击
      if (this.clicking) {
        return
      }
      this.clicking = true
      setTimeout(() => {
        this.clicking = false
      }, 300)
      let arr = this.current
      const selected = this.selected
      const list = this.list
      let mark = false // 标记是否新选中
      let mark2 = false // 标记是否更改了已选中
      for (let i = 0; i < arr.length; i++) {
        const obj = arr[i]
        if (obj.col === col) {
          mark = true
        }
        // 如果当前列已有选中项，此时点击了其他的区域，则需要重新处理数据
        if (obj.col === col && obj.hor !== hor) {
          obj.hor = hor
          arr = arr.slice(0, col + 1)
          this.selected = selected.slice(0, col)
          this.list = list.slice(0, col + 1)
          mark2 = true
        }
      }
      // 如果当前列是新选中的，直接push到数组中
      if (!mark) {
        arr.push({ col, hor })
      }
      // 如果是新选中，或者更改已选中，则需要重新处理数据，如果点击已选中的，则不重新处理
      if (!mark || mark2) {
        this.addSelected(item)
        this.current = arr
        this.handleData(item.subList)
      }
      // 如果点击项是最后一级，把数据传给父组件
      if (!item.subList || !item.subList.length) {
        this.$emit('chooseArea', this.selected)
        this.hide()
        this.init()
        return
      }
      this.column = col + 1
    },

    // 将数据处理成需要的类型
    handleData(arr) {
      if (!arr || !arr.length) {
        return
      }
      const list = []
      for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        list.push({
          id: current.id,
          name: current.name,
          subList: current.subList
        })
      }
      this.list.push(list)
    },

    // 点击纵向索引
    changeItem(index) {
      this.column = index
    },

    // 添加选中项
    addSelected(item) {
      this.selected.push({
        name: item.name,
        id: item.id
      })
    },

    // 判断是否选中，用来处理高亮显示
    isCurrent(col, hor) {
      const current = this.current
      let status = false
      for (let i = 0; i < current.length; i++) {
        const item = current[i]
        if (item.col === col && item.hor === hor) {
          status = true
        }
      }
      return status
    },

    hide() {
      this.init()
      this.$emit('input', false)
    },

    // 初始化
    init() {
      this.column = 0
      this.distance = 0
      this.width = 100
      this.selected = []
      this.current = []
      this.list = []
      const arr = JSON.parse(JSON.stringify(this.area))
      this.handleData(arr)
    }
  },

  mounted() {
  }
}

</script>

<style lang="scss" scope>
.slide-enter-active, .slide-leave-active {
	transition: transform .3s ease-in-out;
}

.slide-enter, .slide-leave-to {
	transform: translateY(100%);
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .3s ease-in-out;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.cmpt-shade {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}

.cmpt-address-pop {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 10001;
	width: 100%;
	background-color: #fff;
	overflow: hidden;

	.cmpt-address-tit {
		height: 50px;
		padding: 0 20px;
		display: flex;
		align-items: center;

		h3 {
			font-size: 15px;
			font-weight: bold;
			color: #505050;
			text-align: center;
			word-break: break-all;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			flex: 1;
		}
	}

	.cmpt-address-selected-wrapper {
		position: relative;
		height: 42px;
		overflow: hidden;
		display: flex;
	}

	.cmpt-address-selected {
		height: 65px;
		padding: 0 20px;
		line-height: 40px;
		overflow-x: scroll;
		overflow-scrolling: touch;
		display: flex;
		flex: 1;
	}

	.cmpt-address-selected-item {
		margin-right: 30px;
		height: 40px;
		flex: none;

		&.ani {
			animation: strength 0.2s forwards;
		}

		&.current {
			border-bottom: 2px solid #367EF5;
			font-weight: bold;
		}
	}

	.cmpt-address-list-wrapper {
		max-height: 60vh;
		height: 360px;
		display: flex;
		transition: transform 0.2s linear;
	}

	.cmpt-address-list {
		margin-top: 10px;
		padding: 0 20px 10px;
		overflow-y: scroll;
		overflow-scrolling: touch;
		box-sizing: border-box;
		flex: 1;

		.cmpt-address-item {
			padding: 8px 0;

			&.current {
				color: #367EF5;
				font-weight: bold;
			}
		}
	}

	@keyframes strength {
		0% {
			margin-left: -40px;
			opacity: 0;
		}
		100% {
			margin-left: 0;
			opacity: 1;
		}
	}
}
</style>
