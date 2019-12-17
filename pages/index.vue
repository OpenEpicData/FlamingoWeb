<template>
  <v-row>
    <v-col cols="12" md="8" xl="9">
      <div>
        <TypeMessage />

        <Post class="mt-5" />
      </div>
    </v-col>

    <v-col cols="12" md="4" xl="3">
      <v-card>
        <v-card-text>
          <div class="mt-5">
            <div>
              <span class="title">
                故事
              </span>
            </div>

            <div
              class="mt-5 d-inline-block text-truncate"
              style="max-width: 100%;"
            >
              <v-btn fab color="primary" x-large elevation="0">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn
                v-for="a in 3"
                :key="a"
                fab
                x-large
                elevation="0"
                class="ml-5"
                outlined
                color="primary"
              >
                <v-avatar size="62">
                  <v-img
                    src="https://s2.ax1x.com/2019/08/07/e5NUZq.jpg"
                    width="100%"
                    height="100%"
                  ></v-img>
                </v-avatar>
              </v-btn>
            </div>
          </div>

          <div class="mt-12">
            <span class="title">最新事件</span>

            <div class="mt-5">
              <v-img
                src="https://pbs.twimg.com/media/D_2f-zIWsAI8djA?format=jpg&name=medium"
              ></v-img>

              <p>
                <span class="subtitle-1"> Google open meetup - Pixel</span>
                <br />
                下午 3:10, 今日
              </p>
            </div>
          </div>

          <div class="mt-12">
            <span class="title">好友请求</span>

            <Friend />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TypeMessage from '~/components/TypeMessage.vue'
import Post from '~/components/post.vue'
import Friend from '~/components/friend.vue'

export default {
  components: {
    TypeMessage,
    Post,
    Friend
  },
  data: () => ({
    appbar: {
      tabs: ['推文', '照片', '视频', '社区', '特别关注']
    }
  }),
  mounted() {
    this.$store.commit('filling_appbar_tabs', this.appbar.tabs)
  }
}
</script>
