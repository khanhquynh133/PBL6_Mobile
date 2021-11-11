/** @format */

import React from "react";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import HomePageAdmin from "./screens/Admin/HomePageAdmin";
import TotalCompany from "./screens/Admin/TotalCompany";
import Company from "./screens/Admin/Company";
import DetailCompany from "./screens/Admin/DetailCompany";

import { DrawerContent } from "./screens/DrawerContent";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
	const createWelcomeStack = () => (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Home' component={HomePageAdmin}></Stack.Screen>
		</Stack.Navigator>
	);

	return (
		//<PaperProvider>
		<NavigationContainer>
			<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
				<Drawer.Screen name='HPA' children={Company} />
				{/* <Drawer.Screen name='Company' component={Company} /> */}
			</Drawer.Navigator>
		</NavigationContainer>
		//</PaperProvider>

		// <NavigationContainer>
		// 	<Stack.Navigator>
		// 		<Stack.Screen name='Login' component={Login}></Stack.Screen>
		// 	</Stack.Navigator>
		// </NavigationContainer>
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
