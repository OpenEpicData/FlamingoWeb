<template>
  <v-dialog v-model="display" max-width="440px" persistent>
    <v-card>
      <v-card-title>
        <span>
          Flamingo 登录
        </span>

        <v-spacer></v-spacer>

        <v-btn
          text
          icon
          color="primary"
          @click="$store.commit('set_login_display', false)"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-text-field label="电子邮件、用户名" required></v-text-field>

        <p>
          没有账户？
          <span class="primary--text">创建一个！</span>
        </p>

        <p>
          <span class="primary--text">
            使用安全密钥登录
            <v-icon small>mdi-help-circle-outline</v-icon>
          </span>
        </p>

        <p>
          <span class="primary--text">登录选项</span>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">下一步</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    }
  }
}
</script>
