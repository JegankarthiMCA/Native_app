import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

function RegisterScreen({ route, navigation }) {
  const { role } = route.params || 'user'; // Default role if not provided
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleRegister = () => {
  //   if (!email || !password) {
  //     // Show an alert if either email or password is missing
  //     Alert.alert('Error', 'Please fill in both email and password');
  //     return;
  //   }

  //   // If email and password are both provided
  //   console.log('Register:', role, email, password);
  //   // Add actual register logic here (e.g., API call to register user)
    
  //   // Simulate a successful registration (remove this when adding actual register logic)
  //   setTimeout(() => {
  //     // Navigate to the Login page after successful registration
  //     navigation.navigate('Login', { role });
  //   }, 1000); // Simulating network delay
  // };
  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both email and password');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8800/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });
  
      const data = await response.json();
      if (response.status === 200) {
        Alert.alert('Success', data.msg);
        navigation.navigate('Login', { role });
      } else {
        Alert.alert('Error', data.msg);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
      </View>

      <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login', { role })}>
        <Text style={styles.signUpText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 10,
  },
  alreadyHaveAccountText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  signUpText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default RegisterScreen;