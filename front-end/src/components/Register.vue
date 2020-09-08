<template>
  <div>
    <h1>Регистрация</h1>
    <input
      v-model="login"
      class="reg-inp"
      type="text" name="login"
      placeholder="login"><br>
    <input
      v-model="pass1"
      class="reg-inp"
      type="password" name="pass1"
      placeholder="password"><br>
    <input
      v-model="pass2"
      class="reg-inp"
      type="password" name="pass2"
      placeholder="confirm password"><br>
    <input
      v-model="email"
      class="reg-inp"
      type="email" name="email"
      placeholder="email"><br>
    <button
      id="reg-btn"
      @click="register">
      Отправить
    </button>
    <button
      id="res-btn"
      @click="reset">
      Очистить
    </button>
  </div>
</template>

<script>
import LoginService from '../services/LoginService'
export default {
  data () {
    return {
      login: '',
      pass1: '',
      pass2: '',
      email: ''
    }
  },
  watch: {
    login (value) {
      // this.pass1 = value
    }
  },
  methods: {
    async register () {
      const response = await LoginService.register({
        login: this.login,
        pass1: this.pass1,
        pass2: this.pass2,
        email: this.email
      })
      console.log(response.data)
    },
    reset () {
      this.login = ''
      this.pass1 = ''
      this.pass2 = ''
      this.email = ''
    }
  },
  mounted () {
    // this.email = 'Hello, Vue.js'
  }
}
</script>

<style scoped>
h2 {
  color: darkcyan;
}

.reg-inp {
  padding: 5px;
  margin: 3px;
  color: navy;
  font-size: 12pt;
  width: 300px;
}

#reg-btn, #res-btn {
  width: 120px;
  margin: 15px;
  padding: 5px;
  border-radius: 5px;
}

#reg-btn:hover, #res-btn:hover {
  color: #fff;
  background-color: gray;
}
</style>
