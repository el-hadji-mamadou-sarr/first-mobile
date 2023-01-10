import {Text, View, StyleSheet, Pressable} from "react-native";
import {Styles} from "./styles/Styles"
import {useState} from "react";

export const Hooks = ()=>{
    const [name, setName] = useState('el hadji');
    const [changed, setChanged] = useState(false);
    const handlePress = ()=>{

        setChanged(!changed);
        if(changed){
            setName('bro what the fuck');
        }else {
            setName('el hadji');
        }
    }
    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>{name}</Text>
            <Pressable style={Styles.button}>
                <Text style={Styles.textButton} onPress={handlePress}>{!changed ? 'mettre le nom' : 'what the fuck'}</Text>
            </Pressable>
        </View>

    );
}

