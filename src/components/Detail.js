import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableHighlight,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import {
  Content,
  Container,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  H3,
  Right,
  Spinner
} from "native-base";
import RepoCard from "./ReporCard";
import axios from "axios";
import moment from "moment";
import { scale } from '../assets/scaling'
import { vw } from '../assets/viewport'

class Detail extends Component {
  state = {
    userDetail: [],
    userRepos: [],
    isLoading: true,
    haveRepos: false
  };

  static navigationOptions = {
    headerTintColor: 'white',
  }

  render() {
    let { data } = this.props.navigation.state.params;
    let timestamp = moment(data.publishedAt).valueOf()

    console.log("data iniiiii", data)
    return (

      <>
        {this.state.isLoading ? (
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
          }}>
            <ActivityIndicator size={'large'}></ActivityIndicator>
          </View>
        ) : (

            <ScrollView style={{}}>


              <Body style={{}}>
                <Text style={{ fontFamily: 'OpenSans', fontSize: 18, fontWeight: "bold", textAlign: "center" }}>{data.title}</Text>
                <Text note style={{ fontFamily: 'OpenSans', fontSize: 12, paddingTop: scale(3) }}> {data.author}</Text>
                <Text note style={{ fontFamily: 'OpenSans', fontSize: 10, }}> {moment(timestamp).format('LLLL')}</Text>

                <Image
                  source={{
                    uri: `${data.urlToImage}`
                  }}
                  style={{
                    height: 200,
                    width: 355,
                    resizeMode: "contain",
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 10
                  }}
                />
              </Body>

              <CardItem style={{ paddingBottom: 300, }}>
                <Left>
                  <Body>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 10
                      }}
                    >
                      {data.content}
                    </Text>
                    <Text note> Selengkapnya: {data.url}</Text>
                  </Body>
                </Left>
              </CardItem>

            </ScrollView>
          )}
      </>

    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Details"
    };
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnLeft: {
    marginTop: 20,
    flexDirection: "column",
    maxWidth: "60%"
  },
  columnRight: {
    flexDirection: "column",
    minWidth: "40%",
    alignItems: "center"
  }
});

export default Detail;
