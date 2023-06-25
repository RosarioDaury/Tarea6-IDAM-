import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Styles } from './Style';

export const Gender: React.FC = () => {
    const [Name, setName] = useState<String>('');
    const [response, setResponse] = useState('');

    const HandleChange = (e: any) => {
        let value = e;
        setName(value);
    }

    const HandlePress = () => {
        fetch(`https://api.genderize.io/?name=${Name}`)
        .then(result => result.json())
        .then(res => {
            if(res.gender == "male"){
                setResponse("Male");
            }else if(res.gender == "female") {
                setResponse("Female");
            } else {
                setResponse('');
            }
        })
        .catch(error => {
            console.log(`[ERROR AT API CALL]`);
            console.log(error);
        })
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.inputContainer}>
                <TextInput style={Styles.textInput} placeholder='Enter a Name' onChangeText={HandleChange}></TextInput>
                <Button title="Enter" onPress={HandlePress}/>
            </View>

            {
                response 
                ?
                    response == "Male"
                    ?
                        <View style={Styles.responseContainer}>
                            <Text style={Styles.responseContainer.Text}>Congrats!!, You are a Man</Text>
                            <Image source={{uri: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/512/Male-icon.png", width: 150, height: 150}}/>
                        </View>
                    :
                        <View style={Styles.responseContainerFemale}>
                            <Text style={Styles.responseContainerFemale.Text}>Congrats!!, You are a Women</Text>
                            <Image source={{uri: "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Female-icon.png", width: 150, height: 150}}/>
                        </View>
                :
                    null
            }
        </View>
    )
}