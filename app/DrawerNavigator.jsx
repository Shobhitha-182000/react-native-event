 
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Display from './Display';
import AddEventScreen from './AddEventScreen';
import AboutScreen from './AboutScreen';
import LogoutScreen from './LogoutScreen';
import CustomDrawerContent from './CustomDrawerContent';
import AllEvents from './AllEvents';
 
import TestDateTimePicker from './TestDateTimePicker';
import Example from './Example';
import Profit from './Profit';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
 
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Events" component={AllEvents} />
      <Drawer.Screen name="Add Events" component={AddEventScreen} />
      <Drawer.Screen name="Booking" component={Profit} />
    </Drawer.Navigator>
 
);

export default DrawerNavigator;
