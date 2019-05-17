import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { connect } from 'react-redux'
import axios from "axios";
import { getUsers, getSearch } from "../store/action/indexAction"

class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUsers: "",
        };
    }

    changeText = (text) => {
        this.props.getSearch(text)
    }

    render() {
        return (
            <View>
                <Input style={{ color: "#fff" }} placeholderTextColor="white" placeholder="Search" autoFocus onChangeText={(e) => {
                    return this.changeText(e)
                }} />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        getSearch: (input) => dispatch(getSearch(input))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InputSearch)