<template>
  <div>
    <form action="#" @submit.prevent="login()" >
      <input type="text" name="username" placeholder="username" v-model="user.username" />
      <input type="text" name="password" placeholder="password" v-model="user.password"/>
      <button type="submit">login</button>
      {{ data }}
    </form>

    <a @click="getdata()"> getdata</a>
  </div>
</template>

<script>
import BaseRequest from '@/core/BaseRequest.js'
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      data: this.$store.state.diem,
    };
  },

  methods: {
    login: function () {
      //  this.axios.post('http://127.0.0.1:8000/api/login', this.user)
        BaseRequest.post('login', this.user)
       .then( data => {
         this.data = data;
       })
       .catch( error => {
         console.log(error);
       })
    },

  },
};
</script>

<style scoped>
</style>

