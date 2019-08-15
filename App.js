import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView} from 'react-native';
import {FOOD, MOVIE, LEGO} from './constants';
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      region:{
        latitude: 43.8012,
        longitude: -79.1902,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025
      }
    }
    _mapView = React.createRef();
  this._currentRegion = new MapView.AnimatedRegion(this.state.region);
  }

_showFood = () => {
  this._currentRegion
  .timing({...FOOD, duration: 1500})
  .start();
}

_showMovie = () => {
  this._currentRegion
  .timing({...MOVIE, duration: 1500})
  .start();
}

_showLego = () => {
  this._currentRegion
  .timing({...LEGO, duration: 1500})
  .start();
}

_zoomIn = () => {
  this._currentRegion
  .timing({...{
    latitudeDelta: 0.015,
    longitudeDelta: 0.015
  }, duration: 1000})
  .start();
}

_zoomOut = () => {
  this._currentRegion
  .timing({...{
    latitudeDelta: 0.35,
    longitudeDelta: 0.35
  }, duration: 1000})
  .start();
}

onRegionChange(region){
  this.setState({region});
}
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <MapView.Animated
        ref={this._mapView}
        provider= {PROVIDER_GOOGLE}
        region={this._currentRegion}
        style={styles.map}>

          <Marker coordinate={FOOD}/>
          <Marker coordinate={MOVIE}/>
          <Marker coordinate={LEGO}/>
        </MapView.Animated>
    <View style= {styles.bottomContainer}>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={this._showFood}>
            <Text style={styles.btnText}>FOOD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={this._showMovie}>
            <Text style={styles.btnText}>MOVIE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={this._showLego}>
            <Text style={styles.btnText}>LEGO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={this._zoomIn}>
            <Text style={styles.btnText}>ZOOMIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={this._zoomOut}>
            <Text style={styles.btnText}>ZOOMOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </SafeAreaView>
    );
  }
   
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: hp('80%'),
  },
  bottomContainer: {
    flexDirection: 'column',
    width: wp('100%'),
    marginTop: hp('82%')
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: hp('3%')
  },
  btn: {
    width: wp('30%'),
    marginLeft: wp('8%')
  },
  btnText: {
    color: 'blue'
  }
});
