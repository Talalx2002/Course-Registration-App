import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getData } from '../Store';

const HomeScreen = () => {
  const [registeredCourses, setRegisteredCourses] = React.useState();

  useEffect(() => {
    // Handle the registration logic here
    const getRegisteredCourses = async () => {
      let stdName = await getData('currentStudent');
      let std = await getData(stdName);
      setRegisteredCourses(std.courses);
    };
    getRegisteredCourses();
  }
  , []);
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Registered Courses</Text>
    {
      
      registeredCourses?.length > 0 ?
      <FlatList
        data={registeredCourses}
        renderItem={({item}) => (
          <View style={styles.courseItem}>
            <Text
            style={styles.courseId}
            >Course ID: {item.courseId}</Text>
            <Text
            style={styles.courseTitle}
            >Course Title: {item.courseTitle}</Text>
          </View>
        )}
        keyExtractor={(item) => item.courseId}
      /> :
      <Text>No registered courses</Text>


    }
    {
      console.log(registeredCourses)
    }
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  courseItem: {
    // give nice colorfull border to each course item
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    // give nice blue bg color to each course item
    backgroundColor: '#87CEEB',
  },
  courseId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 16,
  }
});

export default HomeScreen
