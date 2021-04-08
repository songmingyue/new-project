<template>
  <div id="q-app" @touchmove="handleTouch">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  async mounted() {
    // this.isWeixin()
  },
  created() {
    document.body.addEventListener('touchmove', (e) => {
      if (e._isScroller) return
      e.preventDefault()
    }, {
      passive: false
    })
  },
  methods: {
    handleTouch(e) {
      e._isScroller = true
    }
  }
}

</script>
