import {
    Alert, Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View

} from "react-native";
import {Styles} from "./styles/Styles";
import {useState} from "react";

export const Forms = ()=>{
    const [name, setName] = useState('');
    const [isSumitted, setIsSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const refresh = ()=>{
        setName('');
        setIsSubmitted(false);
        setShowModal(false);
    }
    const handleSubmit = ()=>{
        if (name.length > 3){
            setIsSubmitted(!isSumitted);
            setShowModal(true);
        }else{
            Alert.alert('input errors',
                'the name should be longuer than 3 characters',
                [
                    {text:'close', onPress:()=>console.log('whasuup')},
                    {text:'do not show again'},
                    {text:'haya'},
                ],
                {cancelable:true, onDismiss:()=>console.warn('sismissed')}
            );

        }
    }
    return (
        <View style={Styles.container}>
            <Modal visible={showModal} onRequestClose={()=>setShowModal(false)}>
                <Text style={Styles.text}>Form is submitted</Text>
            </Modal>
            <Text style={Styles.text}>form</Text>
            <TextInput style={Styles.formTextField} placeholder='enter your name' onChangeText={(value)=>setName(value)}/>
            <Text style={Styles.text}>Your name is : {name && <Text style={Styles.text}>{name}</Text>}</Text>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                {isSumitted ? <Text style={Styles.textButton}>clear</Text> :<Text style={Styles.textButton}>submit</Text>}
            </TouchableOpacity>
            {isSumitted && <Text style={Styles.text}>the form is submitted !!</Text>}

            <TouchableOpacity style={Styles.button} onPress={refresh}>
                <Text style={Styles.textButton}>refresh</Text>
            </TouchableOpacity>
        </View>
    );
}