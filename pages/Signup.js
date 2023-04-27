import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,SafeAreaView ,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
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

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // TODO: Submit form data to server or perform other actions
    
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.inputBorder}>
        
        <Image style={styles.image} source={require("../assets/Logo.png")} />
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
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
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View >
        <SafeAreaView >
      <View>
         
      <TouchableOpacity style={styles.inputContainer} onPress={displayDatepicker}>
        <Ionicons name="calendar-outline" size={24} color="#D3B419" style={styles.icon} />
        <Text style={styles.input}>Select Date of Birth</Text>
     </TouchableOpacity>
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
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
            
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#D3B419" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    
    padding: 20,
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
    borderWidth: 1,
    borderColor: '#D3B419',
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
 
  input: {
    backgroundColor: 'transparent',
    color: '#fff',
    padding: 8,
    fontSize: 15,
    fontWeight: '400',
    borderRadius: 5,

   
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

export default SignUp;