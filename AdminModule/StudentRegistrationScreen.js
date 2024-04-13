import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { storeData   } from '../Store';

const StudentRegistrationScreen = ({navigation}) => {
  const [regNumber, setRegNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Handle the registration logic here
    const data = {
      regNumber,
      studentName,
      password,
      courses: [],
    };
    await storeData(regNumber, data);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Registration Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Registration Number"
        value={regNumber}
        onChangeText={setRegNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '30%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
export default StudentRegistrationScreen
