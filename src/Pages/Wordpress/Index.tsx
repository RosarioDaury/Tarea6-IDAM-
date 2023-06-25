import React, {useEffect, useState} from "react";
import { FlatList, Image, Linking, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Styles } from "./Style";
import RenderHTML from "react-native-render-html";
import { ScrollView } from "react-native";

const Item = ({title, summary, link}: item) => {
    const { width } = useWindowDimensions();

    return(
        <View style={Styles.itemContainer}>
        <Text style={Styles.textStyle}>{title}</Text>
       
            <RenderHTML
                contentWidth={width}
                source={{html: summary}}
            />
      
        <TouchableOpacity
            onPress={() => {
                Linking.openURL(link)
            }}
            >
            <Text style={Styles.textStyleBlue}>{link}</Text>
        </TouchableOpacity>
        </View>
    )
    
}

type item = {title: string, summary: any, link: string, id: number}
export const Wordpress: React.FC = () => {  
    const [response, setResponse] = useState<item[]>([]);

    useEffect(() => {
        fetch("https://blog.ted.com/wp-json/wp/v2/posts")
        .then(res => res.json())
        .then(res => {
            const Posts = res.slice(0, 3);
            let items: item[] = [];
            Posts.forEach((el: any, index: number) => {
                let toPush = {
                    title: el.title.rendered,
                    summary: el.excerpt.rendered,
                    link: el.link,
                    id: index
                }

                items.push(toPush);
            })  
            setResponse(items);
        })
        .catch(err => {
            console.log(`[ERROR AT API CALL]`);
            console.log(err);
        })
    }, [])
    
    return (
        <View style={Styles.container}>
            <Image source={{uri:"https://pi.tedcdn.com/r/pl.tedcdn.com/social/ted-logo-fb.png?v=wAff13s?", width: 400, height: 150}}/>

            <FlatList
                data={response}
                renderItem={({item}) => <Item title={item.title} summary={item.summary} link={item.link} id={item.id}/>}
            />            
        </View>
    )
}