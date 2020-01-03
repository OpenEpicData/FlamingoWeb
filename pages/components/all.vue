<template>
  <div>
    <v-card>
      <v-card-title>
        TypeMessage

        <v-btn
          :href="`${source.url}TypeMessage.vue`"
          fab
          small
          target="_black"
          class="ml-3"
        >
          <v-icon>
            mdi-xml
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <TypeMessage />
      </v-card-text>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>
        Slide

        <v-btn
          :href="`${source.url}slide.vue`"
          fab
          small
          target="_black"
          class="ml-3"
        >
          <v-icon>
            mdi-xml
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <Slide />
      </v-card-text>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>
        Post

        <v-btn
          :href="`${source.url}post.vue`"
          fab
          small
          target="_black"
          class="ml-3"
        >
          <v-icon>
            mdi-xml
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <Post />
      </v-card-text>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>
        Friend

        <v-btn
          :href="`${source.url}friend.vue`"
          fab
          small
          target="_black"
          class="ml-3"
        >
          <v-icon>
            mdi-xml
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <Friend />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {
    TypeMessage: () => import('~/components/TypeMessage'),
    Slide: () => import('~/components/slide'),
    Post: () => import('~/components/post'),
    Friend: () => import('~/components/friend')
  },
  data: () => ({
    source: {
      url: 'https://github.com/OpenEpicData/FlamingoWeb/blob/master/components/'
    }
  }),
  mounted() {
    this.$store.commit('filling_appbar_tabs', '')
  }
}
</script>
