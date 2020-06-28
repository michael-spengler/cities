import { CityService } from "https://raw.githubusercontent.com/michael-spengler/cities/master/cityservice.ts"
import { ICityInfo } from "./interfaces.ts"
// import { CityService } from "https://deno.land/x/cities/cityservice.ts"

const cityName = 'Heidelberg'
const countryCode = 'DE'

const cityInfo: ICityInfo = CityService.getCityInfo(countryCode, cityName)

console.log(`\nI found the following info for ${cityName} in ${countryCode}: \n${JSON.stringify(cityInfo)}\n`)


const placeOnEarth = {
    latitude: 49.488462,
    longitude: 8.5412433
}

const minPop = 1000000
const closestCity = CityService.getClosestCity(placeOnEarth.latitude, placeOnEarth.longitude, minPop)

console.log(`\nThe closest city to this place is: \n${JSON.stringify(closestCity)}\n`)