// import { cities } from './cities.ts'
import { DistanceCalculator } from "https://deno.land/x/distancecalculator/distance-calculator.ts"
import { cities } from 'https://raw.githubusercontent.com/michael-spengler/cities/master/cities.ts'
import { ICityInfo } from "https://raw.githubusercontent.com/michael-spengler/cities/master/interfaces.ts"
// import { cities } from 'https://deno.land/x/cities/cities.ts'
// import { ICityInfo } from "https://deno.land/x/cities/interfaces.ts"


export class CityService {

    private static minimumPopulation = 40000

    public static getCityInfo(countryCode: string, cityName: string): ICityInfo {
        return cities.filter((city) => city.country === countryCode && city.name === cityName)[0]
    }

    public static getClosestCity(latitude: number, longitude: number, minimumPopulation: number = CityService.minimumPopulation): any {
        let cityWithLowestDistance
        let lowestDistance = 10000000000
        for (const city of cities.filter((entry: any) => entry.population >= minimumPopulation)){
            const distance = DistanceCalculator.getDistanceInKilometers(latitude, longitude, city.lat, city.lon)
            if (distance < lowestDistance) {
                lowestDistance = distance
                cityWithLowestDistance = city
            }
        }
        return cityWithLowestDistance
    }
}