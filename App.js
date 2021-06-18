import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Listado from './components/listado';
import Detalle from './components/detalle';
import Login from './components/Login';
import Settings from './components/Settings';
import Video from './components/Video';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const LogoTitle2 = () => {
    return (
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('./img/hola.png') }
          style={{height: 30, width: 30, borderRadius: 300/ 2, }}
        />
      </View>
    );
  };
  function ListaStack() {
    return (
      <Tab.Navigator
        tabBarOptions={{
        }}>
        <Tab.Screen
          name="Listado"
          component={Listado}
          options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="text-box"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarLabel: 'Video',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="video" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Ajustes',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Listado"
          component={ListaStack}
          options={{
            detachPreviousScreen: true,
            header: props => <LogoTitle2 {...props} />,
          }}
        />
        <Stack.Screen
          name="Detalle"
          component={Detalle}
          options={({route}) => ({name: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',

  },
});
