import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Chip } from "react-native-paper";
import Register from "./src/components/register.js";

export default function App() {

	const [showRegister, setShowRegister] = useState(false);

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#cf2828",
			}}
		>
			<View style={styles.container}>
				<Chip elevation={5} onPress={() => setShowRegister(true)}>
					Registro
				</Chip>
				<Chip elevation={5} onPress={() => console.log("Pressed")}>
					Principal
				</Chip>
				<Chip elevation={5} onPress={() => console.log("Pressed")}>
					Principal
				</Chip>
			</View>
			
			{showRegister && <Register />}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
