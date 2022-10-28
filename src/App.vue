<template>
    <div>

        <Todo v-if="$store.state.user.id"/>

        <LoginPage v-else/>

    </div>
</template>

<script>

import Todo from '@/components/Todo';
import LoginPage from '@/components/LoginPage'


export default {
    name: 'App',
    components: { Todo, LoginPage },
    
}
</script>