import React from 'react';
import { Text, TextInput, View, SafeAreaView, Pressable } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const LoginPage = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={globalStyles.containerCredential}>
            <Text style={globalStyles.appLabel}>Barrie Newz</Text>
            <View>
                <TextInput placeholder="Email" style={globalStyles.inputStyle} />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={globalStyles.inputStyle}
                />
            </View>
            <Pressable style={globalStyles.buttonLogin} onPress={() => navigation.navigate('Home')}>
                <Text style={globalStyles.text}>Sign In</Text>
            </Pressable>
            <Text onPress={() => navigation.navigate('Sign Up')}>Don't have an account? Sign Up Now</Text>
        </SafeAreaView>
    )
}

export default LoginPage;
