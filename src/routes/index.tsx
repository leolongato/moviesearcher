import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchContext from '../SearchContext';

import Home from '../pages/Home';
import Details from '../pages/Details';
import SearchBar from '../components/SearchBar';

const Search = createStackNavigator();

const SearchRoutes: React.FC = () => (
    <Search.Navigator 
        screenOptions={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: '#D8D5DB',
            cardStyle: { backgroundColor: '#2D3142' },
        }}
    >
        <Search.Screen name="Home" component={Home} options={{
            header: () => ( <SearchBar />),
        }}/>
        <Search.Screen name="Details" component={Details} />
    </Search.Navigator>
);

export default SearchRoutes;