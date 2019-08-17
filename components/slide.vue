<template>
  <v-slide-group center-active show-arrows>
    <v-slide-item v-for="(item, i) in slide.images" :key="i">
      <v-card
        :class="slide_margin(i, slide.images)"
        color="black"
        height="200"
        width="300"
        target="_black"
      >
        <v-img :src="item" height="100%" width="100%" />
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  data: () => ({
    slide: {
      images: [
        'https://pbs.twimg.com/media/EBPDVUzU8AA-Ycu?format=jpg&name=large',
        'https://pbs.twimg.com/media/EA6bZJBXYAA4M8w?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/EA2Sr1GU4AA3KPa?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/EAfBHYfU0AATrVN?format=jpg&name=medium',
        'https://pbs.twimg.com/media/EAP6X-9U4AArcMP?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/D27_AItUcAAHku_?format=jpg&name=large'
      ]
    }
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
