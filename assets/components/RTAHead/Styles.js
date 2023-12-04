import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %

const styles = StyleSheet.create({
  //Черный блок//
    boxHead: {
      backgroundColor: 'black',
      width: '94%',
      height: RFValue(70),
      zIndex: 1,
      top: '-6%',
    },
    boxL: {
      width: '20%',
      height:'80%',
      top: '3%',
      left: '30%',
    },
    boxH: {
      width: '8%',
      height:'50%',
      top: '5%',
      left: '100%',
    },
    boxGLHead:  {
      paddingHorizontal: RFValue(0),
      paddingVertical: RFValue(0),
      flexDirection: 'row',
    },
  //Логотип//
    logo: {
      width:'100%',
      height:'100%',
    },
  //Стиль для текста//
    textRTA: {
      color: 'white',
      width: '40%',
      height: '50%',
      top: '6.5%',
      fontSize: RFValue(16),
      fontFamily: 'mt-med',
      marginHorizontal: RFValue(15),
    },
  });
  
  export default styles;

    // paddingHorizontal: RFValue(25),
 // paddingVertical: RFValue(15),