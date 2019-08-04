import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import { List, Checkbox, WhiteSpace } from '@ant-design/react-native';
import { Button } from 'react-native-elements';
const CheckboxItem = Checkbox.CheckboxItem;


export default class TopicsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxItem1: true,
        };
    }

    render() {
        
        return (
            <ScrollView>
                <Text style={{paddingTop:10, paddingLeft: 15}}>Topics</Text>
                <List style={{ marginTop: 12 }}>
                    {
                        this.props.filterData.map((item,i) => (
                            <CheckboxItem key={i} checkboxStyle={{ color: '#f00' }}>
                                <Text style={{fontSize:13, color:'#333'}}>{item.name}</Text>
                            </CheckboxItem>
                        ))
                    }
                </List>
                <View style={{padding:10}}>
                <Button title="Apply" buttonStyle={{backgroundColor: '#fe5722'}} />
                </View>
            </ScrollView>
        );
    }
    
}