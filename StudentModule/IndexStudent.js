import 'react-native-gesture-handler';
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';
import CourseRegestrationScreen from './CourseRegestrationScreen';

const Drawer = createDrawerNavigator();

 export function IndexStudent() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="CourseRegestrationScreen" component={CourseRegestrationScreen} />
      <Drawer.Screen name="SearchScreen" component={SearchScreen} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
