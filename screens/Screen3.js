import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import { useRoute } from '@react-navigation/native';

export default function Screen3() {
    const route = useRoute();

    var imgScr = require("../assets/coffees/harris-vo-JpQGEArmG0I-unsplash.png");
    var [linkImage, setLinkImage] = new useState(imgScr);

    useEffect(() => {
        if (route.params != null)
        setLinkImage(route.params.data.photo)
    });

    return (
        <View>
            <Image style={{ width: 270, height: 325, marginTop: 50, alignSelf: 'center' }} source={linkImage}></Image>
        </View>
    )
}
