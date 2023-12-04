import React from 'react';
import Styles from './Styles';
import {Text, View, Image} from 'react-native';

export default function Head() {
  return (
    <View style={Styles.boxHead}>
      <View style={Styles.boxGLHead}>
        <View style={Styles.boxL}>
          <Image source={require('../../images/RTALogo.png')} style={Styles.logo}/>
        </View>
        <Text style={Styles.textRTA}>РТА ТЕЛЕКОМ</Text>
        <View style={Styles.boxH}>
          <Image source={require('../../images/logoGL1.png')} style={Styles.logo}/>
        </View>
      </View>
    </View>
  );
}
