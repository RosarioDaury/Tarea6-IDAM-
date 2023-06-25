import React from "react";
import { Text, View, Image } from "react-native";
import { Styles } from "./Style";

export const Me: React.FC = () => {
    return(
        <View style={Styles.container}>
            <Image
                source={require('../../../assets/photo.jpg')}
                style={Styles.Image}
            />
            <View style={Styles.textContainer}>
                <Text style={Styles.Text}>Daury Jose Rosario Caba</Text>
                <Text style={Styles.Text}>FullStack Developer</Text>
                <Text style={Styles.Text}>dauryjoserosariocaba@gmail.com</Text>
                <Text style={Styles.Text}>ITLA Student</Text>
            </View>
            
        </View>
    )
}