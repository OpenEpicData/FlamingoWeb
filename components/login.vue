<template>
  <v-dialog v-model="display" max-width="440px" persistent>
    <v-card>
      <v-card-title>
        <span>{{ register ? '注册' : login ? '登录' : '' }} Flamingo 账户</span>

        <v-spacer></v-spacer>

        <v-btn
          @click="$store.commit('set_login_display', false)"
          text
          icon
          color="primary"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-form v-model="email.valid">
          <v-text-field
            v-model="email.data"
            :rules="email.rules"
            label="电子邮件"
            required
            type="email"
          ></v-text-field>
        </v-form>

        <v-form v-if="register" v-model="name.valid">
          <v-text-field
            v-model="name.data"
            :rules="name.rules"
            label="用户名"
            required
            type="text"
          ></v-text-field>
        </v-form>

        <v-form v-if="register || login" v-model="password.valid">
          <v-text-field
            v-model="password.data"
            :rules="password.rules"
            label="密码"
            required
            type="password"
          ></v-text-field>
        </v-form>

        <p>
          <span class="primary--text">
            使用安全密钥登入
            <v-icon small>mdi-help-circle-outline</v-icon>
          </span>
        </p>

        <p>
          <span class="primary--text">登入选项</span>
        </p>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            v-if="register || login"
            @click="
              register = false
              login = false
            "
            text
            >返回上一步</v-btn
          >

          <v-btn
            :disabled="!email.valid || email.loading"
            :loading="loading"
            @click="
              register
                ? account('register')
                : login
                ? account('login')
                : verify_email(email.data)
            "
            color="primary"
            >{{ register ? '注册' : login ? '登入' : '下一步' }}</v-btn
          >
        </v-card-actions>
      </v-card-text>
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
  },
  data: () => ({
    loading: false,
    register: false,
    login: false,
    email: {
      data: null,
      rules: [
        (v) => !!v || '邮件地址不能为空',
        (v) => /.+@.+/.test(v) || '请输入正确的邮件地址'
      ],
      valid: false
    },
    name: {
      data: null,
      rules: [(v) => !!v || '用户名不能为空'],
      valid: false
    },
    password: {
      data: null,
      rules: [(v) => !!v || '密码不能为空'],
      valid: false
    }
  }),
  methods: {
    async account(method) {
      const self = this
      self.loading = true
      await this.$axios
        .$post(`/api/auth/${method}`, {
          email: self.email.data,
          name: self.name.data,
          password: self.password.data
        })
        .then(() => {
          this.$store.commit('set_login_display', false)
          self.email.data = null
          self.name.data = null
          self.password.data = null
          self.login = false
          self.register = false
        })
        .catch(() => {})
        .finally(() => {
          self.loading = false
        })
    },
    async verify_email(data) {
      const self = this
      self.loading = true
      await this.$axios
        .$post(`/api/auth/verify-email`, {
          email: data
        })
        .then(() => {
          self.login = true
        })
        .catch(() => {
          self.register = true
        })
        .finally(() => {
          self.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
.login-dialog {
  .v-stepper__content {
    padding: 0 !important;
  }
}
</style>
