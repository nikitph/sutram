/**
 * Created by Omkareshwar on 10/8/16.
 */
import React, {Component} from "react";
import {AppRegistry, Text, View, TouchableHighlight, Image} from "react-native";
import * as atb from "react-native-animatable";
var styl = require('./styles');

export default class Welcome extends Component {

    render() {
        return (
            <View style={styl.containersignin}>

                <atb.Image animation="fadeIn"
                           style={styl.backdrop}
                           resizeMode='contain'
                           source={require('./logo.png')}/>
                <atb.View animation="fadeIn" duration={500}>
                    <atb.Text animation="fadeInUp" style={styl.welcome} delay={500}>
                        Yoga Sutra Compendium
                    </atb.Text>
                </atb.View>

                <atb.View animation="fadeIn" delay={2200} style={{width: 130, height: 55, marginTop: 10}}>

                </atb.View>

                <TouchableHighlight>
                    <Text>
                        To get started, lets login with Google
                    </Text>
                </TouchableHighlight>

            </View>
        );

    }
}
