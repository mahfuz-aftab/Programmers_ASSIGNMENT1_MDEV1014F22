import { Text, View, StyleSheet, Platform, SafeAreaView } from 'react-native';


export const globalStyles = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: '#A7C7E7',
        padding: 10,
        alignItems: 'center',

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
        paddingTop: Platform.OS == 'android' ? 30 : 20,
    },

    containerCredential: {
        flex: 1,
        backgroundColor: '#A7C7E7',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
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

    appLebelTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: "20%",
        marginBottom: "2%",
    },

    appLebelTagLine: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: "10%",
    },
    boxStyle: {
        width: "100%",
        paddingStart: 10,
        paddingEnd: 10
    },
    boxNewz: {
        flex: 1,
    },
    boxNewzChannels: {
        flex: 2,
    },


    defaultContainerHome: {
        flex: 1,
        margin: "2%",
        backgroundColor: '#7393B3',
    },
    defaultContainerHomeText: {
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '15%'
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
