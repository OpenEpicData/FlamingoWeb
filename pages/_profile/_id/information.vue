<template>
  <div>
    <div class="my-5">
      <v-btn
        v-for="(item, i) in nav"
        :key="i"
        :text="!item.href"
        :class="{ primary: item.href, 'primary--text': !item.href }"
        rounded
      >
        {{ item.text }}
      </v-btn>
    </div>

    <v-row>
      <v-col v-for="(item, i) in informations" :key="i" xs="6" md="4" xl="3">
        <v-card outlined hover class="px-5">
          <v-row align="center" justify="center">
            <v-flex shrink>
              <v-icon x-large color="primary">
                {{ item.icon }}
              </v-icon>
            </v-flex>
            <v-flex>
              <v-flex class="pl-5 py-2">
                <span class="title">
                  {{ item.text }}
                </span>
                <br />
                <span class="subtitle-1 grey--text">
                  {{ item.commit }}
                </span>
              </v-flex>
            </v-flex>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    informations: [
      {
        text: '27 Years Old',
        commit: 'June 28, 1971',
        icon: 'mdi-cake'
      },
      {
        text: 'Live In',
        commit: 'Chalon Rd, Los Angeles, CA',
        icon: 'mdi-map-marker'
      },
      {
        text: 'CEO',
        commit: 'SpaceX',
        icon: 'mdi-briefcase'
      },
      {
        text: 'Marital Status',
        commit: 'Single',
        icon: 'mdi-account-tie'
      }
    ],

    nav: [
      {
        text: 'Overview',
        href: '/'
      },
      {
        text: 'Work & Education'
      },
      {
        text: 'Details about Elon'
      },
      {
        text: 'Life events'
      }
    ]
  })
}
</script>
