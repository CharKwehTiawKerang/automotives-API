const specifications = {
    "Battery": {
        "Audi": {
            //N-55 (AGM)
            "A1": "DIN55L",
            "A1 Sportback": "DIN100L",
            "A3": "DIN100L",
            "A4": "DIN100L",
            "A5 Coupe": "DIN100L",
            "A5 Sportback": "DIN100L",
            "A6": "DIN100L",
            "A7 Sportback": "DIN100L",
            "A8": "DIN100L",
            "Q3": "DIN70L / LN3"
        },
        "BMW": {
            "1 Series": "DIN100L",
            "2 Series": "DIN100L",
            "3 Series": "DIN100L",
            "5 Series": "DIN100L",
            "7 Series": "DIN100L"
        },
        //Chevrolet
        "Ford": {
            "Escape": "NS70L (65D26L)",
            "Everest": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Fiesta": "DIN55L",
            "Focus": "DIN74L",
            "Kuga": "(55D23L / 85D23L)",
            "Lynx": "(55D23L / 85D23L)",
            "Ranger 2.2/2.5": "DIN74L",
            "Ranger 3.2": "DIN80L",
            "Transit": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)"
        },
        "Honda": {
            "Accord SM4 (1989 - 1994)": "NS70 / 85D26R",
            "Accord SV4 (1993 - 1997)": "NS60LS (46B24LS / 55B24LS)",
            "Accord CF0 (1997 - 2002)": "NS60LS (46B24LS / 55B24LS)",
            "Accord UC1 (2002 - 2007)": "NS60LS (46B24LS / 55B24LS)",
            "Accord CP3 (2007 - 2012)": "55D23L",
            "Accord (2013 - 2017)": "NS60LS (46B24LS / 55B24LS)",
            "Accord (2018 - 2022)": "DIN55L",
            "BRV": "42B20L / NS40",
            "City (1996 - 2001)": "NS60LS / 55B24LS",
            "City (2002 - 2008)": "NS40ZL / 40B20L",
            "City (2013)": "NS60LS / 55B24LS",
            "City (2019)": "NS60LS / 55B24LS",
            "City Hatchback": "42B20L / NS40",
            "Civic EG (1992 - 1995)": "NS60RS (46B24RS)",
            "Civic EK (1996 - 2000)": "NS60LS (46B24LS / 55B24LS)",
            "Civic EM (2001 - 2005)": "NS60RS (46B24RS)",
            "Civic FD (2005 - 2011)": "NS60LS (46B24LS / 55B24LS)",
            "Civic FD Hybrid": "NS40ZL (38B20L / 46B19L)",
            "Civic FB": "NS60LS (46B24LS / 55B24LS)",
            // "Civic Type R": "55B24LS",
            "CRV (1995)": "NS60S / 55B24R",
            "CRV (2001 - 2022)": "NS60LS (46B24LS / 55B24LS)",
            "CRZ": "NS40ZL (38B20L / 46B19L)",
            "Freed": "NS40ZL (38B20L / 46B19L)",
            "HRV": "NS60LS (46B24LS / 55B24LS)",
            "Insight": "NS40ZL (38B20L / 46B19L)",
            "Integra": "NS60 (46B24R)",
            "Jazz / Jazz Hybrid": "NS40ZL (38B20L / 46B19L)",
            "Odyssey": "(55D23L / 85D23L)",
            "Stream": "(55D23L / 85D23L) / NS70L (75D26L / 80D26L)",
        },
        "Hyundai": {
            "Accent": "DIN55L",
            "Atos": "NS40ZL (38B20L / 46B19L)",
            "Coupe": "(55D23L / 85D23L)",
            "Elantra": "DIN55L",
            "Genesis": "DIN100L",
            "Getz": "DIN55L",
            "Grandeur": "NS70L (65D26L)",
            "i10": "NS40ZL (38B20L / 46B19L)",
            "i30": "(55D23L / 85D23L)",
            "Inokom": "NS40ZL (38B20L / 46B19L)",
            "Matrix": "DIN55L",
            "Santafe (Diesel)": "NX120-7L (95D31L) / N70ZL (95D31L) / (105D31L)",
            "Santafe (Petrol)": "NS70L (65D26L)",
            "Sonata": "NS70L (65D26L)",
            "Trajet": "NS70L (65D26L)",
            "Tucson": "NS70L (65D26L)"
        },
        "Kia / Naza": {
            "Caren": "DIN55L",
            "Citra": "DIN55L",
            "Carnival MPV": "NS70L (65D26L)",
            "Pregio": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Rio": "(55D23L / 85D23L)",
            "Sorento Diesel": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Sorento Petrol": "NS70L (65D26L)",
            "Forte": "DIN55L",
            "Cerato K3": "DIN55L",
            "Optima K5": "NS70L (65D26L)",
            "Sephia": "DIN55L",
            "Spectra": "DIN55L"
        },
        "Mazda": {
            //with i-Stop or without i-Stop
            "Biante (with i-Stop)": "Q85",
            "BT50": "DIN74L",
            "CX3": "(55D23L / 85D23L)",
            "CX5": "(55D23L / 85D23L)",
            "CX7": "(55D23L / 85D23L)",
            "CX9": "(55D23L / 85D23L)",
            "Mazda 2 Hatchback (without i-Stop)": "(55D23L / 85D23L)",
            "Mazda 2 Sedan": "NS60LS (46B24LS / 55B24LS)",
            "Mazda 3": "(55D23L / 85D23L)",
            "Mazda 5": "(55D23L / 85D23L)",
            "Mazda 6": "(55D23L / 85D23L)",
            "Mazda 8": "(55D23L / 85D23L)",
            "Premacy": "(55D23L / 85D23L)",
            "RX8": "NS70L (65D26L)"
        },
        "Mitsubishi": {
            "ASX": "(55D23L / 85D23L)",
            "Attrage": "(55D23L / 85D23L)",
            "Galant": "NS70R (75D26R / 80D26R)",
            "Grandis": "(55D23L / 85D23L)",
            "Lancer": "(55D23L / 85D23L)",
            "Mirage": "(55D23L / 85D23L)",
            "Outlander / Airtrek": "NS60LS (46B24LS / 55B24LS)",
            "Pajero": "NX120-7L (95D31L) / N70ZL (95D31L) / (105D31L)",
            "Storm": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Triton": "NX120-7L (95D31L) / N70ZL (95D31L) / (105D31L)",
            "XPander": "NS40ZL (38B20L / 46B19L)"
        },
        "Nissan": {
            "Almera": "NS60L (46B24L / 55B24L)",
            "Cefiro": "NS70L (65D26L)",
            "Elgrand": "(55D23L / 85D23L)",
            "Frontier": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Grand Livina": "NS60L (46B24L / 55B24L)",
            "Latio": "NS60L (46B24L / 55B24L)",
            "Murano": "(55D23L / 85D23L)",
            "Navara": "NS70L (65D26L)",
            "Sentra": "NS70L (65D26L)",
            "Serena": "NS70L (65D26L)",
            "Serena Hybrid (Big Battery)": "Q85",
            "Serena Hybrid (Small Battery)": "NS40ZL (38B20L / 46B19L)",
            "Skyline R34": "NS60L (46B24L / 55B24L)",
            "Skyline R35": "NS60L (46B24L / 55B24L)",
            "Sylphy (2006 - 2013)": "NS60L (46B24L / 55B24L)",
            "Sylphy (2014 - 2017)": "(55D23L / 85D23L)",
            "Teana": "(55D23L / 85D23L)",
            "Urvan": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Vannet Van": "NS60RS (46B24RS)",
            "X-Gear": "(55D23L / 85D23L)",
            "X-Trail": "(55D23L / 85D23L)"
        },
        "Perodua": {
            "Alza": "NS40ZL (38B20L / 46B19L)",
            "Aruz": "M42R (60B20R)",
            "Ativa": "M42L (60B20L)",
            "Axia": "NS40ZL (38B20L / 46B19L)",
            "Bezza": "NS40ZL (38B20L / 46B19L)",
            "Bezza (start-stop)": "M42L (60B20L)",
            "Kancil": "NS40ZL (38B20L / 46B19L)",
            "Kelisa": "NS40ZL (38B20L / 46B19L)",
            "Kembara": "NS40ZL (38B20L / 46B19L)",
            "Kenari": "NS40ZL (38B20L / 46B19L)",
            "Myvi": "NS40ZL (38B20L / 46B19L)",
            "Myvi GEN3 (start-stop)": "M42L (60B20L)",
            "Rusa": "NS40ZL (38B20L / 46B19L)",
            "Viva": "NS40ZL (38B20L / 46B19L)"
        },
        "Peugeot": {
            "206": "DIN55L",
            "206 Coupe": "DIN55L",
            "207": "DIN55L",
            "208 Puretech": "DIN66L / DIN70L / LN3",
            "208 GTi": "DIN55L",
            "305": "DIN55L",
            "308": "DIN55L",
            "405": "DIN55L",
            "406": "DIN66L / DIN70L / LN3",
            "407": "DIN66L / DIN70L / LN3",
            "508": "DIN55L",
        },
        "Proton": {
            "Arena": "NS60RS (46B24RS) / NS70 (65D26R)",
            "Exora": "(55D23L / 85D23L)",
            "GEN 2": "DIN55R",
            "Inspira": "(55D23L / 85D23L)",
            "Iriz": "NS60RS (46B24RS)",
            "Iswara": "NS60LS (46B24LS / 55B24LS)",
            "Juara": "NS40ZL (38B20L / 46B19L)",
            "Perdana": "NS70 (65D26R)",
            "Persona": "DIN55R",
            "Persona (Model 2017)": "NS60RS (46B24RS)",
            "Preve": "(55D23LS / 85D23LS)",
            "Putra": "NS60RS (46B24RS) / NS70 (65D26R)",
            "Saga BLM/FLX": "NS60RS (46B24RS)",
            "Satria": "NS60RS (46B24RS) / NS70 (65D26R)",
            "Satria NEO": "DIN55R",
            "Savvy": "NS60LS (46B24LS / 55B24LS)",
            "Suprima S": "(55D23L / 85D23L)",
            "Tiara": "DIN55R",
            "Waja": "NS60LS (46B24LS / 55B24LS) / NS70L (65D26L)",
            "Wira": "NS60RS (46B24RS) / NS70 (65D26R)",
            "X50": "DIN55L",
            "X70": "DIN66"
        },
        //Renault
        "Subaru": {
            "Forester": "(55D23L / 85D23L)",
        },
        "Suzuki": {
            "Alto": "NS40ZL (38B20L / 46B19L)",
            "Ertiga": "NS40ZL (38B20L / 46B19L)",
            "Swift": "NS40ZL (38B20L / 46B19L)",
            "Swift 2nd/3rd GEN (>= 2010)": "NS60L (46B24L / 55B24L)",
            "Vitara": "(55D23L / 85D23L)"
        },
        "Toyota": {
            "Alphard": "(55D23L / 85D23L)",
            "Altis (2008 - 2017)": "NS60LS (46B24LS / 55B24LS)",
            "Altis (BEFORE 2007)": "NS40ZL (38B20L / 46B19L)",
            "Avanza": "NS60 (46B24R)",
            "Camry": "(55D23L / 85D23L)",
            "Estima": "(55D23L / 85D23L)",
            "Harrier": "(55D23L / 85D23L)",
            "Hiace Diesel": "NX120-7R (95D31R) / N70ZR (95D31R) / (105D31R)",
            "Hiace Petrol": "NS70 (65D26R)",
            "Hilux": "NX120-7L (95D31L) / N70ZL (95D31L) / (105D31L)",
            "Unser": "NS70 (65D26R)",
            "Vellfire": "(55D23L / 85D23L)",
            "Vios (2002 - 2006)": "NS60RS (46B24RS)",
            "Vios (2007 - CURRENT)": "NS60LS (46B24LS / 55B24LS)"
        },
        "Volkswagen": {
            "Beetle": "DIN55L",
            "Golf GTI": "DIN74L",
            "Jetta": "DIN55L",
            "Passat": "DIN74L",
            "Polo": "DIN55L",
            "Scirocco": "DIN74L",
            "Sharan": "DIN74L",
            "Touran": "DIN74L",
            "Touareg": "DIN100L"
        },
        "Volvo": {
            "S40": "DIN80L",
            "S50": "DIN80L",
            "S60": "DIN80L",
            "S70": "DIN80L",
            "XC60": "DIN80L"
        }
    },
    "Bulb Lamp": {
        //H4 = 60/55W (3 Legs)
        //Bulb brake rear / normal rear lamp = 2 PIN
        "Perodua": {
            "Alza": "H7 (Head Lamp - Low Beam & High Beam) / H3 (Fog Lamp)"
        },
        "Proton": {
            "Exora": "H4 (Head Lamp)",
            "Perdana V6": "H4 (Head Lamp)",
        },
        "Nissan": {
            "Sentra (N16)": "H3 (Fog Lamp)"
        }
        //headlights  (upper/lower beam)
        //position lamps
        //front turn-signal lamps
        //front fog lamps
        
        //rear turn-signal
        //reversing lamps
        //high mounted stop lamp (third brake light)
        //stop and tail lamps
        //license-plate lamps

        /*
        //ACCORD
        "(2016 - 2020)": {
            "H11 (55 Watt), HB3 (60 Watt)"
        },
        "(2020 - 2022)": {
            "LED"
        }
        //BRV
        "H11 (55 Watt), HB3 (60 Watt)"
        //JAZZ
        "HB2LL (55 Watt), H4/H4 LL/H4LL (60 Watt)"
        //HRV
        "(2013)": {
            "H11 (55 Watt), HB3 (60 Watt)"
        },
        "(2022)": {
            "LED"
        }
        //CRV
        "H11 (55 Watt), HB3 (60 Watt)"
        //CIVIC TYPE R
        "H11 (55 Watt), HB3 (60 Watt)"
        //CITY
        "H11 (55 Watt), HB3 (60 Watt)"
        //CITY HATCHBACK
        "Non-Hybrid": {
            "H7 (55 Watt) / LED, HB3 (60 Watt) / LED"
        },
        "Hybrid": {
            "LED"
        }
        */
    },
    "Engine Oil": {
        //Racing Cars / High Performance = 0W-40 / 0W-50 / 5W-50 / 10W-50 / 10W-60
        //4X4 Vehicle = 5W-30 / 5W-40 / 10W-40 / 15W-40
        //If Cars Got Leaking = 20W-50 / 15W-40

        //Continental = 5W-30 / 5W-40
        //Japan Cars = 0W-20 (Japanese New Models) / 5W-20 / 5W-30 / 5W-40
        "BMW": {
            //Moden diesel = 0W-40
            "E60 M54 525i": "5W-40 (8 Liter)",
        },
        "Citroen": {
            //5W-30 (Fully) / 5W-40 (Fully) / 10W-40 (Semi) / 15W-40 (Semi)
        },
        "Ford": {
            //5W-20
            //Diesel = 5W-30
        },
        "Honda": {
            "Accord (2016 - 2020)": "0W-30 / 5W-30 (4 Liter)",
            "Accord (2020 - 2022)": "0W-20 / 0W-30 (4 Liter)",
            "BRV": "0W-20 / 0W-30 (4 Liter)",
        },
        "Hyundai": {
            "Elantra (2016)": "5W-40 (4 Liter)",
        },
        "Mazda": {
            "Mazda 2": "0W-20 (4 Liter)",
        },
        "Mini Cooper": {
            //Modern diesel = 0W-40
        },
        "Nissan": {
            "Almera": "5W-30 (4 Liter)",
        },
        "Perodua": {
            "Alza": "5W-30 (4 Liter)",
            "Aruz": "0W-20 (3.5 Liter)",
            "Ativa": "0W-20 (3.5 Liter)",
            "Axia": "0W-20 (3 Liter)",
            "Bezza 1.3 / 1.5": "0W-20 (3.5 Liter)",
            "Kancil": "10W-30 (3 Liter)",
            "Kelisa": "10W-30 (3 Liter)",
            "Kembara": "10W-30 (3 Liter)",
            "Kenari": "10W-30 (3 Liter)",
            "Myvi 1.0 ('05)": "10W-30 (3 Liter)", //1.0 CC Only
            "Myvi 1.3 ('05)": "5W-30 (4 Liter)",
            "Myvi Lagi Best/Icon": "5W-30 (4 Liter)",
            "Myvi 2018": "0W-20 (3.5 Liter)",
            "Nautica": "10W-30 (3 Liter)",
            "Rusa": "10W-30 (3 Liter)",
            "Viva": "10W-30 (3 Liter)"
        },
        "Peugeot": {
            //5W-30 (Fully) / 5W-40 (Fully) / 10W-40 (Semi) / 15W-40 (Semi)
            "Peugeot 408": "5W-30 (5 Liter)",
        },
        "Proton": {
            //5W-30 (Fully) / 10W-30 (Semi) / 15W-40 (Mineral)
            "Arena": "10W-40 / 15W-40 (4 Liter)",
            "Ertiga": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Exora": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "GEN-2 / Persona (Old)": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Inspira": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Iriz": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Juara": "10W-40 / 15W-40 (4 Liter)",
            "Saga (Old) / Iswara": "10W-40 / 15W-40 (4 Liter)",
            "Saga BLM/FL/FLX": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Saga VVT": "5W-30 / 10W-30 / 10W-40 (4 Liter)",
            "Perdana": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Perdana V6": "10W-30 / 10W-40 / 15W-40 (5 Liter)",
            "Persona (2022)": "5W-30 / 10W-30 (4 Liter)", //0w20
            "Preve": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Putra": "10W-40 / 15W-40 (4 Liter)",
            "Satria / Satria NEO": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Savvy": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Suprima S": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Tiara": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Waja": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "Wira": "10W-30 / 10W-40 / 15W-40 (4 Liter)",
            "X50": "5W-30 (5 Liter)",
            "X70": "5W-30 (5 Liter)"
        },
        "Toyota": {
            "Camry 2.0 (2012)": "5W-30 / 10W-40 (4+ Liters)",
            "Estima": "5W-30 / 10W-40",
            "Vellfire": "5W-30 / 10W-40",
            "Vellfire (AGH30 - 2.4)": "5W-30 / 5W-40 / 10W-40 (5 Liter)",
        },
        "Volkswagen": {
            //Light SUV = 5W-30
            "Passat B7 1.8 (2014)": "5W-40 / 10W-40 (4 Liter)",
            "Passat CC 1.8": "5W-40 / 10W-40 (5 Liter)",
        },
        "Volvo": {
            //Diesel = 5W-30
        },
    },
    "Gear/Transmission Oil": {
        /*
            //ATF SP3 / Type-IV = RED COLOR
            //CVTF TC = RED COLOR
            //CVTF J4 / NS-3 = GREEN COLOR = INVECS III Transmissions

            //Toyota Type-IV = D3 SP
            //Toyota FE = Perodua CVT

            //BMW/Jaguar
            //Citroen/Peugeot/Renault
            //Audi/Volkswagen
        */

        "Audi": {
            //Volkswagen Transmission Fluid
        },
        "BMW": {
            /*
            *Depends on model, year, specific transmission system

            ============MANUAL============
            4-Speed (older models):-
            5-Speed & 6-Speed - 75W (GL-4 or lower):-
                BMW MTF LT-1
                BMW MTF LT-2
                BMW MTF LT-3
                BMW MTF LT-4

            ============AUTOMATIC============
            4-Speed & 5-Speed:-
                83 22 0 403 248
                83 22 2 163 514
                83 22 9 407 765
                83 22 9 407 807
                BMW 7045E (3 Series)
                BMW ETL-8072B (5 Series)
                BMW LT71141 (ZF 5 Speed)
            6-Speed:-
                81 22 9 400 272
                81 22 9 400 275
                81 22 9 407 858
                81 22 9 407 859
                82 22 0 024 249
                82 22 0 024 359
                82 22 0 026 922
                82 22 0 142 519
                82 22 0 397 114
                82 22 0 402 413
                82 22 0 403 248
                82 22 0 403 249
                82 22 2 152 426
                82 22 2 289 720
                82 22 2 163 514
                82 22 2 305 397
                82 22 7 542 290
                82 22 9 407 765
                82 22 9 407 807
                BMW ATF-3+
            8-Speed:- (BMW/Jaguar part numbers same)
                83 22 2 167 718
                83 22 2 305 397
                BMW ATF +3               

            ============TIPTRONIC / AUTOMATED MANUAL============ //SPECIAL
            DSG/DCT Fluid:- 
                83 22 2 148 578
                83 22 2 148 579
                83 22 0 440 214
                83 22 2 147 477

            ============CVT============
            83 22 0 429 154
            BMW CVT EZL 799A
            */
        },
        "Citroen": {
            //Esso ATF 9736.22
        },
        "Ford": {
            "Laser": "ATF MV (4 Liters)",
            "Lynx": "ATF MV (4 Liters)",
            "Ranger T6": "ATF Mercon LV (5 Liters)", //8 Liters If Change Filter
            //Ford Focus (2001) - Mercon Dual Clutch (2 Liter)
        },
        "Honda": {
            //CVT HMMF (Multi Matic Fluid) - Odyssey RB1 / Stream RN5 / Jazz 
            "Models With Manual Gears": "Honda MTF (2 Liters)",
            "Accord (2003 - 2019)": "ATF DW-1 (4 Liters)",
            "Accord (>= 2020)": "CVT HCF-2 (3.5 Liters)",
            "BRV": "CVT HCF-2 (3.5 Liters)",
            "City (2005 - 2012)": "ATF DW-1 (4 Liters)",
            "City (> 2012)": "CVT HCF-2 (3.5 Liters)",
            "City Hatchback": "CVT HCF-2 (3.5 Liters)",
            "Civic (2001 - 2015)": "ATF DW-1 (4 Liters)",
            "Civic (> 2016)": "CVT HCF-2 (3.5 Liters)",
            "Civic Type R": "CVT HCF-2 (3.5 Liters)",
            "CRV (2006 - 2017)": "ATF DW-1 (4 Liters)",
            "CRV (2017 - 2019 Non-Turbo)": "CVT HCF-2 (3.5 Liters)",
            "HRV": "CVT HCF-2 (3.5 Liters)",
            "Jazz (2003 - 2013)": "ATF DW-1 (4 Liters)",
            "Jazz (2014 - 2019)": "CVT HCF-2 (3.5 Liters)",
            "Odyssey (> 2014)": "CVT HCF-2 (3.5 Liters)",
            "Most Hybrid Models": "ATF DW-1", //maybe all hybrid models (2 Liters)
        },
        "Hyundai": {
            //ATF SP-III - 4-Speed & 5-Speed
            //ATF MX4 - 4-Speed (Semi) = JWS 3314
            //ATF RED-1 / ATF MATIC-J - 5-Speed
            //ATF SP-IV - 6-Speed
            //ATF MTC & DCTF - 7-Speed
            //ATF SP4M-1 - 8-Speed Hybrid

            "Accent": "ATF SP-III (4 Liters)",
            "Atos": "ATF SP-III (4 Liters)",
            "Elantra (2012 - 2016)": "ATF SP-IV (4 Liters)",
            "i10": "ATF MX4 (4 Liters)",
            "Matrix": "ATF SP-III (4 Liters)",
            "Starex 2.5 (2007 - 2011)": "ATF MATIC-J (4 Liters)",
            "Tucson (2010)": "ATF SP-III (4 Liters)",
        },
        "Kia / Naza": {
            /* 7-Speed
            -HYUNDAI ELANTRA AD 2017 TURBO
            -HYUNDAI VELOSTER 2017 TURBO
            -HYUNDAI TUCSON  2017 TURBO
            -HYUNDAI IONIQ
            */

            "Citra": "ATF SP-III (4 Liters)",
            "Forte": "ATF SP-IV (4 Liters)",
            "Optima K5": "ATF SP-IV (4 Liters)",
            "Picanto": "ATF MX4 (4 Liters)",
            "Sorento 2.5/3.3/3.5/3.8 (2002 - 2009)": "ATF MATIC-J (4 Liters)",
            "Sephia": "ATF SP-III (4 Liters)",
            "Spectra": "ATF SP-III (4 Liters)",
            "Sportage (2012)": "ATF SP-IV (4 Liters)",
            "Sportage Hybrid": "ATF SP4M-1 (4 Liters)",
        },
        "Lexus": {
            //ATF WS
        },
        "Mazda": {
            //ATF FZ = SkyActiv-Drive
            //ATF MV = Non SkyActiv-Drive
            "Non SkyActiv-Drive Models": "ATF MV (4 Liters)",
            "SkyActiv-Drive Models": "ATF FZ (4 Liters)",
        },
        "Mercedes-Benz": {
            
        },
        "Mitsubishi": {
            //Mitsubishi ASX = CVTF J4 - all models/year
            //Mitsubishi Lancer/Proton Inspira = CVTF J4
            //Mitsubishi Outlander (all except under year 2006) = CVTF J4

            //Mitsubishi Models >2012 = CVTF J4
            "ASX": "CVTF J4 (4 Liters)",
            "Attrage": "CVTF J4 (4 Liters)",
            "Galant": "CVTF J4 (4 Liters)",
            "Grandis": "CVTF J4 (4 Liters)",
            "Lancer": "CVTF J4 (4 Liters)",
            "Mirage (> 2012)": "CVTF J4 (4 Liters)",
            "Outlander / Airtrek (< 2006)": "ATF SP3 (4 / 9.2 Liters)",
            "Outlander / Airtrek (> 2006)": "CVTF J4 (4 Liters)",
            "Pajero": "CVTF J4 (4 Liters)",
            "Storm": "CVTF J4 (4 Liters)",
            "Triton (< 2015)": "ATF SP3 (4 Liters)",
            "Triton (> 2015)": "ATF PA (4 Liters)",
            "XPander": ""
        },
        "Nissan": {
            //Matic-D, Matic-S, Matic-J
            //Nissan Models >2012 = CVT NS-3

            //If Change Filter 4 Liters, Gearbox Overhaul 5 Liters
            "Almera (N17)": "ATF Matic-S (3 Liters)",
            "Cefiro (A32/A33)": "ATF Matic-D (4 Liters)",
            "Elgrand": "CVT NS-2 (4 Liters)",
            "Grand Livina": "ATF Matic-D (4 Liters)",
            "Latio": "ATF Matic-D (4 Liters)",
            "Murano Z50": "CVT NS-2 (4 Liters)",
            "NV200": "ATF Matic-D",
            "Sentra": "ATF Matic-D (4 Liters)",
            "Serena (C23/C24)": "ATF Matic-D (4 Liters)",
            "Serena (C26)": "CVT NS-3 (4 Liters)",
            "Sylphy": "CVT NS-2 (4 Liters)",
            "Teana": "CVT NS-3 (4 Liters)",
            "X-Trail (T30)": "ATF Matic-D (4 Liters)",
            "X-Trail (T32)": "CVT NS-3 (4 Liters)",
            
            "Navara (UNKNOWN MODELS)": "ATF Matic-S (7 Liters)",

            // "Qashqai (J11)": "CVT NS-3",
            // "Pathfinder (R52)": "CVT NS-3",
            // "Teana (L33)": "CVT NS-3",
        },
        "Perodua": {
            //Aruz,Myvi 3 Liters Only, Viva 2 Liters Only, If Change Filter 4 Liters
            "Alza (2018)": "ATF D3 SP (4 Liters)",
            "Alza (2022)": "CVT Fluid (4 Liters)",
            "Aruz": "ATF D3 SP (4 Liters)",
            "Ativa": "CVT Fluid (4 Liters)",
            "Axia": "ATF D3 SP (3 Liters)",
            "Bezza": "ATF D3 SP (3 Liters)",
            "Kancil": "ATF D3 (4 Liters)",
            "Kelisa": "ATF D3 (4 Liters)",
            "Kembara": "ATF D3 (4 Liters)",
            "Kenari": "ATF D3 (4 Liters)",
            "Myvi (Old '05)": "ATF D3 (4 Liters)",
            "Myvi (Lagi Best / Icon)": "ATF D3 SP (4 Liters)",
            "Myvi (Golf 2017 - 2020)": "ATF D3 SP (4 Liters)",
            "Myvi (Golf 2021)": "CVT Fluid (4 Liters)",
            "Nautica": "ATF D3 (4 Liters)",
            "Rusa": "GL 4 SAE 80W",
            "Viva": "ATF D3 (4 Liters)"
        },
        "Peugeot": {
            /*
            4HP14 / 4HP18 / 4HP20 / AL4 = 4-Speed
            MB3 = 6-Speed 
            AT6 = Automatic Transmission 6-speed 
            AM6 = Efficient Automatic Transmission 6-speed (more advanced)

            ============MANUAL============
            SAE 75W-80 (GL-4 / GL-5) :- 
                9730 A2 / 9730 A8 2 Liters
                    Example: Specific for CITROËN C1 I & II / PEUGEOT 107 & 108 1.0L Petrol
                16355111 80 (Genuine Peugeot Part Number)
                9730 AG 1 Liters
                    Example: All models except Citroen C1 I & II / Peugeot 107 & 108 1.0L Petrol (between 2012-2015)
                16151000 80 (Genuine Peugeot Part Number)
                    Example: Specific for Peugeot 107/108 1.0L engines before 2012
                HBVFE 2 75W
                16180784 80 (Genuine Peugeot Part Number)
                    Example: Specific for Peugeot 107/108 1.0L engines after 2012
                16350558 80 (Genuine Peugeot Part Number)
                    Example: MMC manual gearboxes for CITROËN C-Crosser/C4 Aircross & PEUGEOT 4007/4008

            ============AUTOMATIC============
            Power steering fluid:-
                ATF 42
                16150995 80 (Genuine Peugeot Part Number)
                    Example: MB3/4HP14/4HP18 / (Specific for models without electropump assembly)
                Fluid DA
                16150997 80 (Genuine Peugeot Part Number)
                    Example: Specific for models with electropump assembly
                    (Do not use if a fluo green mineral fluid is recommended (LHM Plus))
                9735 EX (Genuine Peugeot Part Number)
                    Example: Specific for CITROËN Nemo / Jumper III and PEUGEOT Bipper / Boxer III vehicles
                Huile PSF-2M
                9735 EJ (Genuine Peugeot Part Number)
                    Example: Specific for 4X4 Suv Vehicles
            4-Speed & 5-Speed :- 
                9736.22 (Universal ATF)
                16355109 80 (Genuine Peugeot Part Number) CITROËN – PEUGEOT – RENAULT
                9730 AE (Genuine Peugeot Part Number)
            6-Speed :- 
                ATF 3309
                9730 AF (Genuine Peugeot Part Number)
                    Example: AM6
                ATF JWS 3324
                9734 R7 (Genuine Peugeot Part Number)
                    Example: AM6-2/AM6-3/AT6/AT6-2/AT6-3

            ============TIPTRONIC / AUTOMATED MANUAL============ //SPECIAL
            DSG/DCT Fluid:- (Citroen/Peugeot/Renault part numbers same)
                ATF 42
                9734 S2 (Genuine Peugeot Part Number)
                    Example: DCS6
                9979 A4 (Genuine Peugeot Part Number)
                    Example: MCP/MTA
            
            ============OTHERS============
            Transmission oil for transfer boxes and hypoid axles:-
                Transmission X4
                16150999 80 (Genuine Peugeot Part Number)
                    Example: For private cars and commercial vehicles with 4-wheel drive
            Transmission oil for hybrid:-
                Huile BOT 448
                16562478 80 (Genuine Peugeot Part Number)
                    Example: PHEV hybrid vehicle driveshaft reduction gears
            */
            "Peugeot 407": "Esso ATF 9736.22 (4 Liters)"
        },
        "Proton": {
            "Exora CPS": "ATF SP3 (4.5+ Liters)",
            "Exora CFE (Bold / Turbo)": "CVT (4 Liters)",
            "GEN 2": "ATF SP3 (4 Liters)",
            "Inspira": "CVTF J1",
            "Iriz": "CVT (4 Liters)",
            "Iswara": "ATF SP3 (4 Liters)",
            "Juara": "ATF SP3 (4 Liters)",
            "Perdana V6": "ATF SP3 (4 Liters)",
            "Persona": "ATF SP3 (4 Liters)",
            "Persona VVT": "CVT (4 Liters)",
            "Preve": "CVT (4 Liters)",
            "Saga BLM": "ATF SP3 (4 Liters)",
            "Saga FLX (< 2018)": "CVT (4 Liters)", //Rear have PROTON LOGO
            "Saga VVT (> 2019)": "ATF HTS SP4 (4 Liters)", //Rear have PROTON word written
            "Satria NEO": "ATF SP3 (4 Liters)",
            "Savvy (Auto Transmission)": "ATF Matic D3 (1 Liters), ATF NFJ 75W80 (3 Liters) ELF Brand",
            "Savvy (Manual Transmission)": "ATF NFJ 75W80 (3 Liters) ELF Brand",
            "Suprima S": "CVT (4 Liters)", 
            "Waja": "ATF SP3 (4 Liters)",
            "Wira": "ATF SP3 (4 Liters)",
        },
        "Renault": {
            //Esso ATF 9736.22
        },
        "Suzuki": {
            "All Models (except Ertiga)": "ATF 3317 (4 Liters)",
            "Ertiga": "ATF AW-1 (4 Liters)",
        },
        "Toyota": {
            /*
            ====== ATF ======
            Type-IV (Lowest) - ALL TOYOTA MODELS UNDER YEARS 2008 AND 2008 USES THIS ONE (< 2007)
            WS (Highest) - (>= 2007)

            ====== CVT ======
            TC (Lowest / Standard) (2000 - 2011) *7-Speed
            FE (Highest / More Advanced) (>= 2012)
            */
            //Models Got Dipstick = ATF | No Dipstick = CVT FE
            "Altis (ZZE121/ZZE122)": "ATF Type-IV", //(<= 2006)
            "Altis (ZZE141/ZZE142)": "ATF WS", //(2007 - 2011)
            "Alphard (< 2007)": "ATF Type-IV", //ANH10 = Type-IV / Second Models === ALPHARD ==== STARTS FE
            "Alphard 3.5 (GGH20)": "ATF WS", //(2008 - 2014)
            "Avanza 1.3/1.5": "ATF Type-IV (4 Liters)",
            "Camry (SXV10/SXV20/ACV30)": "ATF Type-IV (4 Liters)", //(<= 2006)
            "Camry (ACV40/ACV41/ACV51/ASV50/AVV50)": "ATF WS", //(>= 2007)
            // "Camry 2.0 (2012)": "ATF WS (4 Liters)",
            "Estima 3.5 (GSR50)": "ATF WS", //(>= 2006)
            "Harrier (ACU10/ACU30)": "ATF Type-IV", //(< 2009)
            "Hilux (GUN125)": "ATF WS", //(>= 2016)
            "Innova (TGN40)": ["ATF Type-IV", "Differential Gear Oil: LSD (2 Liters)"],
            "Sienta": "CVT FE (4 Liters)",
            "Vellfire 3.5 (GGH20)": "ATF WS", //(2008 - 2014)
            "Vellfire (AGH30)": "CVT FE (4 Liters)",
            "Vios (NCP42)": "ATF Type-IV", //(<= 2006)
            "Vios (NCP93/NCP150)": ["ATF WS", "Manual: 80W-90 (2 Liters)"], //(>= 2007)
            "Wish": "CVT FE (4 Liters)", //2010
            //Hybrid Models
            "Harrier (ACU30)": "ATF WS",
            //INNOVA 2019 2.0 = 3.5 LSD
        },
        "Volkswagen": {
            /*
            *Depends on model, year, specific transmission system
            *DCT - Dual Clutch Transmission
            *DSG - Direct-Shift Gearbox (robots)

            ============MANUAL============
            4-Speed (older models):-
            5-Speed & 6-Speed - 75W (GL-4 or lower):-
                G 009 317 A2
                G 052 171 A2
                G 052 178 A2
                G 052 532 A2
                G 052 527 A2
                G 052 726 A2
                G 052 798 A2
                G 055 726 A2
                G 052 512 A2

            ============AUTOMATIC============
            4-Speed & 5-Speed:-
                G 052 162 A2
            6-Speed:-
                G 055 025 A2
                G 055 540 A2
                G 052 990 A2
            8-Speed:-
                G 060 162 A1
                G 060 162 A2
                G 060 162 A6

            ============TIPTRONIC / AUTOMATED MANUAL============ //SPECIAL
            DSG/DCT Fluid:- (Audi/Seat/Skoda/Volkswagen part numbers same)
                G 052 182 A2 (6-Speed)
                G 052 512 A2 (7-Speed)
                G 052 529 A2
                Example: 6-Speed / 7-Speed/DQ200

            ============CVT============
            G 052 180 A2
            G 052 516 A2
            */
        },
        "Volvo": {
            //Volvo Models >2004 = ATF WS
            //Some Models Oil Same As Ford
        },
    },
    "Spark Plugs": {
            // I - Iridium
            // GP - G-Power

            //BP5ES = BP6ES

            //IXU22 != IXUH22I != IXEH22TT
            //LKR6C / IXUH22I ==Kia / Naza Spark Plugs (LZKR6B-10E / SILZKR7B11)
            //SILZKR7B11 = LZKR6B-10E != ILZKR7B11-S

            //DCPR7EA-9 = XU22PR9 / IXU22 != IXEH22TT

            //Mitsubishi Outlander / Airtrek Turbo (Old Models - year 2001)
            //BPR6EIX != IK22
            //BPR6EF-11
            //IT20

            //BKR6EIX
            //IK16 = IK20 = IK22 != IKH20TT
            //IZFR6H11 === BMW

            //BK5E / BKR5EGP / BKR5EIX = BKR5E-11 = BKR6E-11
            //IK16, IK16TT, K16PR-U11 = IK20/IK20TT

            //LKAR7 (mostly proton)
            //IXEH20TT = IXEH22TT
            //LKAR7 != LKR6A / LKR7

            //LFR5A-11 / LFR5AGP / LFR5AIX = LFR6C-11
            //IKH20 / IKH20TT
            //ILZFR6D11 === BMW

            //LKR7 / LKR6
            //IXUH22I

            //IT20
            //BPR6EF-11 / TR6

            //IW20 = IK20
        "Audi": {
            //Most Audi Models Spark Plug Same As Proton Wira / Waja

            //BKR6EGP / BKR6EIX
            //BKR7EIX
            //IK20 / IK20TT
            //IK22
        },
        "BMW": {
            //BKR6EGP / BKR6EIX
            //IK20 / IK20TT
            //IKH20
            "BMW 3 Series (All Engine Except E90)": ["BKR6EGP / BKR6EIX (NGK)", "IK20 / IK20TT (Denso)"],
            "BMW 3 Series (E90 - 318i, 320i)": ["IZFR6H11 (NGK)", "IK20 / IK20TT (Denso)"],
            "BMW 3 Series (E90 - 325i, 330i)": ["ILZFR6D11 (NGK)", "IKH20 / IKH20TT (Denso)"],
            "BMW 4 Series": ["SILZKBR8D8S (NGK)", "N/A (Denso)"],
            "BMW 5 Series (All Engine Except F32": ["BKR6EGP / BKR6EIX (NGK)", "IK20 / IK20TT  (Denso)"],
        },
        "Chery": {
            "A160 1.6": ["N/A (NGK)", "IK20 / IK20TT (Denso)"],
            "Eastar 2.4": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "QQ 0.8": ["N/A (NGK)", "IK20 / IK20TT (Denso)"],
            "Tiggo 1.6": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"]
        },
        "Chevrolet": {
            "Aveo 1.5/1.6": ["BKR6E-11 (NGK)", "IK20TT (Denso)"],
            "Captiva SUV 2.4": ["N/A (NGK)", "IK20 / IK20TT (Denso)"],
            "Cruze": ["IFR7X7G (NGK)", "N/A (Denso)"],
            "Epica 2.0": ["N/A (NGK)", "IK20 / IK20TT (Denso)"],
            "Nabira 1.8": ["N/A (NGK)", "IK20 / IK20TT (Denso)"],
            "Nabira 2.2": [""], //ITV20 / ITV20TT (Denso)
            "Optra 1.8": ["BKR6EGP / BKR6EIX (NGK)", "IK20 / IK20TT (Denso)"],
            "Optra 1.6, 5": ["BKR6EGP / BKR6EIX-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Spark 0.8": ["N/A (NGK)", "IK20 / IK20TT (Denso)"]
        },
        //Citroen
        //Daihatsu
        "Ford": {
            "Econovan": [""],
            "Escape": [""],
            "Fiesta 1.4/1.6": [""],
            "Focus": [""],
            "Lynx 1.6": [""],
            "Mondeo 2.0 EcoBoost": [""],
            "Ranger 2.0": [""],
            "S-Max 2.0 EcoBoost": [""],
            "Telstar 1.8/2.0": [""]
        },
        "Honda": {
            //IK20L (Honda ONLY)
            "Accord 2.0 (<=2008)": ["BKR6EGP / ZFR6F-11 (NGK)", "IK20TT / IK20L (Denso)"],
            "Accord 2.0 i-VTEC": ["IZFR6K-11NS (NGK)", "IK20TT (Denso)"],
            "BRV": ["DIFR6D13 (NGK)", "IK20TT (Denso)"],
            "City 1.3": ["BKR6E-11 (NGK)", "IK20TT (Denso)"],
            "City 1.3 i-DSI": ["BKR6E-11 (NGK)", "IK20TT (Denso) *8 Spark Plugs (2 Spark Plugs For Each Cylinder)"],
            "City 1.5 i-DSI": ["DIFR6D13 (NGK)", "IK20TT (Denso) *8 Spark Plugs (4 Front 4 Rear)"],
            "City 1.5 VTEC (TMO/2008)": ["BKR6EGP / ZFR6F-11 (NGK)", "IK20TT / IK20L (Denso)"],
            "City 1.5 VTEC (T9A/2014)": ["DIFR6D13 (NGK)", "IK20TT (Denso)"],
            "City 1.5 Hybrid": ["DILZKAR7C11S (NGK)", "IXEH22TT (Denso)"],
            "Civic 1.5/1.6": ["BKR6E-11 (NGK)", "IK20TT (Denso)"],
            "HRV": ["SILZKR7C11S (NGK)", "N/A (Denso)"],
            "Jazz (GD3)": ["BKR6EGP / ZFR6F-11 (NGK)", "IK20TT / IK20L (Denso)"],
            // "City Hatchback": ["DILZKAR7C11H (NGK)", "DXE22HCR11H (Denso)"],
            // "Odyssey": ["ILKAR7K11S (NGK)", "SXE22HQR11S (Denso)"],
            // "Perdana 2nd GEN 2.0 (2013)": ["IZFR6K-11S (NGK)", "ILKAR7K11S (Denso)"],
            // "Perdana 2nd GEN 2.4 (2013)": ["ILZKR7B-11S (NGK)", "ILKAR7K11S (Denso)"],
            "Stream 1.7/2.0": ["BKR6EGP / ZFR6F-11 (NGK)", "IK20TT / IK20L (Denso)"],
            "Stream 1.8": ["ZFR6K-11 (NGK)", "IK20TT / IK20 (Denso)"],
        },
        "Mazda": {
            //Skyactiv = ILKAR7L / IXEH22TT
            //Mazda Familia = Spark Plug Proton / Honda = BKR6EGP
            "Mazda 2 [Skyactiv]": ["ILKAR7L (NGK)", "IXEH22TT (Denso)"],
        },
        "Mercedes-Benz": {
            "E-Class (W210)": ["FR8DPP33+ (Bosch)"], //V12 Engine | 12 Spark Plugs
        },
        "Mitsubishi": {
            "ASX": [" (NGK)", " (Denso)"],
            "Attrage": [" (NGK)", " (Denso)"],
            "Galant": [" (NGK)", " (Denso)"],
            "Grandis": [" (NGK)", " (Denso)"],
            "Lancer": [" (NGK)", " (Denso)"],
            "Mirage": [" (NGK)", " (Denso)"], //3 Spark Plugs Only
            "Outlander / Airtrek": ["BKR6E-11 (NGK)", " (Denso)"],
            "Pajero": [" (NGK)", " (Denso)"],
            "Storm": [" (NGK)", " (Denso)"],
            "Triton": [" (NGK)", " (Denso)"],
            "XPander": [" (NGK)", " (Denso)"],
        },
        "Kia / Naza": {
            "Bestari 206 1.4": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Citra 2.0": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Carens": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Carnival V6": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Cerato K3 1.6": ["LZKR6B-10E (NGK)", "IXUH22I (Denso)"],
            "Cerato K3 2.0": ["BKR6E-11 (NGK)", "IKH20 / IKH20TT (Denso)"],
            "Forte 1.6": ["LZKR6B-10E (NGK)", "IXUH22I (Denso)"],
            "Forte 2.0": ["LFR5A-11 (NGK)", "IKH20 / IKH20TT (Denso)"],
        },
        "Nissan": {
            "Almera (N17)": ["N/A (NGK)", "IXEH22TT (Denso)"],
            "Grand Livina": ["N/A (NGK)", "IXEH22TT (Denso)"],
            "Xtrail (T30)": ["LFR5A-11 / LFR5AGP / LFR5AIX (NGK)", "IKH20TT (Denso)"],
        },
        "Proton": {
            "Arena 1.5": ["BP5ES-11 (NGK)", "W16EX-U (Denso)"],
            "Ertiga": ["LKR6F-10 (NGK)", "IXUH22I (Denso)"],
            "Exora 1.6": ["BPR6EF-11 / TR6 (NGK)", "IT20 (Denso)"],
            "Exora Bold 1.6 CFE Turbo": ["ILKAR7G7 (NGK)", "IXEH22TT (Denso)"],
            "GEN-2 1.3/1.6": ["BPR6EF-11 (NGK)", "IT20 (Denso)"],
            "Inspira": ["FR6EI / BKR6EIX (NGK)", "IK20 / IK20TT (Denso)"],
            "Iriz 1.3/1.6 VVT": ["LKAR7C-9 / LKAR7BGP (NGK)", "IXEH22TT (Denso)"],
            "Iswara 1.3/1.5": ["BP5ES / BPR5EGP (NGK)", "W16EX-U (Denso)"],
            "Juara 1.1": ["DCPR7E (NGK)", "IXU22 (Denso)"],
            "Perdana non-V6": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Perdana V6": ["BKR6EGP (NGK)", "IK20 / IK20TT (Denso) *6 Spark Plugs (3 Front 3 Rear)"],
            "Perdana 2nd GEN 2.0 (2013)": ["IZFR6K-11S / ZFR6F-11 (NGK)", "ILKAR7K11S (Denso)"],
            "Perdana 2nd GEN 2.4 (2013)": ["ILZKR7B-11S / ZFR6F-11 (NGK)", "ILKAR7K11S (Denso)"],
            "Persona 1.6": ["TR6 / BPR6EF-11 (NGK)", "IT20 (Denso)"],
            "Persona 1.6 VVT [NEW]": ["LKAR7C-9 / LKAR7BGP (NGK)", "IXEH22TT (Denso)"],
            "Preve 1.6": ["BPR6EF-11 / TR6 (NGK)", "IT20 (Denso)"],
            "Preve 1.6 CFE Turbo": ["ILKAR7G7 (NGK)", "IXEH22TT (Denso)"],
            "Putra 1.8": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Saga 1.3/1.5": ["BP5ES / BPR5EGP (NGK)", "W16EX-U (Denso)"],
            "Saga BLM/FL/FLX": ["BPR6EF-11 / TR6 (NGK)", "IT20 (Denso)"],
            "Saga 1.3 VVT": ["LKAR7C-9 / LKAR7BGP (NGK)", "IXEH22TT (Denso)"],
            "Satria 1.3/1.5": ["BP5ES / BPR5EGP (NGK)", "W16EX-U (Denso)"],
            "Satria 1.6i": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Satria 1.8 GTi 16V": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Satria NEO 1.3/1.6": ["BPR6EF-11 / TR6 (NGK)", "IT20 (Denso)"],
            "Savvy": ["LZKAR7A (NGK)", "IXEH22TT (Denso)"],
            "Suprima": ["BPR6EF-11 / TR6 (NGK)", "IT20 (Denso)"],
            "Suprima Turbo": ["ILKAR7G7 (NGK)", "IXEH22TT (Denso)"],
            "Tiara": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Waja 1.6/1.8": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"], //MMC
            "Waja 1.6 Campro CPS": ["BPR6EF-11 / TR6 (NGK)", "IT20 (Denso)"],
            "Wira 1.3/1.5": ["BP5ES-11 / BP6ES (NGK)", "W16EX-U (Denso)"],
            "Wira 1.6/1.8": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "X70 1.8": ["BKR6EIX (NGK)", "IK20 / IK20TT (Denso)"]
        },
        "Perodua": {
            "Alza 2018": ["DCPR7EA-9 (NGK)", "XU22PR9 / IXU22 (Denso)"],
            "Alza 2022": ["LKAR6 (NGK)", "SC16HR11 / IXEH22TT (Denso)"],
            "Aruz": ["LKAR6 (NGK)", "SC16HR11 / IXEH22TT (Denso)"],
            "Ativa": ["SILKAR7G8G (NGK)", "N/A (Denso)"],
            "Axia": ["LKR6C / LKR6AIX (NGK)", "IXUH22I (Denso)"],
            "Bezza 1.0": ["LKR6C / LKR6AIX (NGK)", "IXUH22I (Denso)"], //3 Spark Plugs
            "Bezza 1.3": ["N/A", "SC16HR11 / IXEH22TT (Denso)"],
            "Kancil 660": ["BP5ES / BPR5EGP (NGK)", "IK20 / IK20TT (Denso)"],
            "Kancil 800": ["BP6EY / BPR6EGP (NGK)", "IK20 / IK20TT (Denso)"],
            "Kelisa": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Kembara": ["BKR6EY-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Kenari": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Myvi Old 1.0": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Myvi Old 1.3 (2006 <=)": ["BKR6E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Myvi Lagi best / Icon (2007 >=)": ["DCPR7EA-9 (NGK)", "XU22PR9 / IXU22 (Denso)"],
            "Myvi Golf": ["LKAR6 (NGK)", "SC16HR11 / IXEH22TT (Denso)"],
            "Nautica": ["DCPR7EA-9 (NGK)", "XU22PR9 / IXU22 (Denso)"],
            "Rusa": ["BK6E (NGK)", "IK20 / IK20TT (Denso)"],
            "Viva": ["BKR6E / BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
        },
        "Suzuki": {
            "Swift 1.5/1.6": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
        },
        "Toyota": {
            "Altis 1.6/1.8 (2003)": ["BKR5E-11 (NGK)", "IK20 / IK20TT (Denso)"],
            "Avanza 1.5 (>= 2018)": ["N/A (NGK)", "IXU22 (Denso)"],
            "Innova 2.0 (>= 2005)": ["LFR5A-11/GP / LFR6C-11 (NGK)", "IKH20 / IKH20TT (Denso)"],
            "Vios (NCP42)": ["BKR6EIX (NGK)", "IK20 / IK20TT (Denso)"],
            "Vios (NCP93)": ["FR6EI / BKR6EIX (NGK)", "IK20 / IK20TT (Denso)"],
            "Vios (NCP150)": [" (NGK)", "IK20 / IK20TT (Denso)"],
        },
    },
    // "Tyre": {
        //Perdana V6 - Size 17
    // },
    "Wiper": {
        //*P.S.: Take notes that this is the original size of the models, the size can be changed
        "U-Hook": {
            "Honda": {
                "Accord": "26” (Driver), 19” (Passenger), N/A (Rear)",
                "BRV": "22” (Driver), 16” (Passenger), 12” (Rear)",
                "City": "26” (Driver), 14” (Passenger), N/A (Rear)",
                "Civic SO4 (1995)": "19” (Driver), 18” (Passenger), N/A (Rear)",
                "Civic (2001)": "21” (Driver), 19” (Passenger), N/A (Rear)",
                "Civic FD2/FB": "26” (Driver), 22” (Passenger), N/A (Rear)",
                "Civic FC (2016-2021)": "26” (Driver), 18” (Passenger), N/A (Rear)",
                "Civic FE (2022)": "24” (Driver), 19” (Passenger), N/A (Rear)",
                "CRV": "26” (Driver), 16” (Passenger), 14” - H354 (Rear)",
                "Freed (2010)": "26” (Driver), 16” (Passenger), N/A (Rear)",
                "Freed (2016)": "26” (Driver), 18” (Passenger), N/A (Rear)",
                "HRV": "26” (Driver), 16” (Passenger), 10” - H250 (Rear)",
                "Insight": "26” (Driver), 17” (Passenger), N/A (Rear)",
                "Jazz": "26” (Driver), 14” (Passenger), 14” - H354 (Rear)",
                "Odyssey": "26” (Driver), 16” (Passenger), 12” (Rear)",
                "Stream (2001 - 2007)": "24” (Driver), 14” (Passenger), N/A (Rear)",
                "Stream (2007 - 2014)": "26” (Driver), 14” (Passenger), N/A (Rear)"
            },
            "Hyundai": {
                "Santa FE (2001 - 2006)": "22” (Driver), 20” (Passenger), 14” - H352 (Rear)",
                "Starex (2007)": "24” (Driver), 20” (Passenger), 14” - H352 (Rear)",
            },
            "Kia / Naza": {
                "Carens (2006)": "24” (Driver), 19” (Passenger), 14” - H352 (Rear)",
                "Rio II (2006)": "21” (Driver), 18” (Passenger), 14” - H352 (Rear)",
            },
            "Mazda": {
                "CX-5 (2010 - 2018)": "24” (Driver), 18” (Passenger), 14” - H352 (Rear)",
                "Mazda 2": "22” (Driver), 17” (Passenger), 14” - H354 (Rear)",
            },
            "Mitsubishi": {
                "Airtrek": "21” (Driver), 18” (Passenger), N/A (Rear)",
                "ASX": "24” (Driver), 19” (Passenger), 10” (Rear)",
                "Attrage": "22” (Driver), 14” (Passenger), 12” - H307 (Rear)",
                "Galant": "21” (Driver), 18” (Passenger), 16” (Rear)",
                "Grandis": "28” (Driver), 22” (Passenger), 12” (Rear)",
                "Lancer": "24” (Driver), 18” (Passenger), 14” - H354 (Rear)",
                "Mirage": "21” (Driver), 14” (Passenger), 12” - H307 (Rear)",
                "Outlander (2007)": "26” (Driver), 18” (Passenger), 14” - H352 (Rear)",
                "Outlander": "26” (Driver), 18” (Passenger), 12” (Rear)",
                "Pajero": "24” (Driver), 19” (Passenger), 14” - H354 (Rear)",
                "Storm": "22” (Driver), 18” (Passenger), N/A (Rear)",
                "Triton": "22” (Driver), 18” (Passenger), N/A (Rear)",
                "XPander": "26” (Driver), 16” (Passenger), 12” (Rear)"
            },
            "Nissan": {
                "Murano Z50": "” (Driver), ” (Passenger), 14” - H354 (Rear)",
                "X-Trail (T31)": "” (Driver), ” (Passenger), 14” - H354 (Rear)",
                "X-Trail (T32)": "” (Driver), ” (Passenger), 12” - H301 (Rear)",
            },
            "Perodua": {
                "Alza": "24” (Driver), 16” (Passenger), 12” (Rear)",
                "Aruz": "16” (Driver), 22” (Passenger), 14” (Rear)",
                "Ativa": "14” (Driver), 22” (Passenger), 14” (Rear)",
                "Axia": "21” (Driver), 14” (Passenger), 14” (Rear)",
                "Bezza": "21” (Driver), 14” (Passenger), N/A (Rear)",
                "Kancil": "18” (Driver), 16” (Passenger), 12” (Rear)",
                "Kelisa": "18” (Driver), 16” (Passenger), 14” (Rear)",
                "Kembara": "20” (Driver), 14” (Passenger), 14” (Rear)",
                "Kenari": "20” (Driver), 17” (Passenger), 14” - H352 (Rear)",
                "Myvi (Old '05)": "21” (Driver), 16” (Passenger), 14” - H352 (Rear)",
                "Myvi (Lagi Best / Icon)": "21” (Driver), 16” (Passenger), 14” - H352 (Rear)",
                "Myvi (Golf 2022)": "",
                "Nautica": "21” (Driver), 18” (Passenger), 12” (Rear)",
                "Rusa": "18” (Driver), 16” (Passenger), N/A (Rear)",
                "Viva": "20”/21” (Driver), 12” (Passenger), 14” - H352 (Rear)"
            },
            "Proton": {
                "Arena": "20” (Driver), 17” (Passenger), N/A (Rear)",
                "Ertiga": "21” (Driver), 14” (Passenger), 12” - H307 (Rear)",
                "Exora": "24” (Driver), 16” (Passenger), 14” - H354 (Rear)",
                "GEN 2": "20” (Driver), 19” (Passenger), 16” (Rear)",
                "Inspira": "24” (Driver), 17” (Passenger), N/A (Rear)",
                "Iswara": "19” (Driver), 18” (Passenger), N/A (Rear)",
                "Juara": "18” (Driver), 16” (Passenger), N/A (Rear)",
                "Perdana": "21” (Driver), 19” (Passenger), N/A (Rear)",
                "Persona (< 2015)": "20” (Driver), 19” (Passenger), N/A (Rear)",
                "Preve": "24” (Driver), 16” (Passenger), 14” (Rear)",
                "Putra": "20” (Driver), 17” (Passenger), N/A (Rear)",
                "Saga (BLM/FLX/VVT)": "22” (Driver), 17” (Passenger), N/A (Rear)",
                "Satria": "20” (Driver), 17” (Passenger), N/A (Rear)",
                "Satria NEO": "21” (Driver), 18” (Passenger), N/A (Rear)",
                "Savvy": "22” (Driver), 16” (Passenger), 12” - H306 (Rear)",
                "Suprima S": "24” (Driver), 16” (Passenger), 14” (Rear)",
                "Tiara": "22” (Driver), 22” (Passenger), N/A (Rear)",
                "Waja": "21” (Driver), 19” (Passenger), N/A (Rear)",
                "Wira": "20” (Driver), 17” (Passenger), N/A (Rear)"
            },
            "Subaru": {
                "Forester (2012 - 2018)": "26” (Driver), 16” (Passenger), 14” - H354 (Rear)",
            },
            "Toyota": {
                "Avanza": "20” (Driver), 14” (Passenger), 14” - H352 (Rear)",
                "Harrier (2003 - 2013)": "26” (Driver), 22” (Passenger), 14” - H352 (Rear)",
            },
        },
        "Special Adapter/Button/Clip": {
            /*
            Multi-Adapter Types:-
            Type 3A | Type 3B-2 | Type 3C | Type 3F | Type 3H-8 | Type 3T

                Push Button
                    - 3H-8
                Side Pin
                    - 3B-2
                Pinch Tab
                    - 3A
                U-Hook
                    - 3A
            
            */
            "Built in Adapter": {
                "Proton X50": "24”/18” (Front Pair), 11” (Rear)",
                "Proton X70": "24”/17” (Front Pair), 12” (Rear)",
            },
            "Continental Car Clip": {
                "Ford Fiesta": "26”/16” (Front Pair),  (Rear)"
            },
            "Push Button": {
                "Ford Ranger T7": "24”/16” (Front Pair),  (Rear)",
                "Honda Civic 06' - 08'": " (Front Pair),  (Rear)",
                "Lexus RX300": "26”/21” (Front Pair),  (Rear)",
                "Mazda CX5 2018": "24”/18” (Front Pair),  (Rear)",
                "Myvi (Golf) 2018": "22”/16” (Front Pair),  (Rear)",
                "Proton Iriz/Persona (2016>)": "24”/16” (Front Pair), 12” - H307 (Rear)",
                "Renault Captur": "26”/14” (Front Pair),  (Rear)",
                "Subaru XV 2019": "26”/16” (Front Pair),  (Rear)",
                "Toyota Lexus NX300": "26”/16” (Front Pair),  (Rear)",
                "Toyota Vellfire AGH30 2015-2019": "30”/14” (Front Pair),  (Rear)",
                "Toyota Estima ACR30": "BOSCH N70 - 28” (Driver Side)/19” (Front Pair),  (Rear)",
            }
            // BMW 5 Series (E28) (1982-1988) U-Hook 3A
            // BMW 5 Series (E60,E61) (2003-2009) Pinch Tab 3A
            // BMW 5 Series (F10) (2010-2017) Side Pin 3B-2
            // BMW 5 Series (G30,G31,G38) (2017-Present) Push Button 3H-8
            // Audi A1 Hatchback Sportback (2010-2015) Push Button 3H-8
        }
    },
}

exports.specifications = specifications