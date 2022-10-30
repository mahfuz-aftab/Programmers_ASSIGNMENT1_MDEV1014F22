import React from 'react';
import { Text, View, SafeAreaView, Pressable, Image, ScrollView } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const ChannelList = ({ navigation }: { navigation: any }) => {
  return (
        <SafeAreaView style={globalStyles.wrapper}>
            <ScrollView>
                <View>
                    <Text style={globalStyles.appLabelTitleText}>Get Channel wise Newz</Text>
                </View>
                <View style={globalStyles.wrapperRow}>
                    <Pressable onPress={() => navigation.navigate('All Newz')} style={[globalStyles.defaultContainerChannels]}>
                        <Image style={globalStyles.iconStyle} source={require('./../../assets/app/news.png')} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('All Newz')} style={[globalStyles.defaultContainerChannels]}>
                        <Image style={globalStyles.iconStyle} source={require('./../../assets/app/bbc.svg.png')} />
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('All Newz')} style={[globalStyles.defaultContainerChannels]}>
                        <Image style={globalStyles.iconStyle} source={require('./../../assets/app/cnn.svg.png')} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('All Newz')} style={[globalStyles.defaultContainerChannels]}>
                        <Image style={globalStyles.iconStyle} source={require('./../../assets/app/dw.svg.png')} />
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChannelList;
