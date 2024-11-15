import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5"
import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, SectionList} from 'react-native';

const styles = StyleSheet.create({
    border: {
        borderWidth: 3,
        flexDirection: "row",
        flex:1
    },

    textStyle: {
        fontSize:15,
        margin: 10,
    },

    headerStyle: {
        fontSize:25,
        margin: 10,
        textAlign:'center',
        fontWeight: 'bold',
        borderWidth:2
    },

    itemContainer:{
        marginBottom: 50,
        margin:30,
        flex:1
    },

    name:{
        fontSize:15,
        justifyContent:'flex-start',
        paddingTop: 150,
},

    img:{
        margin:10,
        width: 250,
        height: 350,
        justifyContent:'flex-end',
    }
})

const datasource = [
    {
        title: "FIRE TYPES",
        bgColor: "orange",
        icon: "fire",
        data: [
            {name: 'Vulpix', num: 16},
            {name: 'Ceruledge', num: 36},
        ],
    },

    {
        title: "WATER TYPES",
        bgColor: "skyblue",
        icon: "water-sharp",
        data: [
            {name: 'Quaxly', num: 50},
            {name: 'Milotic ex', num: 42},
        ]
    }
]

const renderItem = ({item}) => {
    // let imgLink = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +  item.num +  '-2x.png'
    let imgLink = 'https://dz3we2x72f7ol.cloudfront.net/expansions/surging-sparks/en-us/SV08_EN_' +  item.num +  '.png'
return (
        <TouchableOpacity style={styles.border}>
            <Text style={styles.name}> {item.name} </Text>
            <Image source={{uri: imgLink}} style={styles.img}/>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={styles.itemContainer}>
            <StatusBar hidden={true}/>
            {/*<SectionList sections={datasource} renderItem={renderItem} renderSectionHeader={({section:{icon}}) =>(*/}
            {/*    <Icon name={icon} size={20} color="black"/>*/}
            {/*)}/>*/}
            <SectionList sections={datasource} renderItem={renderItem} renderSectionHeader={({section:{icon, title, bgColor}}) =>(
                <Text style={[styles.headerStyle, {backgroundColor: bgColor}]}>{title}</Text>
            )}/>
        </View>
    )
}
export default App;
























