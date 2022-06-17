export interface SolaxRealTimeData {
    method: string;
    version: string;
    type: string;
    SN: string;
    Data: [number];
    Status: string;
}

export interface SolaxRealTimeDataKeyEntry {
    index: number;
    category: string;
    name: string;
    exampleValue: number;
}

export const SolaxRealTimeDataKeys: Array<SolaxRealTimeDataKeyEntry> = [
    { index: 0, category: 'PV', name: 'PV1 Current', exampleValue: 0.4 },
    { index: 1, category: 'PV', name: 'PV2 Current', exampleValue: 0.3 },
    { index: 2, category: 'PV', name: 'PV1 Voltage', exampleValue: 200.3 },
    { index: 3, category: 'PV', name: 'PV2 Voltage', exampleValue: 208 },
    { index: 4, category: 'Grid', name: 'Output Current', exampleValue: 2.4 },
    { index: 5, category: 'Grid', name: 'Network Voltage', exampleValue: 233.8 },
    { index: 6, category: 'Grid', name: 'Power', exampleValue: 532 },
    { index: 8, category: 'Inverter Yield', name: 'Today', exampleValue: 17.1 },
    { index: 9, category: 'Inverter Yield', name: 'This Month', exampleValue: 238.4 },
    { index: 10, category: 'Grid', name: 'Feed in Power', exampleValue: -19 },
    { index: 11, category: 'PV', name: 'PV1 Input Power', exampleValue: 80 },
    { index: 12, category: 'PV', name: 'PV2 Input Power', exampleValue: 62 },
    { index: 13, category: '', name: 'Battery Voltage', exampleValue: 55.68 },
    { index: 14, category: '', name: 'Dis/Charge Current', exampleValue: -8.68 },
    { index: 15, category: '', name: 'Battery Power', exampleValue: -484 },
    { index: 16, category: '', name: 'Battery Temperature', exampleValue: 27 },
    { index: 17, category: '', name: 'Remaining Capacity', exampleValue: 89 },
    { index: 19, category: 'Battery Yield', name: 'Total', exampleValue: 126.1 },
    { index: 41, category: 'Grid', name: 'Exported', exampleValue: 373.9 },
    { index: 42, category: 'Grid', name: 'Imported', exampleValue: 38.6 },
    { index: 50, category: 'Grid', name: 'Frequency', exampleValue: 49.96 },
];
