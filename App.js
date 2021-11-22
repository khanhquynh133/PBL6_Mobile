/** @format */

import React from "react";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import HomePageAdmin from "./screens/Admin/HomePageAdmin";
import TotalCompany from "./screens/Admin/TotalCompany";
import Company from "./screens/Admin/Company";
import DetailCompany from "./screens/Admin/DetailCompany";
//import CreatePost from "./screens/HR/CreatePost";

import { DrawerContent } from "./screens/DrawerContent";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
	// const createWelcomeStack = () => (
	// 	<Stack.Navigator
	// 		screenOptions={{
	// 			headerShown: false,
	// 		}}>
	// 		<Stack.Screen name='Home' component={HomePageAdmin}></Stack.Screen>
	// 	</Stack.Navigator>
	// );

	return (
		//<PaperProvider>
		// <NavigationContainer>
		// 	<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
		// 		<Drawer.Screen name='HPA' component={Company} />
		// 		{/* <Drawer.Screen name='Company' component={Company} /> */}
		// 	</Drawer.Navigator>
		// </NavigationContainer>
		//</PaperProvider>

		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Login' component={Login}></Stack.Screen>
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
