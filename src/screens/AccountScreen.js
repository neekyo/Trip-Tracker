import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={styles.header}>My Account</Text>
			<Spacer>
				<Button title="Sign out of Tracker" onPress={signout} />
			</Spacer>
		</SafeAreaView>
	);
};

AccountScreen.navigationOptions = {
	title: 'Account',
	tabBarIcon: <FontAwesome name="gear" size={20} />
};

const styles = StyleSheet.create({
	header: {
		fontSize: 26,
		alignSelf: 'center',
		marginBottom: 5,
		marginTop: 5
	}
});

export default AccountScreen;
