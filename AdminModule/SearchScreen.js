import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getData } from '../Store';

const SearchScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [reults, setResults] = useState([]);

  const handleSearch = async () => {
    // Handle the search logic here
    const data = await getData(regNumber);
    if (data.studentName === name || data.regNumber === regNumber) {
      setResults([QWreults, data]);
    } else {
      alert('No Results Found');
    }
  };

  useEffect(() => {
    handleSearch();
  }, [name, regNumber]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
      <View style={styles.searchContainer}>
        <Text style={styles.label}>Search By:</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Name"
        value={name}
        onChangeText={setName}
         />
        <TextInput 
        style={styles.input}
         placeholder="Registration Number"
          value={regNumber}
          onChangeText={setRegNumber}
          />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultTitle}>Search Results:</Text>
        {
          reults.map((item, index) => (
            <View key={index} style={styles.resultItem}>
              <Text>Name: {item.studentName}</Text>
              <Text>Registration Number: {item.regNumber}</Text>
            </View>
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    width: '30%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  resultContainer: {
    width: '30%',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultItem: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: '30%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default SearchScreen;
