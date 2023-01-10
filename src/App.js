import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Hooks} from "./Hooks";
import {Forms} from "./Forms";
import {Images} from "./Images";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import fontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

//We can use stack to move from screens to screen or the tab
//But the tab navigator is the most used, so
//We just replace stack to tab

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const TopNav = createMaterialTopTabNavigator();
export default function App() {

  return (
      <NavigationContainer>
        <TopNav.Navigator
            screenOptions={({route})=>({
                tabBarIcon : ({focused,size,color})=>{
                    let iconName;

                    if(route.name === 'home'){
                        iconName = 'home';
                        size = focused ? 25 : 20;
                        color= focused ? 'blue' : 'black';
                    }else if (route.name === 'hooks'){
                        iconName = 'suitcase';
                        size = focused ? 25 : 20;
                        color= focused ? 'blue' : 'black';
                    }
                    return <FontAwesome5
                        size={size}
                        name={iconName}
                        color={color}
                    />
                }
            })}
            tabBarOptions={{
                labelStyle:{fontSize:20}
            }}

            initialRouteName="home">
            <TopNav.Screen name="home" component={Images} />
            <TopNav.Screen name="hooks" component={Hooks}/>
        </TopNav.Navigator>
      </NavigationContainer>
  );
}

