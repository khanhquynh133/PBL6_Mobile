/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import {
	useTheme,
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	Text,
	TouchableRipple,
	Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{ flexDirection: "row", marginTop: 15 }}>
							<Avatar.Image
								source={require("../assets/images/logo.png")}
								size={50}
							/>
							<View style={{ marginLeft: 15, flexDirection: "column" }}>
								<Title style={styles.title}>Quynh Hoang</Title>
								<Caption style={styles.caption}>Admin</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='home-outline' color={color} size={size} />
							)}
							label='Home Page'
							name='Home'
							onPress={() => {
								props.navigation.navigate("Home");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='office-building' color={color} size={size} />
							)}
							label='Company'
							name='Company'
							onPress={() => {
								props.navigation.navigate("Company");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='account-multiple' color={color} size={size} />
							)}
							label='Applicant'
							onPress={() => {
								props.navigation.navigate("Applicant");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='badge-account-outline' color={color} size={size} />
							)}
							label='Human Resources'
							onPress={() => {
								props.navigation.navigate("HR");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name='tools' color={color} size={size} />
							)}
							label='Setting Account'
							onPress={() => {
								props.navigation.navigate("Setting");
							}}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name='exit-to-app' color={color} size={size} />
					)}
					label='Sign Out'
					onPress={() => {
						signOut();
					}}
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
