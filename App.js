/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationActions
} from "react-navigation";
import { Container, Header, Content, Icon, Button } from "native-base";
import { Provider } from "react-redux";
import store from "./src/store/index";
import headerImg from './src/components/newslogo.png'
import Home from "./src/components/Home";
import Search from "./src/components/Search"
import Detail from './src/components/Detail'
import { scale } from "./src/assets/scaling";
import { vw } from './src/assets/viewport'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HomeStackNav />
        </Fragment>
      </Provider>
    );
  }
}

const HomeStackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: "News App",
      headerStyle: {
        backgroundColor: "#003b6f",
        height: scale(50)
      },
      headerTitleStyle: {
        color: "white",
        fontFamily: "Montserrat-Regular",
        fontSize: 5 * vw
      },
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#003b6f",
        height: scale(50)
      },
      headerTitleStyle: {
        color: "white",
        fontFamily: "Montserrat-Regular",
        fontSize: 5 * vw
      },
      headerTintColor: 'white',
    })
  },
  Search: {
    screen: Search
  },
});

const searchStackNav = createStackNavigator({
  Add: {
    screen: Search,
    navigationOptions: () => ({
      headerTitle: "News App",
      headerStyle: {
        backgroundColor: "#003b6f",
        height: scale(50)
      },
      headerTitleStyle: {
        color: "white",
        fontFamily: "Montserrat-Regular",
        fontSize: 5 * vw
      },
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#003b6f",
        height: scale(50)
      },
      headerTitleStyle: {
        color: "white",
        fontFamily: "Montserrat-Regular",
        fontSize: 5 * vw
      },
      headerTintColor: 'white',
    })
  },

});

const BottomNav = createBottomTabNavigator({
  Home: HomeStackNav,
  Search: searchStackNav,
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/circle-web-and-programming/512/Website_and_programming_28-512.png" }} style={{ width: 22, height: 22 }} />
        } else if (routeName === 'Search') {
          return <Image source={{ uri: "https://cdn0.iconfinder.com/data/icons/lamar/512/Loop-512.png" }} style={{ width: 22, height: 22 }} />
        }
      },
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: '#005299',
      inactiveTintColor: '#ccc',
      style: {
        backgroundColor: '#003b6f'
      }
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 40,
    marginLeft: scale(135),
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  nav: {
    width: "100%",
    height: "100%",
    backgroundColor: "#003b6f",
    justifyContent: "center"
  }
});
