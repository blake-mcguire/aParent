import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/NavBar'; 

function StudentBoardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Student Board Screen</Text>
      <NavBar navigation={navigation} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60, 
  },
  text: {
    fontSize: 24,
  },
});

export default StudentBoardScreen;