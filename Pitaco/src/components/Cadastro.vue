<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="form">
      <md-field id="email">
        <label>E-Mail:</label>
        <md-input v-model="email"></md-input>
      </md-field>
      <md-field id="senha">
        <label>Senha:</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
      <md-field id="confirmSenha">
        <label>Confime sua senha:</label>
        <md-input v-model="confirmSenha" type="password"></md-input>
      </md-field>
      <md-datepicker v-model="selectedDate" md-immediately id="data">
        <label>Data de nascimento:</label>
      </md-datepicker>
      <md-field id="endereco">
        <label>Endereço:</label>
        <md-input v-model="endereco"></md-input>
      </md-field>
      <md-switch v-model="admin" id="select">Cliente Administrador</md-switch> 
      <md-button class="md-raised md-primary" click="">Cadastrar</md-button>
      <md-button class="md-raised md-primary" v-on:click="voltarHome">Voltar</md-button>
    </div>
  </div>
</template>

<script>
    export default {
    props: {
      msg: String,
    },

    methods: {
      voltarHome() {
        var botoes = true;
        var cadastrar = false;
        this.$emit('voltarBotoes', botoes);
        this.$emit('voltarCadastro', cadastrar);
      }
    },
    
    data: () => ({
      email: null,
      password: '',
      confirmSenha: '',
      selectedDate: new Date(),
      endereco: '',
      admin: false,
    })
  }
</script>

<style scoped>
  #email {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #senha {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #confirmSenha {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000; 
  }
  #data {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #endereco {
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