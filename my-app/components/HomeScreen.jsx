import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import ParallaxScrollView from './ParallaxScrollView';

export default function HomeScreen({ navigation }) {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '', dark: '#fff' }}
      headerImage={
        <Image
          source={require('../assets/images/firstpic.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> ROOM BOOKING APP</Text>
      </View>
      <View style={styles.centeredView}>
        <Image
          source={require('../assets/images/thirdpic.png')}
          style={styles.additionalImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Admin Login" color="#0000FF" onPress={() => navigation.navigate('Login', { role: 'admin' })} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="User Login" color="green" onPress={() => navigation.navigate('Login', { role: 'user' })} />
        </View>
      
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  reactLogo: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 60,
  },
  additionalImage: {
    height: 200,
    width: 300,
    borderRadius: 20,
    marginVertical: 20,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    gap: 20,
    marginTop: 16,
    alignItems: 'center', // Center the buttons horizontally
  },
  buttonWrapper: {
    width: 150, // Set a specific width for the buttons
  },
});
