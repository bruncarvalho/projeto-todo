import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: [],
    user: {}
  },
  mutations: {
    storeUser(state, newUser) {
      state.user = newUser
    },

    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      //se não encontrar o id, o index será -1
      const index = state.todos.findIndex(todo => todo.id === payload.id)

      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.push(payload)
      }
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    }
  },
  actions: {
    async loginApi({ commit }, {username, password}) {

      //buscar na api todos os usuarios;
      const response = await axios.get('http://site2.com/api/v1/user');

      const users = response.data.data;
      console.log(username)
      console.log(password);

      const user = users.find(user => user.username === username);

      if (user) {
        commit('storeUser', user)
      } else {
        console.log('Informações inválidas!')
      }



      // //Fazer o get para buscar informações do usuário
      // const response = await axios.get(
      //   `https://api.github.com/users/${userName}`
      // )

      // //montar o usuário com as informações recebidas
      // const newUser = {
      //   id: response.data.id,
      //   name: response.data.name,
      //   avatar: response.data.avatar_url,
      //   bio: response.data.bio
      // }

      // //fazer o commit para alterar o state.use
      // commit('storeUser', newUser)
    },

    getTodos({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos').then(response => {
            commit('storeTodos', response.data)
            resolve()
          })
        }, 1000)
      })
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then(response => {
        commit('storeTodo', response.data)
      })
    },

    updateTodo({ commit }, payload) {
      return axios
        .put(`http://localhost:3000/todos/${payload.id}`, payload.data)
        .then(response => {
          commit('storeTodo', response.data)
        })
    },
    deleteTodo({ commit }, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit('deleteTodo', id)
      })
    }
  },
  getters: {},

  modules: {}
})
