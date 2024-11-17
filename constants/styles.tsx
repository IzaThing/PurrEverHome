import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const styles = StyleSheet.create({
  notifsbackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(101, 136, 230, 0.7)', // semi-transparent background
  },
  notifsmodal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: 325,
  },
  notifstext: {
    color: 'black',
    fontFamily: "Inter_800ExtraBold",
    textAlign: 'left',
    fontSize: 30,
    marginBottom: 30
  },
  
  categ_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: -5
  },
  categ_button: {
    backgroundColor: '#FFF7DF',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  categ_text: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold"
  },
  nocontent: {
    width:200,
    height:200,
    alignSelf:"center",
  },
  logout: {
    flex: 1, 
    flexDirection: "row", 
    marginTop:80, 
    alignItems: "center", 
    justifyContent: "center"
  },
  avatar: {
    width:100,
    height:100,
    alignSelf:"center",
    marginBottom: "-10%"
  },
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
    marginTop: 10, //changed
    padding: 24,
    height: "103%", //changed
    borderTopLeftRadius: 50, //changed
    borderTopRightRadius: 50 //changed
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
    flex: 1,
  },
  whitebox:{
    backgroundColor:Colors.reg.View,
    borderRadius:20,
    marginHorizontal:16,
    paddingBottom: 20,
  },
  heading:{
    margin:10,
    fontSize:40,
    fontFamily: "Inter_800ExtraBold", 
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
    alignSelf:"center",
    color:Colors.reg.regtxtbtn,
    fontFamily: "Inter_500Medium"
  },
  logo:{
    height:20,
    width:20,
  },
  forgtp:{
    fontSize:12,
    color:Colors.log.fgtp,
    alignSelf:"flex-end",
    paddingRight:10,
    width: 120, //changed
    fontFamily: "Inter_500Medium"
  },
  Purrtext:{
    fontSize:24,
    fontFamily: "Inter_800ExtraBold", 
    color: Colors.land.purclr,
    alignSelf:"center",
    marginTop:30,
  },
  tagtex:{
    color:Colors.land.tagtxt,
    alignSelf:"center",
    fontFamily: "Inter_500Medium"
  },
  adpttext:{
    fontSize:30,
    color: Colors.land.purclr,
    alignSelf:"center",
    marginTop:30,
    marginBottom:30,
    fontFamily: "Inter_800ExtraBold"
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
