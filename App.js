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
import DetailCompany from "./screens/Admin/DetailCompany";
import CreatePost from "./screens/HR/CreatePost";
import ListPosts from "./screens/HR/ListPosts";
// import ListInvitations from "./screens/HR/ListInvitations";
import ListApplicants from "./screens/HR/ListApplicants";
import ListTests from "./screens/HR/ListTests";
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
				<Stack.Screen name='Welcome' component={Company} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Register' component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
// screenOptions={{
// 	headerShown: false,
// }}
// screenOptions={{
// 	headerShown: false,
// }}
// drawerContent={(props) => <DrawerContent {...props} />}

// ------------------------
// import * as React from "react";
// import { Button, View, Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// function HomeScreen({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 			<Text>Home Screen</Text>
// 			<Button
// 				title='Go to Details'
// 				onPress={() => navigation.navigate("Details")}
// 			/>
// 		</View>
// 	);
// }

// function DetailsScreen({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 			<Text>Details Screen</Text>
// 			<Button title='Go to Home' onPress={() => navigation.navigate("Home")} />
// 		</View>
// 	);
// }

// const Stack = createStackNavigator();

// function App() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator initialRouteName='Home'>
// 				<Stack.Screen name='Home' component={HomeScreen} />
// 				<Stack.Screen name='Details' component={DetailsScreen} />
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }

// export default App;
