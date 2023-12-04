import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; // RFPercentage - значение в %
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boxB: {
    backgroundColor: "black",
    width: "94%",
    height: RFValue(52),
  },
  boxGL: {
    paddingHorizontal: RFValue(30),
    paddingVertical: RFValue(15),
    flexDirection: "row",
  },

  boxSI: {
    paddingHorizontal: RFValue(50),
    marginVertical: RFValue(20),
  },
  text: {
    color: "black",
    fontSize: RFValue(12),
    fontFamily: "mt-reg",
    marginVertical: RFValue(5),
    paddingHorizontal: RFValue(27),
    top: "-6%",
  },
  textR: {
    width: "100%",
    height: "100%",
    fontSize: RFValue(16),
    fontFamily: "mt-med",
    marginHorizontal: RFValue(10),
  },
  OneR: {
    width: "4%",
    height: "60%",
    top: "1.6%",
  },
  OneST: {
    width: "100%",
    height: "100%",
    marginVertical: RFValue(15),
  },
  Strelkacontainer: {
    width: "4%",
    height: "5%",
    top: "-2%",
    left: "8%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: RFValue(1),
    marginVertical: RFValue(10),
    left: "5%",
    width: "89%",
    top: "-4%",
  },
  spaceInput: {
    top: "-7 %",
    paddingHorizontal: RFValue(50),
    marginVertical: RFValue(10),
  },
  spase: {
    marginVertical: RFValue(5),
  },
});

export default styles;
