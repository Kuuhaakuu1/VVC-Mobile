import React from "react";
import { View, Image, ScrollView, StyleSheet,Button } from "react-native";
import { Card, Title, Text } from "react-native-paper";

const Homepage = () => {
  return (
    <ScrollView style={{backgroundColor: '#212832'}}>
      
      

      <Card style={styles.container}>
      <Card.Content style={styles.cardContent}>
          <Title style={styles.cardTitle}>Our Team Members </Title>
        </Card.Content>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 550}}>
          <Card style={styles.card}>
            <Card.Cover
              source={require("../assets/omar.jpg")}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.teamTitle}>Temsamani Omar</Title>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Scrum Master CTO</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>omartemsam@gmail.com</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={require("../assets/saad.jpg")}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.teamTitle}>Elgbrouri Saad</Title>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Backend Developer</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>elgbouri.saa@gmail.com</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={require("../assets/ranya.jpg")}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.teamTitle}>Taoui Ranya</Title>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Ui/Ux Designer</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>ranyataoui@outlook.com</Text>
            </Card.Content>
            
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={require("../assets/hamza.jpg")}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.teamTitle}>Zerouali Hamza</Title>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Frontend Developer</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>H.zerouali04@gmail.com</Text>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={require("../assets/Anas.jpg")}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.teamTitle}>Zakari Anas</Title>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Backend Developer</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Zakari.anas2@gmail.com</Text>
            </Card.Content>
            
          </Card>
          <Card style={styles.card}>
            <Card.Cover
              source={require("../assets/soufiane.jpg")}
              style={styles.cardCover}
            />
            <Card.Content style={styles.cardContent}>
              <Title style={styles.teamTitle}>Oukattou Soufiane</Title>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Lead Developer</Text>
            </Card.Content>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.subtitle}>Soufianouk@gmail.com</Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </Card>
    </ScrollView>
  );
};



const HomepageScreen = ({ navigation }) => {
  return (
    <>
      <Homepage navigation={navigation} />
      <Button
        title="Go to Profil"
        onPress={() => navigation.navigate("Profil")}
         // Gold color
        style={styles.GoProfile}
        color="#D3B419" // Optional custom style for the button
      />
    </>
  );
};

export default HomepageScreen;


const styles = StyleSheet.create({
  GoProfile: {
    backgroundColor: "#D3B419", // Gold color
    color: "#FFFFFF", // White color
    // Add any additional styles for the button here
  },
  container: {
    flex: 1,
    
    padding: 16,
   
    backgroundColor: "#212832",
  },
  card: {
    
    height: 300,
    margin: 16,
    borderRadius: 8,
    elevation: 4, // for shadow effect on Android
    shadowColor: "#000", // for shadow effect on iOS
    shadowOffset: { width: 0, height: 2 }, // for shadow effect on iOS
    shadowOpacity: 0.2, // for shadow effect on iOS
    shadowRadius: 4, // for shadow effect on iOS
    backgroundColor: "#454545",
  },
  cardCover: {
    height: 300,
    width: 200,
    
  },
  cardContent: {
    padding: 7,
    
  },
  cardTitle: {
    marginTop: 50,
    marginBottom: 70,
    fontSize: 20,
    fontWeight: "bold",
    color: "#D3B419",
    textAlign: "center",
  },
  teamTitle: {
    
    fontSize: 20,
    fontWeight: "bold",
    color: "#D3B419",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
 
});
