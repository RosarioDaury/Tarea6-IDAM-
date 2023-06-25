import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Styles } from "./Style";
type weather = {summary: string, cloud: string, temperature: string};

export const Weather: React.FC = () => {
    const [weather, setWeather] = useState<weather>({summary: "", cloud: "", temperature: ""});

    useEffect(() => {
      fetch("https://www.meteosource.com/api/v1/free/point?place_id=santo-domingo&sections=all&timezone=UTC&language=en&units=metric&key=nps65bucqbatsdj4psgpl7fihg2zzlz7sc8ey8rv")
      .then(res => res.json())
      .then(res => {
        setWeather({summary: String(res.current.summary), cloud: String(res.current.cloud_cover), temperature: String(res.current.temperature)});
      })
      .catch(error => {
        console.log(`[ERROR AT API CALL]`);
        console.log(error);
      })
    }, [])
    
    return (
        <View style={Styles.container}>
            <Text style={{fontSize: 20, marginBottom: 10}}>Weather In Santo Domingo Today</Text>
            <Text style={{fontSize: 17}}>{`Summary: ${weather.summary}`}</Text>
            <Text style={{fontSize: 17}}>{`Cloud Cover Percentage: ${weather.cloud}% `}</Text>
            <Text style={{fontSize: 17}}>{`Temperature: ${weather.temperature} C `}</Text>
        </View>
    )
}