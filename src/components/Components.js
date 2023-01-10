import {Image, Text, TouchableOpacity} from 'react-native';
import {Styles} from "../styles/Styles";

export const TextField = (props)=>{
    const {text} = props;
    return(
        <Text style={Styles.text}>{text}</Text>
    );
}
export const ButtonProp = (props)=>{
    const {text,onPress} = props;
    return(
        <TouchableOpacity style={Styles.button} >
            <Text style={Styles.textButton}
                  onPress={onPress}
            >{text}</Text>
        </TouchableOpacity>
    );
}

export const ImageProp = ()=>{
    return(
       <Image style={Styles.images} resizeMode='center' source={require('../../assets/splash.png')}/>
    );
}