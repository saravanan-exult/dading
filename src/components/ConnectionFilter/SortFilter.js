import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import { List, Radio, WhiteSpace } from '@ant-design/react-native';
const RadioItem = Radio.RadioItem;



export default class SortFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          part1Value: 1,
          part2Value: 1,
        };
    }

    render() {
        
        return (
            <View>
                <Text style={{paddingTop:10, paddingLeft: 15}}>Sort Connections by</Text>
                <List style={{ marginTop: 12 }}>
                <RadioItem
                    checked={this.state.part2Value === 1}
                    onChange={event => {
                    if (event.target.checked) {
                        this.setState({ part2Value: 1 });
                    }
                    }}
                >
                   <Text style={{fontSize:13, color:'#333', paddingTop:6}}>Rating</Text>
                </RadioItem>
                <RadioItem
                    checked={this.state.part2Value === 2}
                    onChange={event => {
                    if (event.target.checked) {
                        this.setState({ part2Value: 2 });
                    }
                    }}
                >
                    <Text style={{fontSize:13, color:'#333', paddingTop:6}}>Number of Conversations</Text>
                </RadioItem>
                </List>
            </View>
        );
    }
    
}


