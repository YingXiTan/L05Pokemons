import React from "react";
import {Button, Image, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import datasource from "./Data";


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


const Home = (navigation) => {
    const renderItem = ({item,index, section}) => {
        let imgLink = 'https://dz3we2x72f7ol.cloudfront.net/expansions/surging-sparks/en-us/SV08_EN_' +  item.num +  '.png'
        return (
            <TouchableOpacity style={styles.border}>
                <Text style={styles.name}> {item.name} </Text>
                <Image source={{uri: imgLink}} style={styles.img}/>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.itemContainer}>
            <StatusBar hidden={true}/>
            <Button
                title= 'Add Pokemon'
                onPress={() => navigation.navigate('Add')}
                />
            <SectionList sections={datasource} renderItem={renderItem} renderSectionHeader={({section:{icon, title, bgColor}}) =>(
                <Text style={[styles.headerStyle, {backgroundColor: bgColor}]}>{title}</Text>
            )}/>
        </View>
    )
}
export default Home;
