/** @format */

import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ImageBackground,
	ScrollView,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Cards from "../../components/Cards";

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../../assets/logo.png")} />
				<Text style={styles.textDash}>HREO DASH</Text>
				<ScrollView
					style={{ marginTop: 30 }}
					showsHorizontalScrollIndicator={false}
					horizontal>
					<Cards
						onPress={() => this.props.navigation.navigate("Detail")}
						icon='person-outline'
						title='COMPANY'
						number='1101'
					/>
					<Cards
						onPress={() => this.props.navigation.navigate("Detail")}
						icon='person-outline'
						title='APPLICANTS'
						number='1101'
					/>
					<Cards
						onPress={() => this.props.navigation.navigate("Detail")}
						icon='badge-account-outline'
						title='HUMAN RESOURCES'
						number='1111'
					/>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E0FFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	cardContainer: {
		height: 150,
		width: 320,
		alignSelf: "center",
		backgroundColor: "#6A706E",
		borderRadius: 30,
	},
	card: {
		height: 150,
		width: 260,
		paddingTop: 20,
		paddingHorizontal: 30,
		backgroundColor: "#2b3240",
		borderRadius: 30,
		flexDirection: "row",
	},
	title: {
		color: "#2b3240",
		width: 100,
		fontSize: 12,
		fontWeight: "bold",
	},
	number: {
		color: "#FFF",
		width: 100,
		fontSize: 22,
		fontWeight: "bold",
		marginTop: -10,
	},
	col: {
		flexDirection: "row",
	},
	textDash: {
		color: "#2b3240",
		fontSize: 30,
		alignSelf: "center",
		marginTop: 10,
		fontWeight: "bold",
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 70,
	},
});
