import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxB: {
        backgroundColor: 'black',
        width: '94%',
        height: RFValue(52),
        marginVertical: RFValue(15),
    },
    boxGL:  {
        paddingHorizontal: RFValue(25),
        paddingVertical: RFValue(15),
        flexDirection: 'row',
      },
    boxRTA: {
        flex: .5,
        top: '30%',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: RFValue(48),
        paddingVertical: RFValue(50),
    },
    textB: {
        width:'100%',
        height: '100%',
        fontSize: RFValue(16),
        fontFamily: 'mt-med',
        color: '#fff',
        marginHorizontal: RFValue(10),
    },
    textRTA: {
        color: '#fff',
        height: '20%',
        top: '5%',
        fontSize: RFValue(21),
        fontFamily: 'mt-med',
        marginHorizontal: RFValue(20),
    },
    text: {
        color: '#fff',
        fontSize: RFValue(14),
        fontFamily: 'mt-reg',
        marginHorizontal: RFValue(25),
        marginVertical: RFValue(25),
        flex: .5,
    },
    One: {
        width:'4%',
        height: '60%',
        resizeMode: 'cover',
        top: '1.6%',
    },
    logo: {
        width:'10%',
        height: '25%',
        flex: 1,
        left: '7%',
    },
  });
  
  export default styles;