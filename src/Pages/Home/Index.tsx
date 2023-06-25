import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Styles } from './Style';
export const Home: React.FC = () => {
    return(
        <View style={Styles.container}>
            <Image style={Styles.image} source={{uri: "https://assets-ferremix.tiendagoshop.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjAyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--39398a0b879d8c68db6463bc818981a18693621a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDam9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFd01EQjRNVEF3TUFZN0JsUTZER2R5WVhacGRIbEpJZ3RqWlc1MFpYSUdPd1pVT2d0bGVIUmxiblJBQnpvSlkzSnZjRWtpRWpFd01EQjRNVEF3TUNzd0t6QUdPd1pVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--59a8807dba6878f106011d65e1e1cdc8e9f2342c/CHP-PP.jpg", width: 300, height: 300 }}/>
        </View>
    )
}