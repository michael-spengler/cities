import * as log from "https://deno.land/std/log/mod.ts";
import { CityService } from "https://deno.land/x/cities/cityservice.ts"

const countryCode = Deno.args[0]
const minPop = (Deno.args[1] === undefined) ? undefined : Number(Deno.args[1])
const maxPop = (Deno.args[2] === undefined) ? undefined : Number(Deno.args[2])

log.info(`getting cities with population from ${minPop} to ${maxPop} in ${countryCode}`)
const specificCitiesInCountry = CityService.getCitiesByCountryCode(countryCode, minPop, maxPop)

for (const city of specificCitiesInCountry){
    log.info(city.name)
}