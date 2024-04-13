import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SearchScreen = () => {

  const [searchByCourseId, setSearchByCourseId] = useState('');
  const [searchByCourseTitle, setSearchByCourseTitle] = useState('');

  const [results, setResults] = useState();

  const handleSearch = async() => {
    // Handle the search logic here
    const data = await getData(currentStudent);
    const std = await getData(stdName);
    const courses = std.courses;

    setResults([...results, courses]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Courses</Text>

      <View style={styles.inputContainer}>
        <Text>Search by Course ID:</Text>
        <TextInput style={styles.input} placeholder="Enter Course ID" />
      </View>

      <View style={styles.inputContainer}>
        <Text>Search by Course Title:</Text>
        <TextInput style={styles.input} placeholder="Enter Course Title" />
      </View>

      <TouchableOpacity style={styles.searchButton}
      onPress={handleSearch}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {/* Display Search Results */}
      <View style={styles.resultsContainer}>
        {/* Placeholder for displaying search results */}
        <Text style={styles.resultsText}>Search Results</Text>
        {
          results?.map((item, index) => (
            <View key={index} style={styles.resultItem}>
              <Text>Course ID: {item.courseId}</Text>
              <Text>Course Title: {item.courseTitle}</Text>
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
    width: '30%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  searchButton: {
    backgroundColor: 'skyblue',
    padding: 15,
    borderRadius: 5,
    width: '10%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  resultsContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '30%',
    minHeight: 100,
  },
  resultsText: {
    textAlign: 'center',
  },
});

export default SearchScreen
