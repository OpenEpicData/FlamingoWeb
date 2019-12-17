<template>
  <v-app>
    <v-app-bar
      v-if="$store.state.appbar.tabs"
      app
      fixed
      flat
      color="grey lighten-4"
    >
      <v-app-bar-nav-icon
        @click="drawer.display = !drawer.display"
        class="d-lg-none"
      ></v-app-bar-nav-icon>
      <v-tabs
        color="black"
        slider-color="primary"
        background-color="grey lighten-4"
      >
        <v-tab
          v-for="(item, i) in $store.state.appbar.tabs"
          :key="i"
          class="font-weight-bold title"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer.display"
      color="blue-grey lighten-5"
      app
      fixed
      left
      flat
    >
      <v-sheet color="blue-grey lighten-5">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                :src="
                  $store.state.user.login
                    ? 'https://s2.ax1x.com/2019/12/17/QTGUoV.jpg'
                    : 'https://s2.ax1x.com/2019/12/17/QTGUoV.jpg'
                "
              >
              </v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item @click="$store.commit('set_login_display', true)" link>
            <v-list-item-content>
              <v-list-item-title class="title"
                >{{ $store.state.user.login ? 'User' : 'Login' }}
              </v-list-item-title>
              <v-list-item-subtitle v-if="$store.state.user.login">
                admin@gmail.com
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider dark></v-divider>

        <v-list nav dense>
          <template v-for="(item, i) in drawer.list">
            <v-layout v-if="item.heading" :key="i">
              <v-flex xs6>
                <v-subheader v-if="item.heading">{{
                  item.heading
                }}</v-subheader>
              </v-flex>
            </v-layout>

            <v-divider
              v-else-if="item.divider"
              :key="i"
              dark
              class="my-4"
            ></v-divider>

            <v-list-item
              v-else
              :key="i"
              :to="item.target ? '' : item.link"
              :href="item.target ? item.link : ''"
              :target="item.target ? '_black' : ''"
              link
              active-class="accent black--text"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-sheet>
    </v-navigation-drawer>

    <v-content class="grey lighten-4">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <login :display.sync="$store.state.login.display" />
  </v-app>
</template>

<script>
import login from '~/components/login.vue'

export default {
  components: {
    login
  },
  data: () => ({
    drawer: {
      display: null,
      list: [
        { heading: 'Menu' },
        {
          icon: 'mdi-newspaper',
          text: 'Trending',
          link: '/'
        },
        {
          icon: 'mdi-message-text-outline',
          text: 'Messages'
        },
        {
          icon: 'mdi-account-outline',
          text: 'Friends',
          link: '/friends'
        },
        {
          icon: 'mdi-account-group-outline',
          text: 'Community'
        },
        {
          icon: 'mdi-calendar-text-outline',
          text: 'Events'
        },
        { divider: true },
        { heading: 'Navigation' },

        {
          icon: 'mdi-github-circle',
          text: 'GitHub',
          link: 'https://github.com/OpenEpicData/FlamingoWeb',
          target: true
        },
        {
          icon: 'mdi-twitter',
          text: 'Twitter',
          link: 'https://twitter.com/stackFlam1ngo',
          target: true
        }
      ]
    }
  })
}
</script>
