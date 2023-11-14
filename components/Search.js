import React from "react";  
import { View, Text,TextInput, StyleSheet, Image } from "react-native";   

export default class search extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            search: ''
        }   
    }
    setSearch (search){
        this.setState({search})
    }
    render() {
        return (
        <View style={{ flex: 1, margin: 10 }}>
        <TextInput
        onChangeText={(text) => this.setSearch(text)}
        underlineColorAndroid={'transparent'}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={this.state.search}
        placeholder="Rechercher"
        />
        </View>
        );
    }
}