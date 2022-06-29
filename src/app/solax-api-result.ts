export interface SolaxApiResult {
    inverterSN: string, // Unique identifier of inverter(Serial No.) - -
    sn: string, //Unique identifier of communication module(Registration No.) - -
    acpower: number, // i[:].inverter.AC.power.total 1 W
    yieldtoday: number, // i[:].inverter.AC.energy.out.daily 0.1 KWh
    yieldtotal: number, // i[:].inverter.AC.energy.out.total 0.1 KWh
    feedinpower: number, // GCP.power.total 1 W
    feedinenergy: number, // GCP.energy.toGrid.total 0.01 KWh
    consumeenergy: number, // GCP.energy.fromGrid.total 0.01 KWh
    feedinpowerM2: number, // i[:].address2meter.AC.power.total 1 W
    soc: number, // i[:].inverter.DC.battery.energy.SOC 1 %
    peps1: number, // i[:].inverter.AC.EPS.power.R 1 W
    peps2: number, // i[:].inverter.AC.EPS.power.S 1 W
    peps3: number, // i[:].inverter.AC.EPS.power.T 1 W
    inverterType: string, // Inverter type, details refer to Table 4 in appendix - -
    inverterStatus: string, // Inverter status, details refer to Table 5 in appendix - -
    uploadTime: string, // Update time (format 2016-10-26 17:33:01)
}
