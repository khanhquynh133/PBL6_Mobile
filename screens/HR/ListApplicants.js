/** @format */

import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import {
	ScrollView,
	View,
	SafeAreaView,
	Image,
	Button,
	Text,
	StyleSheet,
	Picker,
	TouchableOpacity,
	CheckBox,
} from "react-native";
import COLORS from "../../consts/colors";
import DropDownPicker from "react-native-dropdown-picker";
const ListApplicants = () => {
	const [selectedStatus, setSelectedStatus] = useState("Able");
	const [selectedTest, setSelectedTest] = useState("Net.Intern");
	const [isSelected, setSelection] = useState(false);

	return (
		<View style={styles.container}>
			<Text>Status</Text>
			<Picker
				selectedValue={selectedStatus}
				style={{ height: 40, width: 160 }}
				onValueChange={(itemValue, itemIndex) => setSelectedStatus(itemValue)}>
				<Picker.Item label='Disable' value='disable' />
			</Picker>
			<Text>Test</Text>
			<Picker
				selectedValue={selectedTest}
				style={{ height: 40, width: 160 }}
				onValueChange={(itemValue, itemIndex) => setSelectedTest(itemValue)}>
				<Picker.Item label='Net.Junior' value='netjunior' />
				<Picker.Item label='Reactjs.Intern' value='reactintern' />
				<Picker.Item label='Java.Fresher' value='javafresher' />
			</Picker>
			<View style={styles.checkboxContainer}>
				<CheckBox
					value={isSelected}
					onValueChange={setSelection}
					style={styles.checkbox}
				/>
				<Text style={styles.label}>Choose All</Text>
			</View>
			<TouchableOpacity style={styles.button}>
				<Button style={styles.textBtn} title='SEND TEST TO ALL'></Button>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
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
		textAlign: "center",
	},
	checkboxContainer: {
		flexDirection: "row",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
	label: {
		margin: 8,
	},
});
export default ListApplicants;
