/** @format */

import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default () => {
	const [email, onChangeEmail] = React.useState("");
	const [pass, onChangePass] = React.useState("");

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/images/logo.png")}
			/>
			<Text style={styles.login}>LOGIN</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeEmail}
				value={email}
				placeholder='email'
				keyboardType='numeric'
			/>
			<TextInput
				secureTextEntry={true}
				style={styles.input}
				onChangeText={onChangePass}
				value={pass}
				placeholder='password'
				keyboardType='numeric'
			/>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.textBtn}>CONTINUE</Text>
			</TouchableOpacity>
			<Text style={styles.baseText}>Forgot Password?</Text>
			<Text style={styles.baseText}>Dont have account? Create an account</Text>
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
		width: 60,
		height: 60,
		marginBottom: 20,
	},
	login: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		fontSize: 30,
		color: "#426EB4",
		marginBottom: 25,
	},
	baseText: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		fontSize: 10,
		color: "#426EB4",
		marginTop: 10,
	},
	input: {
		height: 40,
		margin: 16,
		borderBottomWidth: 1,
		padding: 20,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#426EB4",
		padding: 10,
		height: 35,
		width: 130,
		borderRadius: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 30,
		marginBottom: 15,
	},
	textBtn: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		fontSize: 16,
		color: "#FFF",
		align: "center",
	},
});
