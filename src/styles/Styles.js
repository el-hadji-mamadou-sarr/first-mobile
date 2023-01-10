import {StyleSheet} from "react-native";

export const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color:'red',
        fontWeight:'600',
        fontSize:18,
    },
    button:{
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginTop: 7,
        borderRadius: 5,

    },
    textButton:{
        color:'white',
        fontSize:15,
        fontWeight: '500',
    },

    formTextField:{
        margin:10,
        width:200,
        height:25,
        padding:7,
        borderRadius:5,
        backgroundColor: 'white',
    },

    images:{
        width:100,
        height:100,
    }

});