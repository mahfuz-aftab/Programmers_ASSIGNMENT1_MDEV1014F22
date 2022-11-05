import React from 'react'

import { Pressable, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

type NewsCardPropTypes = {
  title: string;
  content: string;
  navigation: any;
};

const NewsCard = ({ title, content, navigation }: NewsCardPropTypes) => {
  return (
    <Pressable onPress={() => navigation.navigate('Newz Details')} style={[globalStyles.boxStyle]}>
      <View style={globalStyles.defaultContainerNewz}>
        <Text style={globalStyles.defaultContainerNewzText}>{title}</Text>
        <Text style={globalStyles.defaultContainerNewzLorem}>{content}</Text>
      </View>
    </Pressable>
  );
}

export default NewsCard;
