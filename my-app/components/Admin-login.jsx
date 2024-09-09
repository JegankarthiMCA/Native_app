import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

const Studentlogin = ({ navigation }) => {
  const goToReg = () => {
    navigation.navigate('Register')
  }

  const dashBoard = () => {
    navigation.navigate('StudentDashBoard')
  }

  return (
    <KeyboardAvoidingView enabled={true} behavior={'padding'}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Welcome!</Text>
              <Text style={styles.loginSubText}>Login in to continue</Text>
            </View>
            <View style={styles.inputConatainer}>
              <View>
                <View style={styles.inputText}>
                  <Fontisto name="email" size={24} color="black" />
                  <Text style={styles.inputTextContent}>Email</Text>
                </View>
                <TextInput style={styles.input} />
              </View>

              <View>
                <View style={styles.inputText}>
                  <AntDesign name="lock" size={24} color="black" />
                  <Text style={styles.inputTextContent}>Password</Text>
                </View>
                <TextInput
                  secureTextEntry
                  style={styles.input}
                />
              </View>

              <View>
                <Pressable
                  style={styles.button}
                  onPress={dashBoard} // Correctly handle the press event here
                >
                  <Text style={styles.buttonText}>Login</Text>
                </Pressable>
              </View>
            </View>

            <View>
              <Text onPress={goToReg} style={styles.navText}>Create an Account! Register here</Text>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/login.jpg')}
                style={styles.image}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Studentlogin

const styles = StyleSheet.create({
  imageContainer: {
    width: 200,
    height: 200,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  image: {
    width: '50%',
    height: '50%',
  },
  loginText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginVertical: 5,
  },
  loginSubText: {
    letterSpacing: 1.5,
    fontSize: 16,
  },
  loginContainer: {
    marginVertical: 50,
    marginHorizontal: 22,
  },
  inputConatainer: {
    marginHorizontal: 25,
  },
  input: {
    fontSize: 14,
    borderBottomWidth: 0.5,
    width: 200,
    paddingLeft: 10,
    marginVertical: 8.7,
  },
  inputText: {
    flexDirection: 'row',
  },
  inputTextContent: {
    paddingLeft: 8,
    fontSize: 15,
  },
  button: {
    marginVertical: 10,
    backgroundColor: 'lightgreen',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 3,
    width: 300,
    marginHorizontal: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  navText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'blue',
    marginVertical: 8,
  },
})
