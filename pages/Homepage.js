import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigation = useNavigation();

  const Test = async () => {
     // code to select an image from the device's camera roll or camera
     // set the selected image as the profile picture source
     navigation.navigate('Profil');
   };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>


      <TouchableOpacity onPress={Test} style={{ marginTop: 20, marginBottom: 20 }}>
            <Text  style={{ color: 'black', fontWeight: 'bold' }}>GO TO EDIT PROFIL </Text>
            </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});