import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  //CarouselItem
  item: {
    width: '100%',
    height: screenWidth,
    backgroundColor: 'purple',
  },
  imageContainer: {
    width: '100%',
  },

  //UP.js
  container: {
    flex: 1,
  },
  text: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    fontSize: RFValue(30),
    fontFamily: 'mt-med',
    color: '#fff',
    paddingHorizontal: RFValue(30),
    top: '60%',
  },
});

export default styles;