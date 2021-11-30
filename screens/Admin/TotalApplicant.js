/** @format */

import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import COLORS from "../../consts/colors";
import ChartCompany from "../../src/components/ChartCompany";
import ChartApplicant from "../../src/components/ChartApplicant";

const TotalCompany = ({ navigation, route }) => {
	return (
		<View style={styles.page}>
			<View style={styles.locationContainer}>
				<Text style={styles.textTotal}>TOTAL APPLICANT</Text>
			</View>
			<ChartApplicant />
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
		color: COLORS.blue,
	},

	bottomCard: {
		backgroundColor: COLORS.blue,
		height: 160,
		marginTop: 50,
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
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		color: "white",
		fontSize: 16,
	},

	button: {
		borderRadius: 15,
		borderColor: "white",
		borderWidth: 1,
		marginHorizontal: 30,
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignItems: "center",
		marginTop: 50,
		marginBottom: 5,
	},
	btnText: {
		fontFamily: "Sans-serif",
		fontWeight: "bold",
		color: "yellow",
		fontSize: 16,
		fontWeight: "bold",
	},
});
export default TotalCompany;
