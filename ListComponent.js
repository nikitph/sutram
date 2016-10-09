/**
 * Created by Omkareshwar on 9/21/16.
 */
import React, {Component} from "react";
import {AppRegistry, Text, View, RecyclerViewBackedScrollView} from "react-native";
import {ListView} from "realm/react-native";

var styl = require('./styles');


export default class ListComponent extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);

        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,

        });
        this.state = {
            dataSource: dataSource.cloneWithRows(props.ds)
        };
    }

    render() {
        return (
            <View style={{marginTop: 65,flex:1,justifyContent:'center',backgroundColor: '#E4E1D6'
            }}>
                <ListView
                    initialListSize={100}
                    pageSize={50}
                    automaticallyAdjustContentInsets={false}
                    contentInset={{bottom: 49}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <View style={styl.rowcontainer}>
                                    <Text style={styl.vcol}>{rowData}</Text>

                                </View>

                        );
                    }}
                />
            </View>
        );
    }
}