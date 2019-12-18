<template>
  <v-row>
    <v-col v-for="i in 30" :key="i" xs="12" cols="6" md="4" xl="3">
      <v-card outlined hover to="/profile/Elon Musk">
        <v-row align="center" justify="start" no-gutters>
          <v-flex shrink>
            <v-img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'">
            </v-img>
          </v-flex>
          <v-col class="pl-5">
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
      tabs: ['All', 'Colleague', 'Classmate', 'Follow']
    }
  }),
  mounted() {
    this.$store.commit('filling_appbar_tabs', this.appbar.tabs)
  }
}
</script>
