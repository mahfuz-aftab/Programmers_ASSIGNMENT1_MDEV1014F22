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
      <View style={globalStyles.articleBox}>
        <Text style={globalStyles.articleTitle}>{title}</Text>
        <Text style={globalStyles.articleText}>{content}</Text>
      </View>
    </Pressable>
  );
}

export default NewsCard;
