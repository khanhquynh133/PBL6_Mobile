/** @format */

import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import ChartCompany from "../../src/components/ChartCompany";

const TotalCompany = ({ navigation, route }) => {
	return (
		<View style={styles.page}>
			<View style={styles.locationContainer}>
				<Text style={styles.textTotal}>TOTAL COMPANY</Text>
			</View>

			<View style={styles.bottomCard}>
				<View style={styles.bottomCol}>
					<Text style={styles.textYear}>In 2021</Text>
				</View>

				<View style={styles.button}>
					<Text style={styles.btnText}>BACK</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	page: {
		backgroundColor: "#FFF",
		flex: 1,
	},
	headContainer: {
		marginHorizontal: 20,
		flexDirection: "row",
		marginTop: 40,
	},
	humContainer: {
		width: "50%",
	},
	hum: {
		marginTop: -20,
		marginLeft: 5,
	},
	profileContainer: {
		width: "50%",
		alignItems: "flex-end",
	},
	profile: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},

	textLinear: {
		color: "#FFF",
		fontSize: 12,
		fontWeight: "bold",
	},
	textLogarthimic: {
		color: "#b8b8aa",
		fontWeight: "bold",
		fontSize: 12,
		marginLeft: 15,
	},
	locationContainer: {
		alignSelf: "center",
		flexDirection: "row",
		paddingHorizontal: 30,
		marginTop: 40,
		alignItems: "center",
	},
	textTotal: {
		fontWeight: "bold",
		fontSize: 16,
		color: "red",
	},

	bottomCard: {
		backgroundColor: "#1c2732",
		height: 500,
		marginTop: 100,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	bottomCol: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		marginTop: 20,
	},
	textYear: {
		color: "#FFF",
		fontSize: 12,
		fontWeight: "bold",
	},

	button: {
		borderRadius: 15,
		borderColor: "red",
		borderWidth: 1,
		marginHorizontal: 30,
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignItems: "center",
		marginTop: 50,
		marginBottom: 5,
	},
	btnText: {
		color: "red",
		fontSize: 16,
		fontWeight: "bold",
	},
});
export default TotalCompany;
