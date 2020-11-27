import React, { createContext, useState } from 'react';

interface Search{
    query: String,
    setQueryValue(value: string): void,
}

const SearchContext = createContext<Search>({} as Search);

export const SearchProvider: React.FC = ({ children }) => {
    const [query, setQuery] = useState<string>('');

    function setQueryValue(value: string){
        setQuery(value);
    }

    return (
        <SearchContext.Provider value={{ query, setQueryValue }}>
            {children}
        </SearchContext.Provider>

    );
};

export default SearchContext;

