/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

const altura = Dimensions.get('window').height;

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/home_background_app.png')}
      style={styles.homePattern}>
      <View style={styles.scaffold}>
        <Image
          style={styles.logoapp}
          source={require('./assets/logo_app-02.png')}
        />
        <Text style={styles.bemvindo}> Bem Vindo </Text>

        <TextInput
          placeholder="Login"
          keyboardType="numeric"
          style={styles.login_pass}
        />

        <TextInput
          placeholder="Senha"
          keyboardType="numeric"
          style={styles.login_pass}
        />

        <TouchableOpacity style={styles.botaoLogin}>
          <Text style={styles.textoEntrar}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.esqueciasenha}>Esqueci a Senha</Text>
      </View>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  scaffold: {
    flex: 1,
    marginTop: altura * 0.1,
  },
  homePattern: {
    flex: 1,
    resizeMode: 'cover',
    position: 'relative',
  },
  logoapp: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  bemvindo: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 30,
    marginTop: 50,
  },
  login_pass: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'left',
    paddingLeft: 20,
    backgroundColor: '#9b42cd',
    borderRadius: 15,
    marginHorizontal: 30,
    color: '#FFF',
  },
  botaoLogin: {
    backgroundColor: '#fdc908',
    borderRadius: 50,
    marginHorizontal: 30,
    height: 40,
    marginTop: 20,
  },
  textoEntrar: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 18,
    color: '#FFF',
  },
  esqueciasenha: {
    textAlign: 'center',
    marginTop: 5,
    color: 'cyan',
  },
});
