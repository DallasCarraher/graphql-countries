import React from 'react';

const CountryContext = React.createContext();

function countryReducer(state, action) {
    switch (action.type) {
        case 'update': {
            return {country: action.value}
        }
        default: {
            return {country: 'US'}
        }
    }
}

function CountryProvider({children}) {
    const [state, dispatch] = React.useReducer(countryReducer, {country: 'US'});
    return (
        <CountryContext.Provider value={[state, dispatch]}>
            {children}
        </CountryContext.Provider>
    )
}

function useCountry() {
    const context = React.useContext(CountryContext);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context;
}

export {CountryProvider, useCountry};
