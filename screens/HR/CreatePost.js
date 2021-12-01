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
import Textarea from "react-native-textarea";
import COLORS from "../../consts/colors";
import DropDownPicker from "react-native-dropdown-picker";
const CreatePost = () => {
	const [selectedLanguage, setSelectedLanguage] = useState("java");
	const [selectedLevel, setSelectedLevel] = useState("intern");
	const [selectedTest, setSelectedTest] = useState("ReactJS Intern");
	const [title, onChangeTitle] = React.useState("");
	const [content, onChangeContent] = React.useState("");
	const [number, onChangeNumber] = React.useState("");
	return (
		<View style={styles.container}>
			<View style={styles.def}>
				<Text style={styles.text}>Tilte</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChangeTitle}
					value={title}
					placeholder='Title'
				/>
			</View>
			<View style={styles.abc}>
				<Text style={styles.text}>Language</Text>
				<Picker
					selectedValue={selectedLanguage}
					style={{ height: 40, width: 160, marginRight: 20 }}
					onValueChange={(itemValue, itemIndex) =>
						setSelectedLanguage(itemValue)
					}>
					<Picker.Item label='Java' value='java' />
					<Picker.Item label='.Net' value='net' />
					<Picker.Item label='Python' value='py' />
					<Picker.Item label='ReactJs' value='reactjs' />
					<Picker.Item label='Angular' value='angular' />
				</Picker>
				<Text style={styles.text}>Level</Text>
				<Picker
					selectedValue={selectedLevel}
					style={{ height: 40, width: 160 }}
					onValueChange={(itemValue, itemIndex) => setSelectedLevel(itemValue)}>
					<Picker.Item label='Fresher' value='fresher' />
					<Picker.Item label='Junior' value='junior' />
					<Picker.Item label='Senior' value='senior' />
				</Picker>
			</View>
			<View style={styles.abc}>
				<Text style={styles.text}>Test</Text>
				<Picker
					selectedValue={selectedTest}
					style={{ height: 40, width: 160 }}
					onValueChange={(itemValue, itemIndex) => setSelectedTest(itemValue)}>
					<Picker.Item label='ReactJS Intern' value='reactjsintern' />
					<Picker.Item label='NET Intern' value='netintern' />
					<Picker.Item label='Java Intern' value='javaintern' />
				</Picker>

				<Text
					style={{
						fontFamily: "Sans-serif",
						color: COLORS.blue,
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 10,
						marginLeft: 4,
					}}>
					Number
				</Text>
				<TextInput
					style={{ height: 40, marginBottom: 20, padding: 4, margin: 8 }}
					onChangeText={onChangeNumber}
					value={number}
					placeholder='Number of recruits'
				/>
			</View>
			<View
				style={{
					flexDirection: "row",
				}}>
				<Text style={styles.text}>Content</Text>
				<Textarea
					containerStyle={styles.textareaContainer}
					style={styles.textarea}
					onChangeText={onChangeContent}
					maxLength={500}
					value={content}
					placeholder={"Content"}
					placeholderTextColor={"#c7c7c7"}
					underlineColorAndroid={"transparent"}
				/>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.textBtn}>SAVE</Text>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
		marginTop: 20,
	},
	abc: {
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 20,
	},
	def: {
		alignItems: "center",
		flexDirection: "row",
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
		padding: 10,
		margin: 12,
	},
	textareaContainer: {
		height: 200,
		padding: 80,
		backgroundColor: "#F5FCFF",
	},
	textarea: {
		height: 40,
		fontSize: 14,
		color: "#333",
	},
});
export default CreatePost;
