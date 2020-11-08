import React from 'react'
import { useCountry } from '../countryContext'

export function CountryCard() {
  const [state] = useCountry()
  return <div>{state.country}</div>
}
