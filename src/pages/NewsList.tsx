import React from 'react';
import { Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const NewsList = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={globalStyles.wrapper}>
            <ScrollView>
              <View>
                  <Text style={globalStyles.title}>November 01, 2022</Text>
              </View>

              <Pressable onPress={() => navigation.navigate('Newz Details')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.defaultContainerNewz}>
                      <Text style={globalStyles.defaultContainerNewzText}>GC MDEV Meet 2022</Text>
                      <Text style={globalStyles.defaultContainerNewzLorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ..</Text>
                  </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Newz Details')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.defaultContainerNewz}>
                      <Text style={globalStyles.defaultContainerNewzText}>React Native Workshop at GC</Text>

                      <Text style={globalStyles.defaultContainerNewzLorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ..</Text>
                  </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Newz Details')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.defaultContainerNewz}>
                      <Text style={globalStyles.defaultContainerNewzText}>New Playground Opening in Barrie</Text>
                      <Text style={globalStyles.defaultContainerNewzLorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ..</Text>
                  </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Newz Details')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.defaultContainerNewz}>
                      <Text style={globalStyles.defaultContainerNewzText}>Boxing Day 2022</Text>
                      <Text style={globalStyles.defaultContainerNewzLorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ..</Text>
                  </View>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Newz Details')} style={[globalStyles.boxStyle]}>
                  <View style={globalStyles.defaultContainerNewz}>
                      <Text style={globalStyles.defaultContainerNewzText}>Hocky Tournament in Barrie</Text>
                      <Text style={globalStyles.defaultContainerNewzLorem}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ..</Text>
                  </View>
              </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewsList;
