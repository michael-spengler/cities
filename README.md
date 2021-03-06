# Cities Module

Provides data about cities with a population of about 40000+ inhabitants.
Including smaller Cities soon. Performance Trade Of? Feedback = welcome

## Usage example for your code

```

import { CityService } from "https://deno.land/x/cities/cityservice.ts"

const cityName = 'Heidelberg'
const countryCode = 'DE'

const cityInfo = CityService.getCityInfo(countryCode, cityName)

console.log(`\nI found the following info for ${cityName} in ${countryCode}: \n${JSON.stringify(cityInfo)}\n`)


const minInhabitants = 50000
const maxInhabitants = 200000
const specificCitiesInCountry = CityService.getCitiesByCountryCode(countryCode, minInhabitants, maxInhabitants)
console.log(`\nI found ${specificCitiesInCountry.length} cities with the Country Code ${countryCode} matching your criteria\n`)

const specificCities = CityService.getCitiesByPopulation(minInhabitants, maxInhabitants)
console.log(`\nI found ${specificCities.length} cities matching your criteria\n`)


const placeOnEarth = {
    latitude: 49.488462,
    longitude: 8.5412433
}

const closestCity = CityService.getClosestCity(placeOnEarth.latitude, placeOnEarth.longitude, minInhabitants)

console.log(`\nThe closest city to this place with at least ${minInhabitants} inhabitants is: \n${JSON.stringify(closestCity)}\n`)


```

## Test it via command line
```
deno run https://deno.land/x/cities/test-it.ts
```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.
  

## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
