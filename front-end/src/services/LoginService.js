import API from '../services/API'

export default {
  register (credentials) {
    return API().post('register', credentials)
  },
  login (credentials) {
    return API().post('login', credentials)
  }
}

// LoginService.register({
//   login: 'admin',
//   pass1: 'qwerty123',
//   pass2: 'qwerty123',
//   email: 'admin@ukr.net'
// });
