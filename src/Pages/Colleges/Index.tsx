import React, { useState } from 'react';
import { Button, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Styles } from './Style';

type ItemValue = {title: string, id: number, dominio: string, url: string}
type ItemProps = {title: string};
const Item = ({title, dominio, url}: ItemValue) => (
    <View style={Styles.itemContainer}>
      <Text style={Styles.textStyle}>{title}</Text>
      <Text style={Styles.textStyle}>[ {dominio} ]</Text>
      <TouchableOpacity
        onPress={() => {
            Linking.openURL(url)
        }}
        >
        <Text style={Styles.textStyleBlue}>{url}</Text>
      </TouchableOpacity>
    </View>
  );

export const Colleges: React.FC = () => {
    const [Name, setName] = useState<String>('');
    const [response, setResponse] = useState<ItemValue[]>([]);

    const HandleChange = (e: any) => {
        let value = e;
        setName(value);
    }

    const HandlePress = () => {
        fetch(`http://universities.hipolabs.com/search?country=${Name}`)
        .then(result => result.json())
        .then(res => {
            let items: ItemValue[] = []
            res.forEach((ele: any, index: number) => {
                items.push({title: ele.name, id: index, dominio: ele.domains[0], url: ele.web_pages[0] })
            });
            setResponse(items);
        })
        .catch(error => {
            console.log(`[ERROR AT API CALL]`);
            console.log(error);
        })
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.inputContainer}>
                <TextInput style={Styles.textInput} placeholder="Enter a Country's Name" onChangeText={HandleChange}></TextInput>
                <Button title="Search" onPress={HandlePress}/>
            </View>
            
            <FlatList
                data={response}
                renderItem={({item}) => <Item title={item.title} dominio={item.dominio} url={item.url} id={item.id}/>}
            />
        </View>
    )
}