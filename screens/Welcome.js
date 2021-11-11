/** @format */
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Button,
} from "react-native";

export default () => {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo.png")} />
			<Text style={styles.hreo}>HREO!</Text>
			<Text style={styles.slogan}>Start your journey with us</Text>

			<TouchableOpacity
				style={styles.buttonLG}
				onPress={() => navigation.navigate("Login")}>
				<Text style={styles.textbtn}>LOGIN</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonR}
				onPress={() => navigation.navigate("Register")}>
				<Text style={styles.textbtn}>REGISTER</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E0FFFF",
		alignItems: "center", //giữa trang
		justifyContent: "center",
	},
	logo: {
		width: 80,
		height: 80,
		marginBottom: 10,
	},
	hreo: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		fontSize: 20,
		color: "#103667",
		marginBottom: 10,
	},
	textbtn: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		fontSize: 15,
		color: "#FFF",
	},
	slogan: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		fontSize: 13,
		color: "#184785",
		marginBottom: 120,
	},
	buttonLG: {
		alignItems: "center",
		backgroundColor: "#1874CD",
		padding: 10,
		height: 35,
		width: 150,
		borderRadius: 20,
	},
	buttonR: {
		alignItems: "center",
		backgroundColor: "#205AA7",
		padding: 10,
		height: 35,
		width: 150,
		borderRadius: 20,
		marginTop: 20,
	},
});
