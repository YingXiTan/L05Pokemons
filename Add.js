import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import datasource from "./Data";

const Add= ({navigation}) => {
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [type, setType] = React.useState('');
    return (
        <View style={{margin:10}}>
            <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold'}}> Pokemon Name: </Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text)=>setName(text)}/>
            </View>

            <View style={{margin: 10}}>
                <Text style={{fontWeight: 'bold'}}> Number: </Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text)=>setNumber(text)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items = {[
                        {label: 'Fire', value: 'Fire'},
                        {label: 'Water', value: 'Water'},
                        {label: 'Electric', value: 'Electric'},
                    ]}
                />
            </View>

            <Button
                title= "ADD"
                onPress={()=> {
                    let item = {key:name};
                    let indexnum = 1;
                    if(type == "Fire") {
                        indexnum = 0;
                    }
                    datasource[indexnum].data.push(item);
                    navigation.navigate('Home');
                }}
            />
        </View>
    )
}
export default Add;














