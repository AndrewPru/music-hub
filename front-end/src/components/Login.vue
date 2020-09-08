<template>
  <div>
    <h1>Авторизация</h1>
    <input
      v-model="login"
      class="reg-inp"
      type="text" name="login"
      placeholder="login"><br>
    <input
      v-model="pass"
      class="reg-inp"
      type="password" name="pass"
      placeholder="password"><br>
    <button
      id="reg-btn"
      @click="register">
      Войти
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
      pass: ''
    }
  },
  watch: {
    login (value) {
      // this.pass1 = value
    }
  },
  methods: {
    async register () {
      const response = await LoginService.login({
        login: this.login,
        pass: this.pass
      })
      console.log(response.data)
    },
    reset () {
      this.login = ''
      this.pass = ''
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
