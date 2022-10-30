import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#A7C7E7',
        padding: 10,
        height: '100%',
    },
    textStyle: {
        color: '#000000',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 10

    },

    /*------*-------*/

    wrapperHeader: {
        backgroundColor: '#7393B3',
        // paddingTop: Platform.OS == 'android' ? 30 : 20,
        paddingTop: '5%'
    },

    containerCredential: {
        flex: 1,
        backgroundColor: '#A7C7E7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    appLabel: {
        fontSize: 30,
        color: '#000000',
    },

    formLabel: {
        fontSize: 20,
        color: '#000000',
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    buttonLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#0047AB',
    },
    buttonSignup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#088F8F',
    },

    /*------*-------*/

    appLabelTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15,
    },

    appLabelTagLine: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
    },
    boxStyle: {
        width: "100%",
        paddingStart: "10%",
        paddingEnd: "10%",
        marginBottom: 15,
    },

    defaultContainerHome: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7393B3',
    },
    defaultContainerHomeText: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    defaultContainerNewz: {
        flex: 1,
        margin: "1%",
        backgroundColor: '#5F9EA0',
    },
    defaultContainerNewzText: {
        color: '#00008B',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '5%'
    },
    defaultContainerNewzLorem: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: '5%',
        textAlign: 'justify',
        padding: '3%'
    },
    /*------*-------*/
    wrapperRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        backgroundColor: '#A7C7E7',
    },

    defaultContainerChannels: {
        flexBasis: '45%',
        marginTop: '5%',
        backgroundColor: '#ededed',
        height: '20%',
        borderRadius: 10
    },

    iconStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }

});
