import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const HeaderPage = () => {
    return (
        <SafeAreaView style={globalStyles.wrapperHeader}>
            <Text style={globalStyles.textStyle}>Barrie Newz</Text>
        </SafeAreaView>
    )
}

export default HeaderPage;

