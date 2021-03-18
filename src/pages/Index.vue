<template>
<div>
  <div @click="clicks">ssfsfsffjsdjfdslfdsf</div>
</div>
</template>
<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      change: ''
    }
  },
  methods: {
    clicks() {
      // const a = axios.create({
      //   baseURL: 'https://apipro.playinjoy.com',
      //   timeout: 2000
      // })
      this.$http.post('/legion/bstock').then(res => {
        console.log(res, 'res')
      })
      // this.$axios.post('https://apipro.playinjoy.com/legion/bstock').then(res => {
      //   console.log(res, 'res')
      // })
      // this.$http.post('/legion/bstock').then(res => {
      //   console.log(res)
      // })
      console.log(this)
    }
  }
}

</script>
