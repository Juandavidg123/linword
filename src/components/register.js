import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Register = () => {
	return (
		<View>
			<TextInput
				label="Nombre"
				mode="outlined"
				style={styles.input}
			/>
			<TextInput
				label="Apellido"
				mode="outlined"
				style={styles.input}
			/>
			<TextInput
				label="Correo"
				mode="outlined"
				style={styles.input}
			/>
			<TextInput
				label="Contraseña"
				mode="outlined"
				style={styles.input}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginVertical: 10,
		marginHorizontal: 20,
	},
});

export default Register;
