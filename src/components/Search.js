import React, { Component, Fragment } from "react";
import { View, Image, Alert, ScrollView, FlatList, RefreshControl } from "react-native";
import {
  Icon,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Spinner,
  Header
} from "native-base";
import axios from "axios";
import { getUsers } from "../store/action/indexAction";
// import isToken from "../store/reducer/isToken";
import SearchCard from "../components/SearchCard";
import Card from '../components/Card'
import InputSearch from '../components/InputSearch'
import { connect } from 'react-redux'
import { scale } from '../assets/scaling'
import { vw } from '../assets/viewport'
import { notFound } from '../components/ic_notfound.png'

export class Search extends Component {
  state = {
    searchUsers: [],
    inputUsers: "",
    show: false
  };

  search = () => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/everything?q=${this.state.inputUsers}&language=id&apiKey=175f3005cac34aa0a4b7af8d24c60873`,
    })
      .then(result => {
        this.setState({
          searchUsers: result.data.articles,
          show: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    // this.search();
  };

  changeText = (text) => {
    this.setState({
      inputUsers: text
    })
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<InputSearch question="allLisencesParking" />),
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
    };
  };

  render() {
    console.log("this.props.search di render", this.props.search)
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        {!this.props.kosong ? (
          <ScrollView>
            {
              (
                <FlatList
                  data={this.props.search}
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
        ) : (
            <ScrollView >
              <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                <Text style={{ textAlign: 'center' }}> Data not Found </Text>
              </View>
            </ScrollView>
          )}

      </View>

    );
  }
}

const mapStateToProps = state => {
  console.log("ini syaye di search js", state)
  return {
    search: state.indexReducer.search,
    kosong: state.indexReducer.kosong
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearch: (input) => dispatch(getSearch(input))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
