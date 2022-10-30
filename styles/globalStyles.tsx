import { Dimensions, StyleSheet } from 'react-native';

const colorBackgroundPrimary = '#A7C7E7'
const colorBlack = '#000000'

export const globalStyles = StyleSheet.create({

    // Wrappers
    wrapper: {
        backgroundColor: colorBackgroundPrimary,
        height: '100%',
        padding: 10,
    },
    wrapperGuest: {
        backgroundColor: colorBackgroundPrimary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Headings
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 30,
    },

    // Header
    header: {
        backgroundColor: '#7393B3',
        paddingTop: '5%', // Platform.OS == 'android' ? 30 : 20,
    },
    headerText: {
        color: colorBlack,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 10
    },

    // Auth
    titleLogin: {
        fontSize: 30,
        color: colorBlack,
    },
    formLabel: {
        fontSize: 20,
        color: colorBlack,
    },
    formInput: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
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
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },

    // News
    newsImage: {
        width: "100%",
        height: 240,
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
        backgroundColor: '#5F9EA0',
        paddingBottom: '5%',
    },
    defaultContainerNewzText: {
        color: '#00008B',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: '5%',
        marginHorizontal: '5%',
    },
    defaultContainerNewzLorem: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 26.4,
        padding: '5%'
    },

    // Channels
    wrapperChannels: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    channelContainer: {
        flexBasis: '45%',
        marginTop: '3.5%',
        backgroundColor: '#ededed',
        height: Dimensions.get('window').width / 2.25,
        borderRadius: 10
    },
    channelLogo: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }

});
