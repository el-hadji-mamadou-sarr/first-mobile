import { StatusBar } from 'expo-status-bar';
import {Button, Linking, Pressable, StyleSheet, Text, View} from 'react-native';


export default function Intro() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open up App.js to start working on your app!</Text>
            <Pressable style={styles.button} onPress={()=>Linking.openURL('https://github.com/gloatingorc')}>
                <Text style={styles.textButton}>hello button</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create(
    {
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
        }
    });
