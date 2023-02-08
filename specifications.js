const specifications = {
    "Battery": {
        "BMW": {
            "1 Series": ["DIN100L"],
            "2 Series": ["DIN100L"],
            "3 Series": ["DIN100L"],
            "5 Series": ["DIN100L"],
            "7 Series": ["DIN100L"]
        },
        "Ford": {
            "Escape": ["NS70L (65D26L)"],
            "Everest": ["95D31R"],
            "Fiesta": ["DIN55L"],
            "Focus": ["DIN74L"],
            "Kuga": ["(55D23L / 85D23L)"],
            "Lynx": ["(55D23L / 85D23L)"],
            "Ranger 2.2/2.5": ["DIN74L"],
            "Ranger 3.2": ["DIN80L"],
            "Transit": ["95D31R"]
        },
        "Honda": {
            "Accord": ["NS60LS (46B24LS / 55B24LS)"],
            "City": ["NS40ZL (38B20L / 46B19L) / NS60L (46B24L / 55B24L)"],
            "Civic EG (1992 - 1995)": ["NS60RS (46B24RS)"],
            "Civic EK (1996 - 2000)": ["NS60LS (46B24LS / 55B24LS)"],
            "Civic EM (2001 - 2005)": ["NS60RS (46B24RS)"],
            "Civic FD (2005 - 2011)": ["NS60LS (46B24LS / 55B24LS)"],
            "Civic FD Hybrid": ["NS40ZL (38B20L / 46B19L)"],
            "Civic FB": ["NS60LS (46B24LS / 55B24LS)"],
            "CRV": ["NS60LS (46B24LS / 55B24LS)"],
            "CRZ": ["NS40ZL (38B20L / 46B19L)"],
            "Freed": ["NS40ZL (38B20L / 46B19L)"],
            "HRV": ["NS60LS (46B24LS / 55B24LS)"],
            "Insight": ["NS40ZL (38B20L / 46B19L)"],
            "Integra": ["NS60 (46B24R)"],
            "Jazz / Jazz Hybrid": ["NS40ZL (38B20L / 46B19L)"],
            "Odyssey": ["NS60L (46B24L)"],
            "Stream": ["(55D23L / 85D23L) / NS70L (65D26L)"]
        },
        "Nissan": {
            "Cefiro": ["NS70L (65D26L)"],
            "Elgrand": ["(55D23L / 85D23L)"],
            "Frontier": ["(95D31R)"],
            "Grand Livina": ["NS60L (46B24L / 55B24L)"],
            "Latio": ["NS60L (46B24L / 55B24L)"],
            "Murano": ["(55D23L / 85D23L)"],
            "Navara": ["NS70L (65D26L)"],
            "Sentra": ["NS70L (65D26L)"],
            "Serena": ["NS70L (65D26L)"],
            "Serena Hybrid (Big Battery)": ["Q85"],
            "Serena Hybrid (Small Battery)": ["NS40ZL (38B20L / 46B19L)"],
            "Skyline R34": ["NS60L (46B24L / 55B24L)"],
            "Skyline R35": ["NS60L (46B24L / 55B24L)"],
            "Sylphy (2006 - 2013)": ["NS60L (46B24L / 55B24L)"],
            "Sylphy (2014 - 2017)": ["(55D23L / 85D23L)"],
            "Teana": ["(55D23L / 85D23L)"],
            "Urvan": ["(95D31R)"],
            "Vannet Van": ["NS60RS (46B24RS)"],
            "X-Gear": ["(55D23L / 85D23L)"],
            "X-Trail": ["(55D23L / 85D23L)"]
        },
        "Perodua": {
            "Alza": ["NS40ZL (38B20L / 46B19L)"],
            "Axia": ["NS40ZL (38B20L / 46B19L)"],
            "Bezza": ["NS40ZL (38B20L / 46B19L)"],
            "Bezza (start-stop)": ["M42L (50B20L)"],
            "Kancil": ["NS40ZL (38B20L / 46B19L)"],
            "Kelisa": ["NS40ZL (38B20L / 46B19L)"],
            "Kembara": ["NS40ZL (38B20L / 46B19L)"],
            "Kenari": ["NS40ZL (38B20L / 46B19L)"],
            "Myvi": ["NS40ZL (38B20L / 46B19L)"],
            "Myvi GEN3 (start-stop)": ["M42L (50B20L)"],
            "Rusa": ["NS40ZL (38B20L / 46B19L)"],
            "Viva": ["NS40ZL (38B20L / 46B19L)"]
        },
        "Proton": {
            "Arena": ["NS60RS (46B24RS) / NS70 (65D26R)"],
            "Exora": ["(55D23L / 85D23L)"],
            "GEN 2": ["DIN55R"],
            "Inspira": ["(55D23L / 85D23L)"],
            "Iriz": ["NS60RS (46B24RS)"],
            "Iswara": ["NS60LS (46B24LS / 55B24LS)"],
            "Juara": ["NS40ZL (38B20L / 46B19L)"],
            "Perdana": ["NS70 (65D26R))"],
            "Persona": ["DIN55R"],
            "Persona (2017 Models)": ["NS60RS (46B24RS)"],
            "Preve": ["(55D23LS / 85D23LS)"],
            "Putra": ["NS60RS (46B24RS) / NS70 (65D26R)"],
            "Saga BLM/FLX/SV": ["NS60RS (46B24RS)"],
            "Satria": ["NS60RS (46B24RS) / NS70 (65D26R)"],
            "Satria NEO": ["DIN55R"],
            "Savvy": ["NS60LS (46B24LS / 55B24LS)"],
            "Suprima S": ["(55D23L / 85D23L)"],
            "Tiara": ["DIN55R"],
            "Waja": ["NS60LS (46B24LS / 55B24LS) / NS70L (65D26L)"],
            "Wira": ["NS60RS (46B24RS) / NS70 (65D26R)"]
        },
        "Toyota": {
            "Alphard": ["(55D23L / 85D23L)"],
            "Altis (2008 - 2017)": ["NS60LS (46B24LS / 55B24LS)"],
            "Altis (BEFORE 2007)": ["NS40ZL (38B20L / 46B19L)"],
            "Avanza": ["NS60 (46B24R)"],
            "Camry": ["(55D23L / 85D23L)"],
            "Estima": ["(55D23L / 85D23L)"],
            "Harrier": ["(55D23L / 85D23L)"],
            "Hiace Diesel": ["(95D31R)"],
            "Hiace Petrol": ["NS70 (65D26R)"],
            "Hilux": ["(95D31L)"],
            "Unser": ["NS70 (65D26R)"],
            "Vellfire": ["(55D23L / 85D23L)"],
            "Vios (2002 - 2006)": ["NS60RS (46B24RS)"],
            "Vios (2007 - CURRENT)": ["NS60LS (46B24LS / 55B24LS)"]
        },
        "Volkswagen": {
            "Beetle": ["DIN55L"],
            "Golf GTI": ["DIN74L"],
            "Jetta": ["DIN55L"],
            "Passat": ["DIN74L"],
            "Polo": ["DIN55L"],
            "Scirocco": ["DIN74L"],
            "Sharan": ["DIN74L"],
            "Touran": ["DIN74L"],
            "Touareg": ["DIN100L"]
        }
    },
    // "Belt": { 

    // },
    // "Brake Fluid": {

    // },
    "Bulb": {
        "Proton": {
            "Perdana": ["D26R (Defaults)", "75D26R (Varta)", "90D26R (Century)"],
            "Preve (No turbo)": ["H7 (Defaults Lamp)"]
        }
        //headlights, upper/lower beam, position lamps, front turn-signal lamps, front fog lamps, rear turn-signal, reversing lamps,
        //high mounted stop lamp, stop and tail lamps, license-plate lamps
    },
    // "Coolant": {

    // },
    "Engine Oil": {

    },
    "Gear Oil": {

    },
    "Differential Gear Oil": {

    },
    "Spark Plugs": {
        "Proton": {
            "GEN-2 1.3/1.6": ["BPR6EF-11 (NGK)", "IT20 (Denso)"],
            "Perdana V6": [" (NGK)", "IK20 (Denso)"],
            "Arena 1.5": [" (NGK)", "IK20 (Denso)"],
            "X70 1.8": [" (NGK)", "IK20 (Denso)"],
            "Exora 1.6": [" (NGK)", "IK20 (Denso)"],
            "Exora Bold 1.6 CFE Turbo": [" (NGK)", "IK20 (Denso)"],
            "Iswara 1.3/1.5": [" (NGK)", "IK20 (Denso)"],
            "Iriz 1.3/1.6 VVT": [" (NGK)", "IK20 (Denso)"],
            "Juara 1.1": [" (NGK)", "IK20 (Denso)"],
            "Persona 1.6": [" (NGK)", "IK20 (Denso)"],
            "[NEW] Persona 1.6 VVT": [" (NGK)", "IK20 (Denso)"],
            "Preve 1.6": [" (NGK)", "IK20 (Denso)"],
            "Preve 1.6 CFE Turbo": [" (NGK)", "IK20 (Denso)"],
            "Putra 1.8": [" (NGK)", "IK20 (Denso)"],
        }
    },
    // "Tyre": {

    // },
    "Wiper": {
        "Continental Car Clip": {
            "Ford Fiesta": ["26”/16” (Front Pair),  (Rear)"]
        },
        "Pin": {
            "Proton Iswara": [" (Rear)"]
        },
        "Special Adapter/Button/Clip": {
            "Ford Ranger T7": ["24”/16” (Front Pair),  (Rear)"],
            "Honda Civic 06' - 08'": [" (Front Pair),  (Rear)"],
            "Lexus RX300": ["26”/21” (Front Pair),  (Rear)"],
            "Mazda CX5 2018": ["24”/18” (Front Pair),  (Rear)"],
            "Myvi 2018": ["22”/16” (Front Pair),  (Rear)"],
            "Proton Iriz/Persona 2016>": ["24”/16” (Front Pair),  (Rear)"],
            "Proton X50": ["24”/18” (Front Pair),  (Rear)"],
            "Proton X70": ["24”/17” (Front Pair),  (Rear)"],
            "Subaru XV 2019": ["26”/16” (Front Pair),  (Rear)"],
            "Toyota Lexus NX300": ["26”/16” (Front Pair),  (Rear)"],
            "Toyota Vellfire AGH30 2015-2019": ["30”/14” (Front Pair),  (Rear)"],
        }
    },
}

exports.specifications = specifications

//LEGENDS
// "ITEM": {
//     "CAR BRAND": {
//         "CAR MODEL": ["ITEM NUMBER (BRAND)", "ITEM NUMBER (BRAND)"],
//     }
// }