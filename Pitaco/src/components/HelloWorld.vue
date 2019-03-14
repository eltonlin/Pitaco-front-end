<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="form">
      <md-field id="usuario">
        <label>Usuario:</label>
        <md-input v-model="usuario"></md-input>
      </md-field>
      <md-field id="senha">
        <label>Senha:</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-switch v-model="boolean" id="select">Administrador</md-switch> 
      <md-button class="md-raised md-primary" click="">Entrar</md-button>
      <md-button class="md-raised md-primary" click="">Voltar</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String,
    },
    
    data: () => ({
      usuario: null,
      password: '',
      boolean: false
    })
  }
</script>

<style scoped>
  #usuario {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #senha {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #form {
    color: #2c3e50;
    position: center;
    padding: 30px;
    margin: 30px;
    border: 1px solid #000000;
  }
  #select {
    color: #2c3e50;
    display: flex;
  }
</style>