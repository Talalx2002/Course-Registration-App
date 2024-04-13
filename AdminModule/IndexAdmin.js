import 'react-native-gesture-handler';
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StudentRegistrationScreen from "./StudentRegistrationScreen";
import SearchScreen from "./SearchScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator  initialRouteName="SearchStudent">
      <Drawer.Screen name="SearchStudent" component={SearchScreen} />
      <Drawer.Screen
        name="studentRegistration"
        component={StudentRegistrationScreen}
      />
    </Drawer.Navigator>
  );
}
