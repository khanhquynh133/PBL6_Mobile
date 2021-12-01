/** @format */

import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Picker,
	TouchableOpacity,
} from "react-native";
import COLORS from "../../consts/colors";
import DropDownPicker from "react-native-dropdown-picker";
const ListPosts = () => {
	const [kw, onChangeKW] = React.useState("");
	const [selectedStatus, setSelectedStatus] = useState("Able");

	return (
		<View style={styles.container}>
			<View style={styles.abc}>
				<Text style={styles.text}>KeyWord</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={onChangeKW}
					value={kw}
					placeholder='Keyword'
				/>
				<Text style={styles.text}>Status</Text>
				<Picker
					selectedValue={selectedStatus}
					style={{ height: 40, width: 160 }}
					onValueChange={(itemValue, itemIndex) =>
						setSelectedStatus(itemValue)
					}>
					<Picker.Item label='Fresher' value='fresher' />
					<Picker.Item label='Junior' value='junior' />
					<Picker.Item label='Senior' value='senior' />
				</Picker>
			</View>
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
	abc: {
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 20,
	},
	text: {
		fontFamily: "Sans-serif",
		color: COLORS.blue,
		fontSize: 16,
		fontWeight: "bold",
		marginRight: 10,
	},
	input: {
		height: 40,
		marginBottom: 20,
		padding: 20,
		margin: 12,
	},
});
export default ListPosts;
