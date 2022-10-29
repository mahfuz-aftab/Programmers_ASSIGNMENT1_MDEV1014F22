import React from 'react';
import { Text, View, SafeAreaView, Pressable } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';


const HomePage = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={globalStyles.wrapper}>
            <View>
                <Text style={globalStyles.appLebelTitleText}>Welcome to Barrie Newz App</Text>
                <Text style={globalStyles.appLebelTagLine}>The Ultimate Daily Newz Collection Around the World</Text>
            </View>

            <Pressable onPress={() => navigation.navigate('All Newz')} style={[globalStyles.boxStyle, globalStyles.boxNewz]}>
                <View style={globalStyles.defaultContainerHome}>
                    <Text style={globalStyles.defaultContainerHomeText}>All Newz</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Newz Channels')} style={[globalStyles.boxStyle, globalStyles.boxNewzChannels]}>
                <View style={globalStyles.defaultContainerHome}>
                    <Text style={globalStyles.defaultContainerHomeText}>Get All the Newz Channels</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

export default HomePage;