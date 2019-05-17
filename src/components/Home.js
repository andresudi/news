import React, { Component, Fragment } from "react";
import {
    View,
    Text,
    ScrollView,
    FlatList,
    Image,
    StyleSheet,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity
} from "react-native";
import { Picker, Item, Icon, Spinner, Text as TextNativeBase } from 'native-base';
import { connect } from "react-redux";
import { getUsers } from "../store/action/indexAction"
import Card from '../components/Card'

console.disableYellowBox = true;

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            error: false,
            errorMessage: null,
            curTime: new Date().toLocaleString(),
            backgroundImage: null,
            statusBanner: null,
            headerText1: "",
            headerText2: ""
        };
    }

    refreshState = () => {
        this.props.getUsers()
    }

    componentDidMount = () => {
        this.props.getUsers()
        console.log("this.props", this.props)
    };

    static navigationOptions = ({ navigation }) => {
        return {

            headerRight: (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Search')
                }}>
                    <View style={{ marginRight: 12 }}>
                        <Icon name='search' />
                    </View>
                </TouchableOpacity>
            ),
        };
    };

    render() {
        return (
            <>
                {!this.props.isLoading ? (
                    <View style={{ backgroundColor: "white" }}>
                        <ScrollView
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.refreshState}
                                ></RefreshControl>
                            }>
                            {
                                (
                                    <FlatList
                                        data={this.props.users}
                                        keyExtractor={(index) => index.url}
                                        renderItem={({ item }) => (
                                            <Fragment>
                                                {
                                                    <Card data={item}{...this.props} />
                                                }
                                            </Fragment>
                                        )}
                                    />
                                )
                            }
                        </ScrollView>

                    </View>
                ) : (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white'
                        }}>
                            <ActivityIndicator size={'large'}></ActivityIndicator>
                        </View>
                    )
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.indexReducer.users,
        isLoading: state.indexReducer.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
