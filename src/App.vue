<template>
 
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <TodoSpinner v-if="loading"/>

      <template v-else>
      <TodoFormAdd/>
      <TodoItems/>
      <TodoEmpty/>

    </template>
        
    </div>
</div>

</template>

<script>

import TodoSpinner from '@/components/TodoSpinner';
import TodoFormAdd from '@/components/TodoFormAdd';
import TodoItems from '@/components/TodoItems';
import TodoEmpty from '@/components/TodoEmpty';
import axios from 'axios';

export default {
  name: 'App',
  
  components: {TodoSpinner, TodoFormAdd, TodoItems, TodoEmpty},
  
  data() {
    return {
      loading: false
    }
  },
   created() {
    axios.get('http://localhost:3000/todos')
    .then((response) => {
      this.$store.commit('storeTodos', response.data)
    })
    .finally(()=> {
      this.loading = false
    })
  },
}
</script>


