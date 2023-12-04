import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %

const styles = StyleSheet.create({
  container: {
    flex: 1,
},

//Компоненты
  boxB: {
    backgroundColor: 'black',
    width: '94%',
    height: RFValue(52),
    top: '34%',
    marginVertical: RFValue(15),
  },
  boxGL:  {
    paddingHorizontal: RFValue(25),
    paddingVertical: RFValue(15),
    flexDirection: 'row',
  },
  textB: {
    width:'100%',
    height: '100%',
    fontSize: RFValue(16),
    fontFamily: 'mt-med',
    color: '#fff',
    marginHorizontal: RFValue(10),
  },
  One: {
    width:'4%',
    height: '60%',
    resizeMode: 'cover',
    top: '1.6%',
  },
  
  });

  export default styles;