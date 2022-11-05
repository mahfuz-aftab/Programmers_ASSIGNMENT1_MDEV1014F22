import React from 'react';
import { Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';


const Home = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={globalStyles.wrapper}>
            <ScrollView>
                <View>
                  <Text style={globalStyles.title}>Welcome to Barrie Newz App</Text>
                  <Text style={globalStyles.subTitle}>The Ultimate Daily Newz Collection Around the World</Text>
                </View>

                <Pressable onPress={() => navigation.navigate('All Newz')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.homeBox}>
                    <Text style={globalStyles.homeBoxText}>All Newz</Text>
                  </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Newz Channels')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.homeBox}>
                    <Text style={globalStyles.homeBoxText}>Get All the Newz Channels</Text>
                  </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
