<template>
  <div>
    <v-slide-group center-active show-arrows>
      <v-slide-item v-for="(item, i) in slide.images" :key="i">
        <v-card
          :class="slide_margin(i, slide.images)"
          @click.stop="dialog = true"
          color="black"
          height="200"
          width="300"
        >
          <v-img :src="item" height="100%" width="100%" />
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-dialog v-model="dialog" height="90vh" width="90vw">
      <v-sheet>
        <v-row no-gutters>
          <v-col cols="12" md="7" lg="9">
            <v-img
              :src="'https://s2.ax1x.com/2019/12/18/Q7i01S.png'"
              :aspect-ratio="16 / 9"
              height="100%"
              width="100%"
            >
            </v-img>
          </v-col>

          <v-col cols="12" md="5" lg="3">
            <v-card flat>
              <v-list-item>
                <v-list-item-avatar>
                  <img
                    src="https://s2.ax1x.com/2019/12/17/QTGUoV.jpg"
                    alt="avatar"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="headline"
                    >Elon Musk</v-list-item-title
                  >
                  <v-list-item-subtitle
                    >8:15 PM, yesterday</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>

              <v-card-text class="body-1">
                Look how cool I’m talking about some technical stuff. It’s
                awesome, right? Would you pay to see this?
              </v-card-text>

              <v-row no-gutters align="start">
                <v-col cols="auto">
                  <v-btn text dark color="grey lighten-2">
                    <v-icon left dark>mdi-thumb-up-outline</v-icon>
                    25K
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text dark color="grey lighten-2">
                    <v-icon left dark>mdi-message-outline</v-icon>
                    2K
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text dark color="grey lighten-2">
                    <v-icon left dark>mdi-share-outline</v-icon>
                    542
                  </v-btn>
                </v-col>
              </v-row>

              <v-divider class="mt-3"></v-divider>

              <v-card-text>
                <v-row no-gutters justify="space-between" align="center">
                  <v-col class="primary--text subtitle-1">
                    View all comments
                  </v-col>

                  <v-col class="grey--text text-lighten-2" cols="auto">
                    56 of 98
                  </v-col>
                </v-row>

                <v-list two-line>
                  <template v-for="(item, index) in comments">
                    <v-subheader
                      v-if="item.header"
                      :key="item.header"
                      v-text="item.header"
                    ></v-subheader>

                    <v-divider
                      v-else-if="item.divider"
                      :key="index"
                      :inset="item.inset"
                    ></v-divider>

                    <v-list-item v-else :key="item.title" class="px-0">
                      <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          item.subtitle
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    slide: {
      images: [
        'https://pbs.twimg.com/media/EBPDVUzU8AA-Ycu?format=jpg&name=large',
        'https://pbs.twimg.com/media/EA6bZJBXYAA4M8w?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/EA2Sr1GU4AA3KPa?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/EAfBHYfU0AATrVN?format=jpg&name=medium',
        'https://pbs.twimg.com/media/EAP6X-9U4AArcMP?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/D27_AItUcAAHku_?format=jpg&name=large'
      ]
    },
    comments: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "Ali Connors I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle:
          "to Alex, Scott, JenniferWish I could come, but I'm out of town this weekend."
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          'Sandra Adams, Do you have Paris recommendations? Have you ever been?'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle:
          'Trevor Hansen, Have any ideas about what we should get Heidi for her birthday?'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle:
          'Britta Holt, We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  }),
  methods: {
    slide_margin(k, data) {
      return {
        'mx-2': k !== 0 && k !== data.length - 1
      }
    }
  }
}
</script>

<style lang="scss">
.post {
  .v-slide-group__prev,
  .v-slide-group__next {
    i {
      font-size: 30px !important;
    }
  }
}
/**
.post {
  .v-slide-group__prev,
  .v-slide-group__next {
    background: transparent;
    position: relative;
    min-width: 40px;
    z-index: 2;

    i {
      color: #fff !important;
      background: #2196f3;
      font-size: 48px !important;
      border-radius: 50%;
    }

    .v-icon--disabled {
      display: none;
    }
  }

  .v-slide-group__prev {
    left: 20px;
  }

  .v-slide-group__next {
    right: 20px;
  }

  .v-slide-group__wrapper {
    margin: 0 -40px;
  }
}
*/
</style>
