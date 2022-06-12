declare module 'weather-promise'

export const findUrl: string;
export const defResCount: number;
export const defTimeout: number;

export interface Options {
    search: string;
    degreeType?: string;
    lang?: string;
    timeout?: number;
    resCount?: number;
}

export interface Results {
    location: {
        name: string;
        zipcode: string;
        lat: number;
        long: number;
        timezone: number;
        alert: string;
        degreetype: string;
        imagerelativeurl: string;
    },
    current: {
        temperature: number;
        skycode: number;
        skytext: string;
        date: string;
        observationtime: string;
        observationpoint: string;
        feelslike: number;
        humidity: number;
        winddisplay: string;
        day: string;
        shortday: string;
        windspeed: string;
        imageUrl: string;
    },
    forecast: [{
        low: number;
        high: number;
        skycodeday: number;
        skytextday: string;
        date: string;
        day: string;
        shortday: string;
        precip: number;
    }]
}

export function FindCallback(err: string, results?: Results[]): void;

export function find(ops: Options, callback?: typeof FindCallback): Promise<Results[]>;
