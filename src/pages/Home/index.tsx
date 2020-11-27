import React, { useEffect, useState, useContext } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Container, MovieBanner } from './styles';
import apiMovies from '../../api/movies'

import SearchContext from '../../SearchContext';

import { HeaderHeightContext } from '@react-navigation/stack';
interface MovieProps{
    page: Number,
    results: [],
    total_results: Number,
    total_pages: Number,
}
interface MovieResults{
    poster_path: String,
    adult: Boolean,
    overview: String,
    release_date: String,
    genre_ids: Array<Number>,
    id: Number,
    original_title: String,
    original_language: String,
    title: String,
    backdrop_path: String,
    popularity: Number,
    vote_count: Number,
    video: Boolean,
    vote_average: Number,
}

const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "100%",
          backgroundColor: "#2D3142",
        }}
      />
    );
  }

const Home: React.FC = () => {
    const [movies, setMovies] = useState<MovieProps>({} as MovieProps);
    const [results, setResults] = useState<MovieResults[]>([]);
    var reqResult: Array<MovieResults> = [];

    const { query } = useContext(SearchContext);

    const params = {
        page: '1',
        query,
        language: 'pt-br'
    };

    useEffect(() => {
        apiMovies.get<MovieProps>('', { params }).then(response => {
            if(response.data){
                setMovies(response.data);
                 if (response.data.total_results > 0)
                    reqResult = response.data.results;
                    const filteredResult = reqResult.filter(f => f.poster_path !== null);
                    setResults(filteredResult);
            }
        })
    }, [query])

    return(
        <>
            <Container>
                {                    
                    movies.total_results === 0 ? <ActivityIndicator style={{flex: 1}} size="large" color="#EAE8FF"/>
                     : 
                     <HeaderHeightContext.Consumer>
                        {headerHeight => (
                        <FlatList 
                            data={results}
                            keyExtractor={results => results.id.toString()}
                            ItemSeparatorComponent={FlatListItemSeparator}
                            style={{marginTop: headerHeight }}
                            numColumns={3}
                            renderItem={ ({ item: result }) => (
                                <MovieBanner source={{ uri: `https://image.tmdb.org/t/p/w500//${result.poster_path}`}} /> 
                            )}
                        >
                        </FlatList>
                    )}
                    </HeaderHeightContext.Consumer>  
                }
            </Container>
        </>
    )
}

export default Home;