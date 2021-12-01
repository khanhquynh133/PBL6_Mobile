/** @format */

import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import {
	View,
	Button,
	Text,
	TextInput,
	StyleSheet,
	Picker,
	TouchableOpacity,
} from "react-native";
import COLORS from "../../consts/colors";
import DropDownPicker from "react-native-dropdown-picker";
const ListTests = () => {
	const [selectedStatus, setSelectedStatus] = useState("Able");
	const [kw, onChangeKW] = React.useState("");
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={onChangeKW}
				value={kw}
				placeholder='Key Words'
			/>
			<Text>Status</Text>
			<Picker
				selectedValue={selectedStatus}
				style={{ height: 40, width: 160 }}
				onValueChange={(itemValue, itemIndex) => setSelectedStatus(itemValue)}>
				<Picker.Item label='Disable' value='disable' />
			</Picker>

			<TouchableOpacity style={styles.button}>
				<Button style={styles.textBtn} title='INVITE ALL'></Button>
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
});
export default ListTests;
