import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';

import Home from './components/Home';
import Form from './components/Form';
import Cart from './components/Cart';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            title: 'Your App Title',
            headerRight: () => (
              <View style={styles.headerRightContainer}>
                <MaterialCommunityIcons
                  name="cart"
                  size={30}
                  color="white"
                  onPress={() => navigation.navigate('Cart')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen name="Details" component={Form} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerRightContainer: {
    marginRight: 16,
  },
});

export default App;
