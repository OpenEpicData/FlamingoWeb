<template>
  <div>
    <v-card class="type-message py-3">
      <v-toolbar flat>
        <v-toolbar-title class="d-none d-sm-flex">
          <v-avatar size="50">
            <img src="https://s2.ax1x.com/2019/12/17/QTGUoV.jpg" alt="avatar" />
          </v-avatar>
        </v-toolbar-title>

        <v-textarea
          auto-grow
          no-resize
          outlined
          rows="1"
          hide-details
          label="What are you thinking about?"
          background-color="transparent"
          color="black"
          class="mx-2"
        ></v-textarea>
        <div class="d-none d-sm-flex">
          <v-btn icon>
            <v-icon>mdi-file-image-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-camera-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account-off-outline</v-icon>
          </v-btn>
        </div>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss">
.type-message {
  .v-toolbar,
  .v-toolbar__content {
    height: auto !important;
  }
  .v-toolbar__content {
    padding: 0 16px !important;
  }
}
</style>
