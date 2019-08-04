import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated, ScrollView } from 'react-native';
import {Header} from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';
import {
    TabBarVertical,
    TabViewVertical,
    SceneMap,
    Route,
    NavigationState,
  } from 'react-native-vertical-tab-view';
import SortFilter from './ConnectionFilter/SortFilter';
import TopicsFilter from './ConnectionFilter/TopicsFilter';
import ExpertiseFilter from './ConnectionFilter/ExpertiseFilter';
import ComfortFilter from './ConnectionFilter/ComfortFilter';

const FirstRoute = () => (
    <SortFilter />
);
  
const SecondRoute = () => (
    <TopicsFilter filterData={[{
        name: 'Football'
    }, {
        name: 'Indian Languages - Tamil'
    }, {
        name: 'Painting'
    },{
        name: 'Abobe Illustrator'
    }, {
        name: 'Supply Chain and Operations'
    }, {
        name: 'Data Analytics'
    }]} />
);

const ExpertiseRoute = () => (
    <ExpertiseFilter filterData={[{
        name: 'Novice',
        icon: require('../assets/icons/shield1.jpg')
    }, {
        name: 'Amateur',
        icon: require('../assets/icons/shield2.jpg')
    }, {
        name: 'Advanced',
        icon: require('../assets/icons/shield3.jpg')
    },{
        name: 'SME',
        icon: require('../assets/icons/shield4.jpg')
    }]} />
);

const ComfortRoute = () => (
    <ComfortFilter filterData={[{
        icon: require('../assets/images/excited.jpg')
    }, {
        icon: require('../assets/images/happy.jpg')
    }, {
        icon: require('../assets/images/meh.jpg')
    },{
        icon: require('../assets/images/angry.jpg')
    }]} />
);



const {height}=Dimensions.get('window');

class ConnectionFilter extends Component {
    static defaultProps = {
        orientation: 'PORTRAIT'
    };
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          routes: [
            { key: '1', title: 'Sort' },
            { key: '2', title: 'Topics'},
            { key: '3', title: 'Expertise Level'},
            { key: '4', title: 'Comfort Level'}
          ]
        };
    }
    _handleIndexChange = (index) => {
        this.setState({ index });
    };

    _renderTabBar = props => (
        <TabBarVertical
          {...props}
          scrollEnabled
          indicatorStyle={styles.indicator}
          indicatorContainerStyle={styles.indicatorContainerStyle}
          style={styles.tabbar}
          tabStyle={styles.tab}
          labelStyle={styles.label}
        />
    );

    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
        '3': ExpertiseRoute,
        '4': ComfortRoute
    });

    onCloseFilter = () => {
        this.props.onCloseFilter();
    }

    render() {
        const landscape = this.props.orientation.split('-')[0] === 'LANDSCAPE';
        const SelectedTabView = landscape ? TabViewVertical : TabView;
        const initialLayout = {
            height: 0,
            width: Dimensions.get('window').width,
          };
        return (
            <View style={{backgroundColor: '#fff'}}>
            <Header
                placement="left"
                leftComponent={{ icon: 'close', color: '#333', onPress: () => {
                    this.onCloseFilter()
                } }}
                centerComponent={{ text: 'Sort/Filter', style: { color: '#333', fontWeight: 'bold', fontSize: 18 } }}
                rightComponent={{ text: 'CLEAR ALL', style: { color: '#fe5722' } }}
                containerStyle={{
                    backgroundColor: '#FFF',
                    borderBottomWidth: 2,
                    borderBottomColor: '#ddd',
                    paddingTop: 0,
                    height: 50
                }}
            />
            <ScrollView>
                <TabViewVertical
                    style={[styles.container, this.props.style]}
                    indicatorContainerStyle={styles.indicatorContainerStyle}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                />
            </ScrollView>
            </View> 
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    tabbar: {
      backgroundColor: '#ebebeb',
      height: height/1.6 - 50
    },
    tab: {
      width: 150,
      height: 45,
    },
    indicator: {
      backgroundColor: '#fff',
      height: 45
    },
    indicatorContainerStyle: {
        backgroundColor: '#fff'
    },
    label: {
      color: '#333',
      fontWeight: '400',
    },
  });

export default ConnectionFilter;