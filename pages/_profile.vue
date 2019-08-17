<template>
  <nuxt-child />
</template>

<script>
export default {
  mounted() {
    this.$store.commit('filling_appbar_tabs', '')
  }
}
</script>
