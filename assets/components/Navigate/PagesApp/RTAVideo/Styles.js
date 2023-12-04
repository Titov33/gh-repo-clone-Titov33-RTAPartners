import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '5%',
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: '100%',
    resizeMode: 'stretch',
    flex: 1,
  },
  boxB: {
    backgroundColor: 'black',
    width: '94%',
    height: RFValue(52), 
    zIndex: 1,
  },
  boxGL:  {
    top: '5%',
    left: '15%',
    flexDirection: 'row',
    paddingHorizontal: RFValue(25),
    paddingVertical: RFValue(3),
  },
  box: {
    top: '-2%',
    height: RFValue(20),
    marginVertical: RFValue(20),
    left: RFValue(55),
  },
  textB: {
    width:'100%',
    height: '100%',
    fontSize: RFValue(16),
    fontFamily: 'mt-med',
    color: 'black',
    top: '-10%',
    marginHorizontal: RFValue(10),
  },
  text1: {
    color: 'black',
    fontSize: RFValue(16),
    fontFamily: 'mt-reg',
    left: '8%',
    marginVertical: RFValue(20),
  },
  text2: {
    color: 'black',
    fontSize: RFValue(12),
    fontFamily: 'mt-reg',
    left: '8%',
    marginVertical: RFValue(20),
  },
  OneU: {
    width:'5%',
    height: '26%',
    resizeMode: 'cover',
  },
  OneO: {
    width:'4%',
    height: '28%',
    resizeMode: 'cover',
  },
  One: {
    width:'100%',
    height: '100%',
    resizeMode: 'cover',
  },
  OneContainer: {
    top: '90%',
    left: '-7%',
    width:'4%',
    height: '80%',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: RFValue(1),
    marginVertical: RFValue(7),
    left: '5%',
    width: '89%',
  },
});  

  export default styles;