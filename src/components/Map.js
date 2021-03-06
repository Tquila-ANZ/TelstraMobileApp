import React from "react";
import { StyleSheet, View, Text, Image, Picker, Dimensions, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import DeviceInfo from "react-native-device-info";
import { Provider, connect } from "react-redux";
import { StackNavigator, NavigationActions } from "react-navigation";
import Hr from "react-native-hr";
//import Image from 'react-native-scalable-image';

const promisify = fn => (...args) =>
  new Promise((resolve, reject) => fn(...args, resolve, reject));

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
// this is a new comment
const Map = ({ ContactInfo, service, props, map2 }) => {
  debugger;
  let w = Dimensions.get('window').width;
  let h = Dimensions.get('window').height;
  return (
    <View >
      <TouchableOpacity  onPress={map2}>
    <Image onPress={map2} style={{width: w, height: h-10}} resizeMode="contain" source={require("../assets/map1.png")} />
    </TouchableOpacity>
  </View>
)
};

Map.navigationOptions = {
  title: "Map"
};

const mapStateToProps = state => {
  return {
    ContactInfo: state.ContactInfo
  };
};

const mapDispatchToProps = dispatch => ({
  // onNavigateToService: () => {
  //   dispatch(NavigationActions.navigate({ routeName: "Service" }));
  // },
  map2: () => dispatch(NavigationActions.navigate({ routeName: "Map2" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
