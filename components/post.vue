<template>
  <div>
    <v-card v-for="k in 3" :key="k" outlined class="post mb-5">
      <v-list-item>
        <v-list-item-avatar>
          <img src="https://s2.ax1x.com/2019/12/17/QTGUoV.jpg" alt="avatar" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="headline">Elon Musk</v-list-item-title>
          <v-list-item-subtitle>8:15 PM, yesterday</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text class="body-1">
        Our Falcon’ 1st step successfully returned from its’ 9th mission. Gonna
        <br />
        try it out next week one more time. Why not?
        <Slide class="mt-3" />

        <div class="mt-5">
          <v-row no-gutters align="start">
            <v-col cols="auto">
              <v-btn text dark large color="grey lighten-2">
                <v-icon left large dark>mdi-thumb-up-outline</v-icon>
                <span class="ml-3 title">25K</span>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn text dark large color="grey lighten-2">
                <v-icon left large dark>mdi-message-outline</v-icon>
                <span class="ml-3 title">2K</span>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn text dark large color="grey lighten-2">
                <v-icon left large dark>mdi-share-outline</v-icon>
                <span class="ml-3 title">542</span>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Slide from '~/components/slide.vue'

export default {
  components: {
    Slide
  }
}
</script>
