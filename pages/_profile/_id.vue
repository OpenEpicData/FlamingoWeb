<template>
  <div>
    <v-row align="center" justify="start">
      <v-col md="8" cols="12" align="start">
        <v-row>
          <v-col md="auto" class="d-none d-md-flex">
            <v-avatar size="170">
              <img
                :src="`https://s2.ax1x.com/2019/12/17/QTGUoV.jpg`"
                alt="avatar"
              />
            </v-avatar>
          </v-col>
          <v-col :align="$vuetify.breakpoint.smAndDown ? `center` : `start`">
            <v-row align="center">
              <v-col cols="12" justify="center">
                <span class="headline">{{ $route.params.id }}</span>
                <br />
                <br />
                <span class="subtitle-1 grey--text">
                  Btw, SpaceX is no longer planning to upgrade Falcon 9 second
                  stage for reusability. Accelerating BFR instead. New design is
                  very exciting! Delightfully counter-intuitive.
                </span>
              </v-col>

              <v-col cols="12" class="d-none d-lg-flex">
                <v-tabs background-color="transparent">
                  <v-tab
                    v-for="(item, i) in profile.tabs"
                    :key="i"
                    :to="`/profile/${$route.params.id}/${item.link}`"
                    exact
                    >{{ item.text }}</v-tab
                  >
                </v-tabs>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="d-none d-md-flex" cols="12" md="4" align="end">
        <v-row align="center" justify="end">
          <v-flex>
            <v-btn x-large fab color="primary">
              <v-icon>mdi-message-text-outline</v-icon>
            </v-btn>

            <v-btn x-large fab depressed>
              <v-icon color="primary">mdi-dots-vertical</v-icon>
            </v-btn>
          </v-flex>
        </v-row>
      </v-col>

      <v-col cols="12" class="d-flex d-lg-none">
        <v-tabs fixed-tabs background-color="transparent">
          <v-tab
            v-for="(item, i) in profile.tabs"
            :key="i"
            :to="`/profile/${$route.params.id}/${item.link}`"
            exact
            >{{ item.text }}</v-tab
          >
        </v-tabs>
      </v-col>
    </v-row>

    <nuxt-child />
  </div>
</template>

<script>
export default {
  data: () => ({
    profile: {
      tabs: [
        {
          text: 'Trending',
          link: ''
        },
        {
          text: 'Information',
          link: 'information'
        },
        {
          text: 'Friends',
          link: 'friends'
        },
        {
          text: 'Photos',
          link: 'photo'
        }
      ]
    }
  })
}
</script>
