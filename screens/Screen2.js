import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import flatListData from '../flatListData';


export default function Screen2({ navigation }) {
    return (
        <View style={{ marginBottom: 'auto', marginTop: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
            <FlatList
                data={flatListData}
                numColumns={2}
                keyExtractor={({ id }, index) => id}
                renderItem={
                    ({ item }) => {
                        //console.log(`item ${JSON.stringify(item)} index ${index}`)
                        return (
                            <View>
                                <Image source={(item.photo)} style={{ width: 125, height: 125 }}></Image>
                                <Text>{item.name}</Text>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Screen3', {data: item})
                                }}>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
            >

            </FlatList>
        </View>
    )
}
