import {View} from "react-native";
import {ButtonProp, ImageProp, TextField} from "./components/Components"


import {Styles} from "./styles/Styles";

export const Images = (nav)=>{
    const {navigation} = nav;
    console.log(navigation);
    const handlePress = ()=>{
        navigation.navigate('hooks');
    }
    return (
        <View style={Styles.container}>
            <TextField text='hello navigation'/>
            <ButtonProp text='go hook'
                        onPress={handlePress}
            />
            <ImageProp/>

        </View>
    );
}