import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


function MessagesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages Screen</Text>
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

export default MessagesScreen;