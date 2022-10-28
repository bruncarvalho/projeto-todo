<template>
  <form  @submit.stop.prevent="login" class="mx-40 mt-20">
    <div class="bg-gray-300 rounded">

      <div class="flex items-center px-4 py-3">
        <div class="w-full">
          <input 
            v-model="userName"
            type="text" 
            placeholder="Digite seu usuário do GitHub" 
            class="bg-gray-300 placeholder-gray-500 text-gray-800 font-light focus:outline-none block w-full appearance-none leading-normal mr-3"
          >
        </div>

        <div class="ml-auto flex items-center justify-center">
          <button class="focus:outline-none" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" fill="rgba(107,114,128,1)"/></svg>
          </button>
        </div>
      </div>

    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex';

export default {
  setup() {
    const userName = ref('')

    const store = useStore()

    const login = () => {
      // verificar se userName está vazio
      if(!userName.value) {
        alert('Digite seu usuário')
         return;
      }

      // despachar a ação de login para o store
      store.dispatch('loginGit', userName.value)

      // retornar o userName e o login
    }

    return {
      userName,
      login
    }
  }
  
}
</script>