export interface ICityInfo {

    cityId: number,
    name: string,
    altName: string,
    country: string,
    featureCode: string,
    adminCode: string,
    population: number,
    loc: ILoc,
    muni: string,
    muniSub: string
}

export interface ILoc {
    type: string,
    coordinates: number[]
}
