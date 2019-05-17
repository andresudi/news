import React, { Component, Fragment } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
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
import { scale } from '../assets/scaling';
import { vw } from '../assets/viewport';
import moment from 'moment';
import { icon } from './password_gitHub.png'

export class Card extends Component {
  goToStack = id => {
    this.props.navigation.navigate("Detail", { data: this.props.data });
  };

  render() {
    let timestamp = moment(this.props.data.publishedAt).valueOf()
    return (
      <View style={{
        marginVertical: scale(5), shadowOffset: { width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
      }}>
        <TouchableOpacity onPress={this.goToStack} activeOpacity={1}>

          <CardNativeBase style={{ flex: 0 }}>
            <CardItem>

              <Body>
                <Text style={{ fontFamily: 'OpenSans', fontSize: 18, fontWeight: "bold" }}>{this.props.data.title}</Text>
                <Text note style={{ fontFamily: 'OpenSans', fontSize: 12, paddingTop: scale(3) }}> {this.props.data.author}</Text>
                <Text note style={{ fontFamily: 'OpenSans', fontSize: 10, }}> {moment(timestamp).format('LLLL')}</Text>
              </Body>

            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: `${this.props.data.urlToImage}` }} style={{ height: 200, width: 350, flex: 1 }} />
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Left>
                  <Text note style={{ fontFamily: 'OpenSans', fontSize: 14 }}>{this.props.data.description}</Text>
                </Left>
              </Body>
            </CardItem>
          </CardNativeBase>

        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
