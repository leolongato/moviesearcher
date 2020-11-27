import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { SearchProvider } from './SearchContext';

const App: React.FC = () =>(
    <NavigationContainer>
        <SearchProvider>
            <StatusBar barStyle="light-content" backgroundColor="#2D3142"/>
            <SafeAreaView style={{flex: 1}}>
                <Routes />
            </SafeAreaView> 
        </SearchProvider>
    </NavigationContainer>
)

export default App;