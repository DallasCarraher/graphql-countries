import React from 'react';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';
import { useCountry } from '../countryContext';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export function CountrySelect() {
    const [country, setCountry] = React.useState('US');
    const [, dispatch] = useCountry();
    const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});
  
    const onCountryChange = value => {
      console.log(value);
      setCountry(value.code);
      dispatch({ type: 'update', value})
    }

    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
  
    return (
      <select value={country} onChange={event => onCountryChange(event.target.value)}>
        {data.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    );
  }