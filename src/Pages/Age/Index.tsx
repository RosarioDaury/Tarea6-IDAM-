import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Styles } from './Style';
type Details = {age: Number, count: Number, name: String}
export const Age: React.FC = () => {
    const [Name, setName] = useState<String>('');
    const [response, setResponse] = useState(0);
    const [details, setDetails] = useState<Details>({age: 0, count: 0, name: ""});

    const HandleChange = (e: any) => {
        let value = e;
        setName(value);
    }

    const HandlePress = () => {
        fetch(`https://api.agify.io/?name=${Name}`)
        .then(result => result.json())
        .then(res => {
            if(res.age == null){
                setResponse(0);
                return
            }
            // 1: YOUNG, 2: ADULT, 3: OLD
            if(res.age < 18 ) {
                setResponse(1)
            } else if(res.age < 50) {
                setResponse(2)
            } else {
                setResponse(3)
            }
            setDetails(res);
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
                response == 1 &&
                <View style={Styles.responseContainer}>
                    <Text style={Styles.responseContainer.Text}>You are Young - {String(details.age)}</Text>
                    <Image source={{uri: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/512/Male-icon.png", width: 150, height: 150}}/>
                </View>
                
            }

            {
                response == 2 &&
                <View style={Styles.responseContainer}>
                    <Text style={Styles.responseContainer.Text}>You are Adult - {String(details.age)}</Text>
                    <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/3107/3107137.png", width: 150, height: 150}}/>
                </View>
                
            }


            {
                response == 3 &&
                <View style={Styles.responseContainer}>
                    <Text style={Styles.responseContainer.Text}>You are Old - {String(details.age)}</Text>
                    <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/5488/5488324.png", width: 150, height: 150}}/>
                </View>
            }
            

            
        </View>
    )
}