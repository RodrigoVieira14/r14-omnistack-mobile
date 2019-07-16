import { StyleSheet } from "react-native";

import {
    getBottomSpace,
    getStatusBarHeight
} from "react-native-iphone-x-helper";
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },

    logo: {
        width: 150,
        height: 80,
        alignSelf: "center"
    },

    input:{
        height: 48,
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        fontSize:16,
        paddingHorizontal:20,
        marginTop:30, 
    },

    button:{ 
        height: 48,
        borderRadius: 5,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#076284",
        justifyContent: "center",
        alignItems: "center" 
    },

    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: '#fff'
    },

    fab: {
        position: 'absolute',
        right: 30,
        bottom: 30 + getBottomSpace(),
        width: 60,
        height: 60,
        backgroundColor: '#0dacbb',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default styles;