import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, Alert } from 'react-native'
import Cartao from '../components/Cartao'
import Botao from '../components/Botao'
import Input from '../components/Input'
import axios from 'axios'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 41,
    paddingRight: 41,
    paddingTop: 42,
    paddingBottom: 42
  },
  fundo: {
    width: '100%',
    height: 513
  },
  error: {
    fontSize: 12,
    color: "#FF0000",
    fontWeight: 'bold',
    marginLeft: 70
  }
});

export default function Login({ navigation} ) {

  const acionarLogin = () => { setLogar (true) }
  const acionarCadastro = () => { setLogar (false) }
  
  const acao = () => {
    let data = {
      nome: usuario,
      senha: senha
    }
    
    if (logar) {
      axios.post ('http://192.168.0.13:3000/api/usuarios/logar', data).then (
        (retorno => navigation.navigate ('Menu'))
      ).catch (
        error => { setIncorreto (true) }
      )
    }
    else {
      axios.post ('http://192.168.0.13:3000/api/usuarios/cadastrar', data).then (
        (retorno => { Alert.alert ("Usuário cadastrado!") } )
      ).catch (
        error => { console.log (error) }
      )
    }
  }
  
  const [logar, setLogar] = useState (false)
  const [usuario, setUsuario] = useState ('')
  const [senha, setSenha] = useState ('')
  const [incorreto, setIncorreto] = useState (false)

  return (
    <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1616004675303-ae5657c14af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80' }} style={styles.fundo} resizeMode="cover">
          <Cartao titulo="Selecione uma opção">
                <Botao action={acionarLogin} title="Login" />
                <Botao action={acionarCadastro} title="Cadastrar" />
                <Input callback={ usuario => setUsuario (usuario)} legenda="Usuário" senha={false} place="Entre com o usuário" />
                <Input callback={ senha => setSenha (senha)} legenda="Senha" senha={true} place="Entre com a senha" />
                <Botao action={acao} title={(logar) ? "Entrar" : "Cadastrar"} />
                {incorreto && <Text style={styles.error}>Credenciais incorretas</Text>}
          </Cartao>
        </ImageBackground>
    </View>
  );
}
