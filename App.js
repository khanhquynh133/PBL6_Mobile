/** @format */

import React from "react";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import HomePageAdmin from "./screens/Admin/HomePageAdmin";
import TotalCompany from "./screens/Admin/TotalCompany";
import TotalApplicant from "./screens/Admin/TotalApplicant";
import TotalHR from "./screens/Admin/TotalHR";
import Company from "./screens/Admin/Company";
// import DetailCompany from "./screens/Admin/DetailCompany";
// import CreatePost from "./screens/HR/CreatePost";
// import ListPosts from "./screens/HR/ListPosts";
// import ListInvitations from "./screens/HR/ListInvitations";
// import ListApplicants from "./screens/HR/ListApplicants";
// import ListTests from "./screens/HR/ListTests";
//import Example from "./screens/HR/Example";

import { DrawerContent } from "./screens/DrawerContent";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "./screens/Admin/HomePageAdmin";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName='Welcome'>
				<Stack.Screen name='Welcome' component={Welcome} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
