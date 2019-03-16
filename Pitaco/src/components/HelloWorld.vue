<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="form">
      <md-field id="usuario">
        <label>E-Mail:</label>
        <md-input v-model="body.login_final"></md-input>
      </md-field>
      <md-field id="senha">
        <label>Senha:</label>
        <md-input v-model="body.senha" type="password"></md-input>
      </md-field>
      <!--md-switch v-model="admin" id="select">Administrador</md-switch--> 
      <md-button class="md-raised md-primary" v-on:click="login">Entrar</md-button>
      <md-button class="md-raised md-primary" v-on:click="voltarHome">Voltar</md-button>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    
  export default {
    props: {
      msg: String,
    },

    methods: {
      voltarHome() {
        var botoes = true;
        var login = false;
        this.$emit('voltarBotoes', botoes);
        this.$emit('voltarLogin', login);
      },
      login() {
        usuarios.login(this.body).then(resposta => {
          if (resposta === 200){
            alert("logado com sucesso");
          } else {
            alert("A conta não existe");
          }
        });
        
      },
    },
    
    data: () => ({
      body: {
        login_final: '',
        senha: '',
      },
    }),
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