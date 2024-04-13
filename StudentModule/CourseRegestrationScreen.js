import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
} from "react-native";

import { getData, storeData } from "../Store";



const CourseRegestrationScreen = () => {
  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: "1", title: "Mobile Development" },
    { id: "2", title: "Machine Learning" },
    { id: "3", title: "Human Computer Interaction" },
    { id: "4", title: "Software Engineering" },
    { id: "5", title: "Data Science" },
  ];

  const handleCourseSelection = (itemValue, itemIndex) => {
    setSelectedCourse(itemValue);
    const selectedCourseData = courses.find(
      (course) => course.id === itemValue
    );
    setCourseId(selectedCourseData?.id || "");
    setCourseTitle(selectedCourseData?.title || "");
  };

  const handleRegisterCourse = async () => {
    const data = {
      courseId,
      courseTitle,
    };
    let stdName = await getData('currentStudent');
    let std = await getData(stdName);
    console.log(std)
    if (std.courses.find((course) => course.id === courseId)) {
      alert('Already registered for this course');
    }
    else {
      std.courses.push(data);
      console.log(std.courses)
      await storeData(stdName, std);
      alert('Course registered successfully');
    }

    }


  
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Course Registration Screen</Text>

      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={handleCourseSelection}
      >
        <Picker.Item label="Select Course ID" value={null} />
        {courses.map((course) => (
          <Picker.Item key={course.id} label={course.id} value={course.id} />
        ))}
      </Picker>

      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={handleCourseSelection}
      >
        <Picker.Item label="Select Course Title" value={null} />
        {courses.map((course) => (
          <Picker.Item key={course.id} label={course.title} value={course.id} />
        ))}
      </Picker>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: courseId && courseTitle ? "skyblue" : "lightgray",
          },
        ]}
        disabled={!courseId || !courseTitle}
        onPress={handleRegisterCourse}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  picker: {
    height: 50,
    width: "30%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    width: "10%",
    alignItems: "center",
    marginRight: 363, 
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});
export default CourseRegestrationScreen;
