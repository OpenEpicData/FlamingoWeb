<template>
  <div>
    <div class="post">
      <Slide class="py-5" />

      <v-row>
        <v-col shrink md="8">
          <TypeMessage />

          <Post class="mt-5" />
        </v-col>

        <v-col md="4">
          <v-card class="elevation-1 py-3">
            <v-row align="center" justify="space-around">
              <div
                v-for="(item, i) in status.columns"
                :key="i"
                class="text-center"
              >
                <span class="headline primary--text">
                  {{ item.data }}
                </span>

                <br />

                <span class="body-1 primary--text font-weight-thin">
                  {{ item.text }}
                </span>
              </div>
            </v-row>
          </v-card>

          <v-card class="mt-5">
            <v-card-text>
              <div class="mt-5">
                <span class="title">About</span>

                <div class="mt-5">
                  <span class="subtitle-1">
                    27 Years old, Single
                  </span>
                </div>
              </div>

              <div class="mt-12">
                <span class="title">Friends</span>

                <Friend />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Slide from '~/components/slide.vue'
import TypeMessage from '~/components/TypeMessage.vue'
import Post from '~/components/post.vue'
import Friend from '~/components/friend.vue'

export default {
  components: {
    Slide,
    TypeMessage,
    Post,
    Friend
  },
  data: () => ({
    status: {
      columns: [
        { data: '739k', text: 'Liked' },
        { data: '254k', text: 'Followed' },
        { data: '193', text: 'Friends' },
        { data: '203', text: 'Tweets' }
      ]
    }
  })
}
</script>
