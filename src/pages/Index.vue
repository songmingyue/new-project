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
      debugger
      console.log(this)
    }
  }
}

</script>
