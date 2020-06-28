import { CityService } from "https://raw.githubusercontent.com/michael-spengler/cities/master/cityservice.ts"
// import { CityService } from "https://deno.land/x/cities/cityservice.ts"
// import { CityService } from "./cityservice.ts"

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