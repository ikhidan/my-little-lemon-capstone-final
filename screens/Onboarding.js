import React, { useState } from 'react';
import { ScrollView,View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';

export default function Onboarding({navigation}) {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [registered, onNext] = useState(false);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.headerText}>Welcome to Little Lemon </Text>
      {registered && <Text style={styles.headerText}>You are Registered!</Text>}
      
    {!registered && (
      <>
      <Text style={styles.regularText}>Lets us get to know you </Text>
      <TextInput
        style={styles.inputBox}
        value={name}
        onChangeText={onChangeName}
        placeholder={'First Name'}
        keyboardType={'text'}
      />
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />

        <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADFF2F',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 5,
    marginVertical: 50,
    margin: 120,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
});