<template>
  <v-row>
    <v-col v-for="i in 30" :key="i" xs="12" cols="6" md="4" xl="3">
      <v-card hover to="/profile/elon-musk">
        <v-row align="center" justify="start" class="fill-height pl-5">
          <v-col>
            <span class="title">
              Elon Musk
            </span>
            <br />
            <span class="subtitle-1 grey--text">
              Works at SpaceX
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    appbar: {
      tabs: ['所有好友', '同事', '同学', '关注', '推荐']
    }
  }),
  mounted() {
    this.$store.commit('filling_appbar_tabs', this.appbar.tabs)
  }
}
</script>
