import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,SafeAreaView ,Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import {firebase} from '../Config'


const Profil = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const [isEditable, setIsEditable] = useState(false);
  const [buttonText, setButtonText] = useState('Edit Profil');

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
 
const handleSubmit = async(email,password,ConfirmPassword,username,phone,location,date)=>{

    setButtonText('Confirm');
    if (isEditable == true) {
        setIsEditable(false);
        navigation.navigate('Login');
        navigation.navigate('Profil');
        //the code of the firebase should be here.
    } 

    setIsEditable(true);

   // console log the parameters :
   // code of firebase was here.

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
            value={username}
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
            value={email}
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
            value={phone}
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
            value={location}
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
                     value={date}
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
            value={password}
            onChangeText={setPassword}
            editable={isEditable}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
            editable={isEditable}
          />
        </View>
        
        <TouchableOpacity style={styles.button}  onPress={()=>handleSubmit(email,password,ConfirmPassword,username,phone,location,date)}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
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
});

export default Profil;