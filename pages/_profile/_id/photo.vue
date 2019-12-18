<template>
  <div>
    <v-timeline dense>
      <v-timeline-item v-for="i in years" :key="i" small>
        <v-row justify="start" align="center">
          <v-col cols="12" md="1">
            <span class="headline font-weight-bold">
              {{ i }}
            </span>
          </v-col>
          <v-col cols="12" md="11">
            <v-row>
              <v-col
                v-for="(item, k) in photos"
                :key="k"
                cols="6"
                md="4"
                lg="3"
                xl="2"
              >
                <v-card hover>
                  <v-img :src="item" :aspect-ratio="16 / 9"></v-img>
                </v-card>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    photos: [
      'https://pbs.twimg.com/media/EBPDVUzU8AA-Ycu?format=jpg&name=large',
      'https://pbs.twimg.com/media/EA6bZJBXYAA4M8w?format=jpg&name=4096x4096',
      'https://pbs.twimg.com/media/EA2Sr1GU4AA3KPa?format=jpg&name=4096x4096',
      'https://pbs.twimg.com/media/EAfBHYfU0AATrVN?format=jpg&name=medium',
      'https://pbs.twimg.com/media/EAP6X-9U4AArcMP?format=jpg&name=4096x4096',
      'https://pbs.twimg.com/media/D27_AItUcAAHku_?format=jpg&name=large'
    ],
    years: [2019, 2018, 2017, 2016, 2015]
  })
}
</script>

<style lang="scss" scoped>
.v-timeline {
  padding: 0;
}
</style>
