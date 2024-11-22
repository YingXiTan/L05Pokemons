import React, {useState} from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import datasource from "./Data";


const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);
    return (
        <View style={{margin:10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}> Pokemon Name: </Text>
                <TextInput
                    value={name}
                    style={{borderWidth: 1}}
                    onChangeText={(text)=>setName(text)}
                />
            </View>

            {/*SAVE Button*/}
            <View style = {{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{flex: 1, margin:10}}>
                    <Button
                        title={'SAVE'}
                        onPress={() =>{
                            let indexnum = 1
                            if (route.params.key == 'Fire') {
                                indexnum = 0;
                            }
                            datasource[indexnum].data[route.params.index].key = name; //[index][key] --> Replaced to wtv letter is entered
                            navigation.navigate('Home');
                        }
                        }
                    />
                </View>

                {/*DELETE Button*/}
                <View style = {{flex: 1, margin:10}}>
                    <Button
                        title= {"DELETE"}
                        onPress={() => {
                            let indexnum = 1
                            if (route.params.key == 'Fire') {
                                indexnum = 0;
                            }
                            Alert.alert("Are you sure you want to delete this item?", ' '
                                [{text: 'Yes', onPress: () =>{
                                    datasource[indexnum].data.splice(route.params.index, 1);
                                    navigation.navigate('Home');
                                }},
                                {text: 'No'}])
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
export default Edit;
