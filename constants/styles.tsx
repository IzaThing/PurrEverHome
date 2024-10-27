import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const styles = StyleSheet.create({
  page_standalone: {
    backgroundColor: Colors.light.container,
    height: "100%",
  },
  page: {
    backgroundColor: Colors.light.background,
    height: "100%",
  },
  home_container:{
    backgroundColor: Colors.light.container,
    marginTop: 48,
    padding: 24,
    height: "100%",
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64
  },
  text_light: {
    color: Colors.light.text,
    fontSize: 16,
  },
  Regpage:{
    backgroundColor: Colors.reg.background,
    height: "100%",
  },
  loginpage:{
    backgroundColor: Colors.log.background,
    height: "100%",
  },
  whitebox:{
    backgroundColor:Colors.reg.View,
    height:"35%",
    marginTop:0,
    borderRadius:20,
    marginHorizontal:16,
  },
  heading:{
    margin:10,
    fontSize:40,
    fontWeight:"bold",
  },
  txtinput:{
    flexDirection:"row",
    borderBlockColor:Colors.reg.txtinput,
    borderWidth:2,
    height:50,
    borderRadius:25,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    padding:6,
  },
  regbtn:{
    backgroundColor:  Colors.reg.Button,
    borderRadius:20,
    height:50,
    width:300,
    justifyContent:"center",
    alignSelf:"center",
    marginTop:20,
  },
  logbtn:{
    backgroundColor:  Colors.log.Button,
    borderRadius:20,
    height:50,
    width:300,
    justifyContent:"center",
    alignSelf:"center",
    marginTop:50,
  },
  txtbtn:{
    fontWeight:"bold",
    alignSelf:"center",
    color:Colors.reg.regtxtbtn,
  },
  logo:{
    height:20,
    width:20,
  },
  forgtp:{
    fontSize:10,
    color:Colors.log.fgtp,
    alignSelf:"flex-end",
    paddingRight:20,
  },
  Purrtext:{
    fontSize:24,
    fontWeight:"bold",
    color: Colors.land.purclr,
    alignSelf:"center",
    marginTop:30,
  },
  tagtex:{
    color:Colors.land.tagtxt,
    alignSelf:"center",
  },
  adpttext:{
    fontSize:30,
    fontWeight:"bold",
    color: Colors.land.purclr,
    alignSelf:"center",
    marginTop:30,
    marginBottom:30,
  },
  appLogo:{
    width:300,
    height:300,
    alignSelf:"center",
    marginTop:50,
  },
  authLogo:{
    width:200,
    height:200,
    alignSelf:"center",
    marginBottom: "-10%"
  },
});

export default styles;
