import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { getData,storeData } from "../Store";

const StudentLoginScreen = ({navigation}) => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState();

  const handleLoginClick = async () => {
    // Handle the login logic here
    const data = await getData(userName);
    if (data.password === password) {
      await storeData('currentStudent', userName);
      navigation.navigate('IndexStudent');
    } else {
      alert('Invalid Credentials');
    }
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Stud
      ent Login Screen</Text>
      <Text>UserName</Text>
      <TextInput style={styles.input} placeholder="Enter Registration" 
      value={userName}
      onChangeText={setUserName}
        />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.userBtn} onPress={handleLoginClick}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    alignContent: "center",
  
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    width: "15%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderWidth: 1, // Adding a border for visual clarity
    borderColor: "#ccc", // Border color
    borderRadius: 5, // Border radius for rounded corners
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingLeft: 715,
  },
  userBtn: {
    backgroundColor: "skyblue",
    padding: 15,
    width: "10%",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default StudentLoginScreen;
