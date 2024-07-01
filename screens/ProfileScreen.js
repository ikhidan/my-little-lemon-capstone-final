import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet,TextInput,Button,Image,Pressable,TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';

export default function ProfileScreen({navigation}) {
  const [firstname, onChangeFirstName] = useState('');
  const [lastname, onChangeLastName] = useState('');
  const [phone, onChangePhone]= useState('');
  const [email, onChangeEmail] = useState('');
  const [registered, onNext] = useState(false);
  const [image, setImage] = useState(null);

  const addImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
     
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };

  const  checkForCameraRollPermission=async()=>{
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert("Please grant camera roll permissions inside your system's settings");
    }else{
      console.log('Media Permissions are granted')
    }
  }

  useEffect(() => {
    checkForCameraRollPermission()
  }, []);


  return (
<ScrollView style={styles.container}>
      <Text style={styles.regularText}></Text>

      <View style={styles.profilePhoto}>
                {
                    image  && <Image source={{ uri: image }} style={ styles.uploadBtn} />
                }
                    <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>

      


{registered && <Text style={styles.headerText}>You are Registered!</Text>}
{!registered && (
      <>
      <Text style={styles.formText}> First Name </Text>
      <TextInput
        style={styles.inputBox}
        value={firstname}
        onChangeText={onChangeFirstName}
        placeholder={'First Name'}
        keyboardType={'text'}
      />

<Text style={styles.formText}>  Last Name </Text>
      <TextInput
        style={styles.inputBox}
        value={lastname}
        onChangeText={onChangeLastName}
        placeholder={'Last Name'}
        keyboardType={'text'}
      />

<Text style={styles.formText}>  Email </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
<Text style={styles.formText}>  Phone Number </Text>
      <TextInput
        style={styles.inputBox}
        value={phone}
        onChangeText={onChangePhone}
        placeholder={'Phone Number'}
        keyboardType={'text'}
      />

        <Pressable onPress={() => navigation.navigate('Get Started')} style={styles.button}>
            <Text style={styles.buttonText}>Log out</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Home')} style={styles.discardchanges}>
            <Text style={styles.discardchangesText}>Discard</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Home')} style={styles.savechanges}>
            <Text style={styles.savechangesText}>Save </Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF5E6"
  },
  profilePhoto:{
    elevation:2,
    height:120,
    width:120,
    backgroundColor:'#efefef',
    position:'relative',
    borderRadius:999,
    overflow:'hidden',
    marginLeft: 130,
    marginTop: -30,
    
},
  uploadBtnContainer:{
    opacity:0.9,
    position:'absolute',
    right:0,
    bottom:0,
    backgroundColor:'lightgrey',
    width:'100%',
    height:'30%',
    alignItems: 'center',
    justifyContent: 'center',
    
},
  uploadBtn:{
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
    marginBottom: 15,
    height:120,
    width:120,
    
},

  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 15,
    padding: 10,
    marginVertical: 8,
    color: 'black',
    textAlign: 'left',
  },
  formText: {
    fontSize: 15,
    padding: 10,
    marginVertical: 5,
    color: 'black',
    textAlign: 'left',
  },
  inputBox: {
    height: 40,
    margin: 12,
    marginTop: -15,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 10,
    marginLeft:300,
    borderColor: '#FBDABB',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#FBDABB',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  discardchanges: {
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 10,
    marginLeft:300,
    borderColor: '#FBDABB',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#FBDABB',
  },
  discardchangesText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  savechanges: {
    padding: 0,
    marginVertical: 5,
    marginHorizontal: 10,
    marginLeft:300,
    borderColor: '#FBDABB',
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: '#FBDABB',
  },
  savechangesText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});


