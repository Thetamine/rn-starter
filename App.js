import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import Ex1Screen from './src/screens/Ex1Screen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Ex1: Ex1Screen,
    List: ListScreen,
    Images: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
