<template>
  <v-row>
    <v-col v-for="i in 30" :key="i" xs="12" sm="6" md="4" xl="3">
      <v-card hover to="/profile/elon-musk">
        <v-layout>
          <v-flex shrink>
            <v-img
              height="130"
              width="130"
              :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
            ></v-img>
          </v-flex>
          <v-flex>
            <v-container grid-list-lg pl-5 fill-height>
              <v-layout align-center justify-start row>
                <v-flex>
                  <span class="title">
                    Elon Musk
                  </span>
                  <br />
                  <span class="subtitle-1 grey--text">
                    Works at SpaceX
                  </span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
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
