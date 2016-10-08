/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,

    TabBarIOS,
    Switch,
    Slider,
    PickerItemIOS,
    PickerIOS
} from "react-native";
import * as atb from "react-native-animatable";
import Welcome from './welcome'
import Icon from "react-native-vector-icons/MaterialIcons";
import {Container, Content, List, ListItem, Thumbnail, Button} from "native-base";


var styl = require('./styles');
var Realm = require('realm');

class sutram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            selectedTab: 'redTab',
        };
    }

    render() {

        if (!this.state.user) {
            return (
                <Welcome />);

        }

        if (this.state.user) {
            return (
                <TabBarIOS
                    unselectedTintColor="grey"
                    tintColor="#ffa54c"
                    barTintColor="white">
                    <Icon.TabBarItemIOS
                        title="List"
                        iconName="list"
                        iconColor="grey"
                        selectedIconName="list"
                        selectedIconColor="#ffa54c"
                        renderAsOriginal={true}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}>
                        <atb.View style={styl.containerlist} animation="fadeIn" delay={500}>
                            {/*<ListComponent ds={realm} ref='ls' schem={medSchedSchema}/>*/}
                        </atb.View>
                    </Icon.TabBarItemIOS>
                    <Icon.TabBarItemIOS
                        title="Record"
                        iconName="fiber-smart-record"
                        iconColor="grey"
                        selectedIconName="fiber-smart-record"
                        selectedIconColor="#ffa54c"
                        renderAsOriginal={true}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                            this.refs['desc']._focus();
                        }}>

                        <Container>
                            <Content>


                                <List>

                                    <ListItem style={{marginTop: 10}}>
                                        <Thumbnail size={40} source={{uri: this.state.user.photo}}
                                                   style={{alignItems: "center"}}/>
                                        <Text style={{
                                            fontSize: 18,
                                            fontFamily: 'AvenirNext-UltraLight',
                                            marginBottom: 20,
                                            marginTop: 20
                                        }}>
                                            Hey </Text>

                                    </ListItem>
                                </List>


                                <Button block style={{
                                    marginLeft: 100,
                                    marginRight: 100,
                                    backgroundColor: 'rgba(0,0,255,0.5)'
                                }} onPress={() => {


                                }}> Submit </Button>
                            </Content>
                        </Container>

                    </Icon.TabBarItemIOS>

                    <Icon.TabBarItemIOS
                        title="Account"
                        iconName="keyboard-arrow-right"
                        iconColor="grey"
                        selectedIconName="keyboard-arrow-right"
                        selectedIconColor="#ffa54c"
                        selected={this.state.selectedTab === 'pinkTab'}
                        renderAsOriginal={true}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'pinkTab'
                            });
                        }}>

                        <Container>
                            <Content>


                                <List>

                                    <ListItem style={{marginTop: 10}}>
                                        <Thumbnail size={40} source={{uri: this.state.user.photo}}
                                                   style={{alignItems: "center"}}/>
                                        <Text style={{
                                            fontSize: 18,
                                            fontFamily: 'AvenirNext-UltraLight',
                                            marginBottom: 20,
                                            marginTop: 20
                                        }}>
                                            hi </Text>

                                    </ListItem>
                                    <ListItem style={{marginTop: 10}}>

                                        <Button block style={{
                                            marginLeft: 100,
                                            marginRight: 100,
                                            backgroundColor: 'rgba(255,0,0,0.8)'
                                        }} onPress={() => {


                                            this.setState({
                                                selectedTab: 'blueTab'
                                            });
                                        }}> Delete All Data </Button>
                                    </ListItem>

                                    <ListItem style={{marginTop: 10}}>

                                        <Button block style={{
                                            marginLeft: 100,
                                            marginRight: 100,
                                            backgroundColor: 'blue'
                                        }} onPress={() => {
                                            this.setState({
                                                selectedTab: 'redTab'
                                            });
                                        }



                                        }> Logout </Button>
                                    </ListItem>

                                </List>

                            </Content>
                        </Container>
                    </Icon.TabBarItemIOS>
                </TabBarIOS>


            );
        }

    }
}

AppRegistry.registerComponent('sutram', () => sutram);
