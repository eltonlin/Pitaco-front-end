<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="form">
      <md-field id="email">
        <label>E-Mail:</label>
        <md-input v-model="usuario_final.login_final"></md-input>
      </md-field>
      <md-field id="nome">
        <label>Nome:</label>
        <md-input v-model="usuario_final.nome"></md-input>
      </md-field>
      <md-field id="cpf">
        <label>CPF:</label>
        <md-input v-model="usuario_final.cpf"></md-input>
      </md-field>
      <md-field id="salario">
        <label>Salario:</label>
        <md-input v-model="usuario_final.faixa_salarial" type="decimal"></md-input>
      </md-field>
      <md-field id="senha">
        <label>Senha:</label>
        <md-input v-model="usuario_final.senha" type="password"></md-input>
      </md-field>
      <md-field id="confirmSenha">
        <label>Confime sua senha:</label>
        <md-input v-model="confirmSenha" type="password"></md-input>
      </md-field>
      <!--md-datepicker v-model="usuario_final.dataNascimento" md-immediately id="data">
        <label>Data de nascimento:</label>
      </md-datepicker>
      <md-field id="endereco">
        <label>Endereço:</label>
        <md-input v-model="usuario_final.endereco"></md-input>
      </md-field>
      <md-switch-- v-model="usuario_final.admin" id="select">Cliente Administrador</md-switch--> 
      <md-button class="md-raised md-primary" v-on:click="salvarUsuario">Cadastrar</md-button>
      <md-button class="md-raised md-primary" v-on:click="voltarHome">Voltar</md-button>
    </div>
  </div>
</template>

<script>
    const API_URL = 'http://localhost:3000';
    import axios from 'axios';
    //import usuarios from '../services/usuarios';
    
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
      },
      salvarUsuario() {
        //const url = `${API_URL}/usuario_final`;

        return axios.post(`http://localhost:3000/usuario_final`,JSON.stringify(this.usuario_final));
        

        /*
        if (this.usuario_final.senha === this.confirmSenha){
          usuarios.salvar(this.usuario_final).then(resposta => {
            alert("salvo com sucesso");
          });
        } else {
          alert("Confirme sua senha");
        }
        */
      },
    },
    
    data: () => ({
      confirmSenha: '',
      usuario_final: {
          login_final: '',
          senha: '',
          nome: '',
          cpf: '',
          faixa_salarial: '',
          pontuacao: '12'
      }
    })
  }
</script>

<style scoped>
  #email {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #nome {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #cpf {
    color: #2c3e50;
    padding: 20px;
    border-bottom: 1px solid #000000;
  }
  #salario {
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