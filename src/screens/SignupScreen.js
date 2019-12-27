import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign up for Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign up"
				onSubmit={signup}
			/>
			<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
				<Spacer>
					<Text style={styles.link}>Already have an account? Sign in now!</Text>
				</Spacer>
			</TouchableOpacity>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		header: null
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 15
	},
	link: {
		color: 'blue'
	}
});

export default SignupScreen;
