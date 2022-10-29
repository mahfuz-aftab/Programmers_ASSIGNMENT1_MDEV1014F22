import React from 'react';
import { Text, View, SafeAreaView, Pressable, TextInput, Alert } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';


const SignupPage = ({ navigation }: { navigation: any }) => {

  function confirmSignup() {
    Alert.alert(
      "Sign Up Confirmation", "Is your all input correct?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ]
    );
  }

  return (
    <SafeAreaView style={globalStyles.containerCredential}>
      <Text style={globalStyles.formLabel}>Sign Up</Text>
      <View>
        <TextInput placeholder="First Name" style={globalStyles.inputStyle} />
        <TextInput placeholder="Last Name" style={globalStyles.inputStyle} />
        <TextInput placeholder="Email" style={globalStyles.inputStyle} />
        <TextInput secureTextEntry={true} placeholder="Password" style={globalStyles.inputStyle} />
      </View>

      <Pressable style={globalStyles.buttonSignup} onPress={confirmSignup}>
        <Text style={globalStyles.text}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SignupPage;
