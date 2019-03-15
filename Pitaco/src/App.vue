<template>

  <div id="app">
    <img alt="Vue logo" src="./assets/pitaco1.png">
    <div v-if="botoes">
      <h1>Escolha uma opção:</h1>
      <md-button class="md-raised md-primary" v-on:click="botoes = false, login = true">Entrar</md-button>
      <md-button class="md-raised md-primary" v-on:click="botoes = false, cadastrar = true">Cadastrar</md-button>
      
    </div>
    <div v-if="login">
      <HelloWorld msg="Login" v-on:voltarLogin="login = $event" v-on:voltarBotoes="botoes = $event"/>
    </div>
    <div v-if="cadastrar">
      <Cadastro msg="Cadastro" v-on:voltarCadastro="cadastrar = $event" v-on:voltarBotoes="botoes = $event"/>
    </div>
    
  </div>
  
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Cadastro from './components/Cadastro.vue'
  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  import 'vue-material/dist/vue-material.min.css'
  Vue.use(VueMaterial)

  export default {
    name: 'app',
    components: {
      HelloWorld,
      Cadastro
    },
    data: () => ({
      botoes: true,
      login: false,
      cadastrar: false
    })
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    margin-top: 20px;
  }
</style>
