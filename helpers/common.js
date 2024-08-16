import { Dimensions } from "react-native";

const {width:deviceWidth,height:deviceHight}=Dimensions.get('window')

const hp=percentage=>{
    return (percentage*deviceHight)/100;
}
const wp=percentage=>{
    return (percentage*deviceWidth)/100;
} 