import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import AdminLogin from "./AdminModule/AdminLoginScreen";
import StudentRegistration from "./AdminModule/StudentRegistrationScreen";
import SearchStudent from "./AdminModule/SearchScreen";
import IndexAdmin from "./AdminModule/IndexAdmin";

import StudentLogin from "./StudentModule/StudentLoginScreen";
import HomeScreen from "./StudentModule/HomeScreen";
import CourseRegistration from "./StudentModule/CourseRegestrationScreen";
import SearchCourse from "./StudentModule/SearchScreen";
import {IndexStudent} from "./StudentModule/IndexStudent";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown:false }}>
        <Tab.Screen name="Admin" component={AdminStackScreen} />
        <Tab.Screen name="Student" component={StudentStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const AdminStack = createNativeStackNavigator();
function AdminStackScreen() {
  return (
    <AdminStack.Navigator >
      <AdminStack.Screen name="AdminLogin" component={AdminLogin} options={{headerShown : false}}/>
      <AdminStack.Screen
        name="StudentRegistration"
        component={StudentRegistration}
      />
      <AdminStack.Screen name="SearchStudent" component={SearchStudent} />
      <AdminStack.Screen name="IndexAdmin" component={IndexAdmin} options={{headerShown : false}} />
    </AdminStack.Navigator>
  );
}
const StudentStack = createNativeStackNavigator();
function StudentStackScreen() {
  return (
    <StudentStack.Navigator>
      <StudentStack.Screen name="StudentLogin" component={StudentLogin} options={{headerShown : false}} />
      <StudentStack.Screen name="Home" component={HomeScreen} />
      <StudentStack.Screen
        name="CourseRegistration"
        component={CourseRegistration}
      />
      <StudentStack.Screen name="SearchCourse" component={SearchCourse} />
      <StudentStack.Screen name="IndexStudent" component={IndexStudent} options={{headerShown : false}} />
    </StudentStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
