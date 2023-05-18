import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,SafeAreaView ,Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import {firebase,authentication,db} from '../Config'


const Profil = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const [isEditable, setIsEditable] = useState(false);
  const [buttonText, setButtonText] = useState('Edit Profil');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = authentication.currentUser.uid;
      console.log("User ID:", userId);
      const userRef = db.collection('Utilisateur').doc(userId);
      const uspoi = await userRef.get();

        if (uspoi.exists) {
           setUserData(uspoi.data());
        }else{
          console.log("No such document!");
        }

    };

    fetchUserData();
  }, []);

  const changeSelectedDate = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setDate(currentDate);
  setShow(false);
 };
 const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
 };
 const displayDatepicker = () => {
    showMode('date');
 };
 const navigation = useNavigation();

 const handleImageSelection = async () => {
    // code to select an image from the device's camera roll or camera
    // set the selected image as the profile picture source
    setProfilePicture(selectedImage);
  };
  const [qrCodeUrl, setQRCodeUrl] = useState('');

  const generateQRCode = () => {
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:3000/info&qzone=1';
    setQRCodeUrl(url);
  };

  const MapN= async()=>{

    navigation.navigate('Maps');
  }
 
const handleSubmit = async(email,password,username,phone,location,date)=>{

    setButtonText('Confirm');
    if (isEditable == true) {
        setIsEditable(false);
        navigation.navigate('Login');
        navigation.navigate('Profil');
    } 

    setIsEditable(true);

}

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.inputBorder}>
        <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/defaultIcon.png')} style={{ backgroundColor:'#cccccc', width: 150, height: 150, borderRadius: 100 }} />
            <TouchableOpacity onPress={handleImageSelection} style={{ marginTop: 20, marginBottom: 20 }}>
            <Text  style={{ color: 'white', fontWeight: 'bold' }}>Select Profile Picture</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#D3B419" style={styles.icon}/>
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="#fff"
            value={userData?.username}
            onChangeText={setUsername}
            editable={isEditable}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            value={userData?.email}
            onChangeText={setEmail}
            editable={isEditable}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#fff"
            value={userData?.phone}
            onChangeText={setPhone}
            editable={isEditable}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#fff"
            value={userData?.location}
            onChangeText={setLocation}
            editable={isEditable}
          />
        </View>
        <View >
        <SafeAreaView >
      <View>
         
      <TouchableOpacity style={styles.inputContainer} onPress={displayDatepicker}>
        <Ionicons name="calendar-outline" size={24} color="#D3B419" style={styles.icon} />
        <Text 
        id='DateId'
        style={styles.input}>
        Select Date of Birth
        </Text>
     </TouchableOpacity>
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={userData?.date}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )}
      </SafeAreaView>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={userData?.password}
            onChangeText={setPassword}
            editable={isEditable}
          />
        </View>
        
        <TouchableOpacity style={styles.button}  onPress={()=>handleSubmit(email,password,username,phone,location,date)}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={MapN} style={styles.button}>
          <Text style={styles.buttonText}>Go to Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={generateQRCode} >
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>
      {qrCodeUrl ? (
        <Image style={styles.qrCode} source={{ uri: qrCodeUrl }} />
      ) : null}
     
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#212832',
  },
  inputBorder:{
    borderRadius: 25,
    backgroundColor: 'transparent',
    
    padding: 5,
  },
  
  image: {
    marginTop: -50,
    marginBottom: 0,
    
    width: 280,
    height: 280,
    alignSelf: 'center',
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#D3B419',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 30,
  },
 
  input: {
    backgroundColor: 'transparent',
    color: '#fff',
    padding: 8,
    fontSize: 15,
    fontWeight: '400',
    borderRadius: 5,
    marginLeft: 70,

   
  },
  button: {
    backgroundColor: '#b19715',
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    borderRadius: 11,
    marginLeft: '10%',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  qrCode: {
    width: 150,
    height: 150,
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default Profil;