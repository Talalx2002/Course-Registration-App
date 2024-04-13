  import React from "react";
  import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

  const AdminLoginScreen = ({navigation}) => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState();
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Admin Login Screen</Text>
        <Text>UserName</Text>
        <TextInput style={styles.input} placeholder="Enter UserName" value={userName} onChangeText={setUserName} />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.userBtn, { backgroundColor: userName && password ? 'skyblue' : 'lightgray' }]} disabled={userName == "admin" && password == 123 ? false : true} onPress={() => navigation.navigate('IndexAdmin')}>
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
      width: "90%",
      paddingLeft: 715,
    },
    userBtn: {
      height: 50,
      width: '10%',
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
    },
    btnText: {
      fontSize: 18,
      textAlign: "center",
      padding: 10,
    },
  });

  export default AdminLoginScreen;
