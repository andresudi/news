import React, { Component, Fragment } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card as CardNativeBase,
  CardItem,
  Thumbnail,
  Text as TextNativeBase,
  Button as ButtonNativeBase,
  Left,
  Body,
  Right,
  H3
} from "native-base";
import Card from '../components/Card'

export class SearchCard extends Component {
  goToStack = id => {
    this.props.navigation.navigate("Detail", { data: this.props.data });
  };

  render() {
    return (
        <Fragment>
        <ScrollView>
          <FlatList
              data={this.props.data}
              renderItem={({ item }) => (
                <Card data={item} navigation={this.props.navigation} />
              )}
              keyExtractor={item => item.id}
            />
        </ScrollView>
      </Fragment>
    );
  }
}

export default SearchCard;
