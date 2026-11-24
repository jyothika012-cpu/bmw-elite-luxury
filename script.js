/* ==========================================
   BMW ELITE – LUXURY SHOWROOM JAVASCRIPT
   ========================================== */

// AUTHENTIC INDIAN MARKET BMW VEHICLE DATABASE
const bmwModels = [
    {
        id: "bmw-2-series-gc",
        name: "BMW 2 Series Gran Coupe",
        variant: "220i M Sport",
        category: "sedans",
        priceExShowroom: "₹ 43.90 Lakh",
        priceOnRoad: "₹ 51.20 Lakh",
        engineType: "BMW TwinPower Turbo 4-cylinder petrol",
        displacement: "1,998 cc",
        power: "176 hp",
        torque: "280 Nm",
        acceleration: "7.1 seconds",
        topSpeed: "240 km/h",
        transmission: "7-speed Steptronic Sport",
        drivetrain: "Front-Wheel Drive (FWD)",
        fuelType: "Petrol",
        mileage: "14.82 km/l",
        seating: "5 Seater",
        features: ["M Sport Package", "Panoramic Glass Sunroof", "BMW Live Cockpit Plus", "Ambient Lighting"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Alpine White", "Skyscraper Grey", "Black Sapphire", "Storm Bay Metallic"],
        technology: "BMW Operating System 7 with 10.25-inch Touch Display, Apple CarPlay, and Android Auto.",
        safety: "6 Airbags, ABS with Brake Assist, Dynamic Stability Control (DSC), Cornering Brake Control.",
        comfort: "Automatic 2-zone climate control, electrically adjustable sports seats with memory function."
    },
    {
        id: "bmw-3-series",
        name: "BMW 3 Series Gran Limousine",
        variant: "330Li M Sport Pro",
        category: "sedans",
        priceExShowroom: "₹ 62.60 Lakh",
        priceOnRoad: "₹ 72.80 Lakh",
        engineType: "2.0L BMW TwinPower Turbo 4-cylinder",
        displacement: "1,998 cc",
        power: "258 hp",
        torque: "400 Nm",
        acceleration: "6.2 seconds",
        topSpeed: "250 km/h",
        transmission: "8-speed Steptronic Sport",
        drivetrain: "Rear-Wheel Drive (RWD)",
        fuelType: "Petrol",
        mileage: "15.39 km/l",
        seating: "5 Seater (Extra Legroom)",
        features: ["BMW Curved Display", "Panoramic Sunroof", "Harman Kardon Surround Sound", "Vernasca Leather"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Mineral White", "Portimao Blue", "Carbon Black", "Skyscraper Grey"],
        technology: "BMW Curved Display with OS 8.5, Intelligent Personal Assistant, Head-Up Display.",
        safety: "Attentiveness Assistance, Dynamic Stability Control, ISOFIX child seat mountings, 6 Airbags.",
        comfort: "Extended wheelbase for supreme rear legroom, Panorama glass roof, Ambient lighting."
    },
    {
        id: "bmw-5-series",
        name: "BMW 5 Series Long Wheelbase",
        variant: "530Li M Sport",
        category: "sedans",
        priceExShowroom: "₹ 72.90 Lakh",
        priceOnRoad: "₹ 84.50 Lakh",
        engineType: "2.0L TwinPower Turbo with 48V Mild Hybrid",
        displacement: "1,998 cc",
        power: "258 hp",
        torque: "400 Nm",
        acceleration: "6.5 seconds",
        topSpeed: "250 km/h",
        transmission: "8-speed Steptronic Automatic",
        drivetrain: "Rear-Wheel Drive (RWD)",
        fuelType: "Petrol (Mild Hybrid)",
        mileage: "16.50 km/l",
        seating: "5 Seater",
        features: ["Bowers & Wilkins Surround Sound", "Sky Lounge Panoramic Roof", "Interaction Bar", "Wireless Charging"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Mineral White", "Phytonic Blue", "Carbon Black", "Titanium Bronze"],
        technology: "BMW OS 8.5, Curved Display, Augmented Reality Navigation, BMW Digital Key Plus.",
        safety: "Driving Assistant Plus, Surround View Camera, Parking Assistant Professional.",
        comfort: "Luxury rear seating with quilted perforated Veganza upholstery, 4-zone climate control."
    },
    {
        id: "bmw-7-series",
        name: "BMW 7 Series",
        variant: "740Li M Sport",
        category: "sedans",
        priceExShowroom: "₹ 1.81 Crore",
        priceOnRoad: "₹ 2.10 Crore",
        engineType: "3.0L Inline 6-cylinder TwinPower Turbo",
        displacement: "2,998 cc",
        power: "381 hp",
        torque: "520 Nm",
        acceleration: "5.4 seconds",
        topSpeed: "250 km/h",
        transmission: "8-speed Steptronic Sport",
        drivetrain: "Rear-Wheel Drive (RWD)",
        fuelType: "Petrol",
        mileage: "12.61 km/l",
        seating: "5 Seater Executive",
        features: ["31.3-inch 8K Theatre Screen", "Executive Lounge Seating", "BMW Interaction Bar", "Automatic Doors"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Tanzanite Blue", "Black Sapphire", "Oxide Grey", "Mineral White"],
        technology: "Executive Drive Pro suspension, BMW Theatre Screen with Amazon Fire TV built-in.",
        safety: "Driving Assistant Professional, Active Cruise Control, Lane Keeping Assistant.",
        comfort: "Executive Lounge rear console, cashmere wool-leather combination upholstery, massage seats."
    },
    {
        id: "bmw-m5",
        name: "BMW M5",
        variant: "M5 Sedan (Plug-in Hybrid)",
        category: "m-models",
        priceExShowroom: "₹ 2.29 Crore",
        priceOnRoad: "₹ 2.65 Crore",
        engineType: "4.4L V8 M TwinPower Turbo + Electric Motor",
        displacement: "4,395 cc",
        power: "727 hp",
        torque: "1,000 Nm",
        acceleration: "3.5 seconds",
        topSpeed: "305 km/h (M Driver's Package)",
        transmission: "8-speed M Steptronic with Drivelogic",
        drivetrain: "M xDrive All-Wheel Drive",
        fuelType: "Petrol Hybrid",
        mileage: "Check with BMW",
        seating: "5 Seater",
        features: ["M Carbon Ceramic Brakes", "M Setup Control", "Bowers & Wilkins Diamond Sound", "M Leather Steering"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Marina Bay Blue", "Frozen Deep Grey", "Carbon Black", "Isle of Man Green"],
        technology: "M-specific HUD, Integrated Dynamic Brake system, Hybrid-optimized M xDrive.",
        safety: "Active Protection, Track mode safety calibration, 8 Airbags, Dynamic Stability Control.",
        comfort: "M Multifunctional seats with ventilation, Merino leather trim, 4-zone climate control."
    },
    {
        id: "bmw-x1",
        name: "BMW X1",
        variant: "sDrive18d M Sport",
        category: "suvs",
        priceExShowroom: "₹ 52.50 Lakh",
        priceOnRoad: "₹ 61.00 Lakh",
        engineType: "2.0L BMW TwinPower Turbo Diesel",
        displacement: "1,995 cc",
        power: "150 hp",
        torque: "360 Nm",
        acceleration: "8.9 seconds",
        topSpeed: "210 km/h",
        transmission: "7-speed Steptronic Dual-Clutch",
        drivetrain: "Front-Wheel Drive (FWD)",
        fuelType: "Diesel",
        mileage: "20.37 km/l",
        seating: "5 Seater",
        features: ["Adaptive LED Headlights", "Panoramic Glass Sunroof", "BMW Curved Display", "Parking Assistant Plus"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Alpine White", "Space Silver", "Phytonic Blue", "M Portimao Blue"],
        technology: "BMW iDrive with OS 9, QuickSelect functionality, Wireless smartphone integration.",
        safety: "Reversing Assistant, Dynamic Traction Control (DTC), 6 Airbags, ISOFIX.",
        comfort: "Sensatec perforated upholstery, sliding and reclining rear seats."
    },
    {
        id: "bmw-x3",
        name: "BMW X3",
        variant: "xDrive30d M Sport",
        category: "suvs",
        priceExShowroom: "₹ 71.90 Lakh",
        priceOnRoad: "₹ 83.50 Lakh",
        engineType: "3.0L Inline 6-cylinder Diesel",
        displacement: "2,993 cc",
        power: "265 hp",
        torque: "620 Nm",
        acceleration: "5.8 seconds",
        topSpeed: "240 km/h",
        transmission: "8-speed Steptronic Sport",
        drivetrain: "xDrive Intelligent AWD",
        fuelType: "Diesel",
        mileage: "16.55 km/l",
        seating: "5 Seater",
        features: ["Adaptive Suspension", "Panoramic Sunroof", "Harman Kardon Audio", "Vernasca Leather"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Brooklyn Grey", "Mineral White", "Carbon Black", "Phytonic Blue"],
        technology: "BMW Live Cockpit Professional with 12.3-inch instrument cluster.",
        safety: "Hill Descent Control, Cornering Brake Control, Dynamic Stability Control.",
        comfort: "Sports seats for driver and front passenger, acoustic glazing for front side windows."
    },
    {
        id: "bmw-x5",
        name: "BMW X5",
        variant: "xDrive30d M Sport",
        category: "suvs",
        priceExShowroom: "₹ 97.00 Lakh",
        priceOnRoad: "₹ 1.12 Crore",
        engineType: "3.0L 6-cylinder Diesel with 48V Mild Hybrid",
        displacement: "2,993 cc",
        power: "286 hp",
        torque: "650 Nm",
        acceleration: "6.1 seconds",
        topSpeed: "233 km/h",
        transmission: "8-speed Steptronic Sport",
        drivetrain: "xDrive Intelligent AWD",
        fuelType: "Diesel Mild Hybrid",
        mileage: "12.00 km/l",
        seating: "5 Seater Luxury SAV",
        features: ["2-Axle Air Suspension", "Sky Lounge Panoramic Glass Roof", "Harman Kardon Sound", "BMW Laserlight"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Mineral White", "Carbon Black", "Manhattan Metallic", "Sparkling Brown"],
        technology: "BMW Operating System 8.5, BMW Curved Display, Remote 3D View.",
        safety: "Active Protection, Attentiveness Assistant, 6 Airbags, Dynamic Traction Control.",
        comfort: "Comfort seats front with electrical adjustment, 4-zone automatic climate control."
    },
    {
        id: "bmw-x7",
        name: "BMW X7",
        variant: "xDrive40i M Sport",
        category: "suvs",
        priceExShowroom: "₹ 1.30 Crore",
        priceOnRoad: "₹ 1.51 Crore",
        engineType: "3.0L Inline 6-cylinder Petrol",
        displacement: "2,998 cc",
        power: "381 hp",
        torque: "520 Nm",
        acceleration: "5.8 seconds",
        topSpeed: "250 km/h",
        transmission: "8-speed Steptronic Sport",
        drivetrain: "xDrive Intelligent AWD",
        fuelType: "Petrol",
        mileage: "11.29 km/l",
        seating: "6 Seater (Captain Seats)",
        features: ["Crystal Headlights Iconic Glow", "2-Axle Air Suspension", "Bowers & Wilkins 3D Sound", "Panoramic Sky Lounge"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Mineral White", "Tanzanite Blue", "Black Sapphire", "Sparkling Copper Grey"],
        technology: "BMW Live Cockpit Professional, Augmented Reality HUD, Gesture Control.",
        safety: "Driving Assistant, Parking Assistant Professional with Reversing Assistant.",
        comfort: "Individual comfort seats in 2nd row, active seat ventilation and massage function."
    },
    {
        id: "bmw-xm",
        name: "BMW XM",
        variant: "Plug-in Hybrid SAV",
        category: "suvs",
        priceExShowroom: "₹ 2.96 Crore",
        priceOnRoad: "₹ 3.42 Crore",
        engineType: "4.4L V8 M TwinPower Turbo + High-Voltage Battery",
        displacement: "4,395 cc",
        power: "653 hp",
        torque: "800 Nm",
        acceleration: "4.3 seconds",
        topSpeed: "270 km/h",
        transmission: "8-speed M Steptronic",
        drivetrain: "M xDrive with M Sport Differential",
        fuelType: "Petrol Plug-in Hybrid",
        mileage: "Check with BMW",
        seating: "5 Seater Luxury Performance",
        features: ["M Adaptive Suspension Professional", "Prismatic Alcantara Headliner", "Vintage Leather", "Bowers & Wilkins Diamond Surround"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Cape York Green", "Carbon Black", "Mineral White", "Marina Bay Blue"],
        technology: "M specific hybrid screen, BMW Curved Display with OS 8.5.",
        safety: "Driving Assistant Professional, Active Guard, Surround View Camera.",
        comfort: "M Lounge rear seating with sculptural headliner and ambient lighting tubes."
    },
    {
        id: "bmw-m2",
        name: "BMW M2",
        variant: "M2 Coupe",
        category: "m-models",
        priceExShowroom: "₹ 99.90 Lakh",
        priceOnRoad: "₹ 1.16 Crore",
        engineType: "3.0L M TwinPower Turbo Inline 6-cylinder",
        displacement: "2,993 cc",
        power: "460 hp",
        torque: "550 Nm",
        acceleration: "4.1 seconds",
        topSpeed: "250 km/h (285 km/h with M Driver's Pkg)",
        transmission: "8-speed M Steptronic Sport",
        drivetrain: "Rear-Wheel Drive (RWD)",
        fuelType: "Petrol",
        mileage: "10.21 km/l",
        seating: "4 Seater Sports Coupe",
        features: ["M Carbon Roof", "M Sport Differential", "M Drive Professional", "Harman Kardon Sound"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Zandvoort Blue", "Toronto Red", "Brooklyn Grey", "Black Sapphire"],
        technology: "M specific track mode, Drift Analyzer, Lap Timer integrated in Curved Display.",
        safety: "Dynamic Stability Control with M Dynamic Mode, 6 Airbags.",
        comfort: "M Sport seats with illuminated M badge, Vernasca leather upholstery."
    },
    {
        id: "bmw-m3",
        name: "BMW M3 Competition",
        variant: "M3 Competition Sedan with M xDrive",
        category: "m-models",
        priceExShowroom: "₹ 1.45 Crore",
        priceOnRoad: "₹ 1.68 Crore",
        engineType: "3.0L Inline 6-cylinder M TwinPower Turbo",
        displacement: "2,993 cc",
        power: "510 hp",
        torque: "650 Nm",
        acceleration: "3.5 seconds",
        topSpeed: "290 km/h",
        transmission: "8-speed M Steptronic with Drivelogic",
        drivetrain: "M xDrive Intelligent AWD",
        fuelType: "Petrol",
        mileage: "10.10 km/l",
        seating: "5 Seater High Performance Sedan",
        features: ["M Carbon Bucket Seats", "M Compound Brakes", "Adaptive M Suspension", "M Drive Professional"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Isle of Man Green", "Sao Paulo Yellow", "Alpine White", "Brooklyn Grey"],
        technology: "M Setup menu for engine, transmission, steering and damper configurations.",
        safety: "M Compound brakes with red high-gloss calipers, DSC with M Dynamic mode.",
        comfort: "Full Merino leather trim, carbon fiber interior trim finishers."
    },
    {
        id: "bmw-m4",
        name: "BMW M4 Competition",
        variant: "M4 Competition Coupe with M xDrive",
        category: "m-models",
        priceExShowroom: "₹ 1.53 Crore",
        priceOnRoad: "₹ 1.77 Crore",
        engineType: "3.0L M TwinPower Turbo 6-cylinder",
        displacement: "2,993 cc",
        power: "530 hp",
        torque: "650 Nm",
        acceleration: "3.5 seconds",
        topSpeed: "290 km/h",
        transmission: "8-speed M Steptronic Sport",
        drivetrain: "M xDrive AWD",
        fuelType: "Petrol",
        mileage: "10.10 km/l",
        seating: "4 Seater Sports Coupe",
        features: ["M Carbon Exterior Package", "Laserlight Headlamps", "M Drift Analyzer", "Harman Kardon Surround"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Fire Red Metallic", "Portimao Blue", "Frozen Tanzanite Blue", "Alpine White"],
        technology: "BMW Curved Display with M-specific view configurations and widgets.",
        safety: "Active Protection, Dynamic Stability Control, Lane Departure Warning.",
        comfort: "M Carbon bucket seats with electric adjustment and memory."
    },
    {
        id: "bmw-m8-comp",
        name: "BMW M8 Competition",
        variant: "M8 Competition Coupe",
        category: "m-models",
        priceExShowroom: "₹ 2.44 Crore",
        priceOnRoad: "₹ 2.82 Crore",
        engineType: "4.4L V8 M TwinPower Turbo",
        displacement: "4,395 cc",
        power: "625 hp",
        torque: "750 Nm",
        acceleration: "3.2 seconds",
        topSpeed: "305 km/h",
        transmission: "8-speed M Steptronic",
        drivetrain: "M xDrive AWD",
        fuelType: "Petrol",
        mileage: "8.77 km/l",
        seating: "4 Seater Grand Tourer",
        features: ["M Carbon Ceramic Brakes", "M Sport Exhaust System", "Bowers & Wilkins Diamond Surround Sound", "BMW Laserlight"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Dravit Grey", "Brands Hatch Grey", "Marina Bay Blue", "Sonic Speed Blue"],
        technology: "M Sound Control button, Integrated braking system with M specific settings.",
        safety: "Driving Assistant, Parking Assistant Plus, High-beam assistant.",
        comfort: "Merino leather upholstery with contrasting stitching, multifunctional seats."
    },
    {
        id: "bmw-xm-label",
        name: "BMW XM Label Red",
        variant: "Limited Edition Flagship Plug-in Hybrid",
        category: "m-models",
        priceExShowroom: "₹ 3.15 Crore",
        priceOnRoad: "₹ 3.65 Crore",
        engineType: "4.4L V8 TwinPower Turbo + Electric Motor",
        displacement: "4,395 cc",
        power: "748 hp",
        torque: "1,000 Nm",
        acceleration: "3.8 seconds",
        topSpeed: "290 km/h",
        transmission: "8-speed M Steptronic",
        drivetrain: "M xDrive AWD",
        fuelType: "Petrol Plug-in Hybrid",
        mileage: "Check with BMW",
        seating: "5 Seater",
        features: ["Toronto Red Accent Band", "Exclusive Label Red Badging", "M Carbon Exterior Package", "Bowers & Wilkins Diamond 3D Sound"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Frozen Carbon Black", "Toronto Red", "Mineral White", "Phytonic Blue"],
        technology: "M hybrid specific operating system, BMW Curved Display with Red accents.",
        safety: "Driving Assistant Professional, Surround View, Active Protection.",
        comfort: "M Lounge rear seating, Merino leather in BMW Individual Carbon Black/Red."
    },
    {
        id: "bmw-ix1",
        name: "BMW iX1",
        variant: "xDrive30 Electric",
        category: "electric",
        priceExShowroom: "₹ 66.90 Lakh",
        priceOnRoad: "₹ 71.50 Lakh",
        engineType: "Dual Fully Electric Motors (Li-ion Battery)",
        displacement: "66.4 kWh Battery",
        power: "313 hp",
        torque: "494 Nm",
        acceleration: "5.6 seconds",
        topSpeed: "180 km/h",
        transmission: "Automatic Single-Speed",
        drivetrain: "Electric xDrive AWD",
        fuelType: "Electric (BEV)",
        mileage: "438–440 km / charge",
        seating: "5 Seater Electric SAV",
        features: ["BMW Curved Display with OS 9", "Panoramic Glass Sunroof", "Adaptive LED Headlights", "Harman Kardon Hi-Fi"],
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Alpine White", "Storm Bay", "Phytonic Blue", "Space Silver"],
        technology: "BMW ConnectedDrive services, Remote Software Upgrades, Intelligent Route Planning.",
        safety: "Parking Assistant Plus with Surround View, Active Guard, Dynamic Stability Control.",
        comfort: "Sensatec perforated upholstery, adjustable rear backrests."
    },
    {
        id: "bmw-i4",
        name: "BMW i4",
        variant: "eDrive40 Gran Coupe",
        category: "electric",
        priceExShowroom: "₹ 73.90 Lakh",
        priceOnRoad: "₹ 79.00 Lakh",
        engineType: "Current-excited synchronous electric motor",
        displacement: "83.9 kWh Battery",
        power: "340 hp",
        torque: "430 Nm",
        acceleration: "5.7 seconds",
        topSpeed: "190 km/h",
        transmission: "Automatic Single-Speed",
        drivetrain: "Rear-Wheel Drive (RWD)",
        fuelType: "Electric (BEV)",
        mileage: "Up to 590 km / charge",
        seating: "5 Seater Gran Coupe",
        features: ["Air Suspension Rear Axle", "BMW Curved Display", "Glass Roof", "Ambient Lighting"],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Mineral White", "Sanremo Green", "Black Sapphire", "Portimao Blue"],
        technology: "BMW Operating System 4 (iDrive), Intelligent Personal Assistant, Apple CarPlay.",
        safety: "Active Protection, Acoustic Protection for pedestrians, 6 Airbags.",
        comfort: "Sport seats for driver and front passenger, automatic tailgate."
    },
    {
        id: "bmw-i5",
        name: "BMW i5",
        variant: "M60 xDrive Electric",
        category: "electric",
        priceExShowroom: "₹ 1.20 Crore",
        priceOnRoad: "₹ 1.32 Crore",
        engineType: "Dual Electric Motors (M Performance)",
        displacement: "81.2 kWh Battery",
        power: "601 hp",
        torque: "820 Nm",
        acceleration: "3.8 seconds",
        topSpeed: "230 km/h",
        transmission: "Automatic Single-Speed",
        drivetrain: "Electric xDrive AWD",
        fuelType: "Electric (BEV)",
        mileage: "Up to 516 km / charge",
        seating: "5 Seater Luxury Sedan",
        features: ["Adaptive M Suspension Professional", "Bowers & Wilkins Surround Sound", "Interaction Bar", "Sky Lounge Roof"],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Frozen Pure Grey", "Alpine White", "Carbon Black", "Cape York Green"],
        technology: "BMW OS 8.5 with Augmented View, Highway Assistant for hands-free driving.",
        safety: "Driving Assistant Professional, Parking Assistant Plus.",
        comfort: "Merino leather trim, active seat ventilation, 4-zone climate control."
    },
    {
        id: "bmw-i7",
        name: "BMW i7",
        variant: "xDrive60 Excellence / M70",
        category: "electric",
        priceExShowroom: "₹ 2.03 Crore",
        priceOnRoad: "₹ 2.22 Crore",
        engineType: "Dual Electric Motors (High-Voltage Battery)",
        displacement: "101.7 kWh Battery",
        power: "544 hp (660 hp in M70)",
        torque: "745 Nm (1,100 Nm in M70)",
        acceleration: "4.7 seconds (3.7s in M70)",
        topSpeed: "240 km/h",
        transmission: "Automatic Single-Speed",
        drivetrain: "Electric xDrive AWD",
        fuelType: "Electric (BEV)",
        mileage: "Up to 625 km / charge",
        seating: "5 Seater Executive",
        features: ["31.3-inch Theatre Screen", "Executive Lounge Seating", "Automatic Doors", "Bowers & Wilkins Diamond Surround"],
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Two-Tone Black Sapphire / Oxide Grey", "Tanzanite Blue", "Mineral White"],
        technology: "Executive Drive Pro, BMW Interaction Bar, Digital Key Plus with UWB.",
        safety: "Driving Assistant Professional, Surround View with 3D Navigation.",
        comfort: "Executive Lounge rear console, cashmere wool interior elements."
    },
    {
        id: "bmw-ix",
        name: "BMW iX",
        variant: "xDrive50 Flagship Electric SAV",
        category: "electric",
        priceExShowroom: "₹ 1.40 Crore",
        priceOnRoad: "₹ 1.53 Crore",
        engineType: "Dual Synchronous Electric Motors",
        displacement: "111.5 kWh Battery",
        power: "523 hp",
        torque: "765 Nm",
        acceleration: "4.6 seconds",
        topSpeed: "200 km/h",
        transmission: "Automatic Single-Speed",
        drivetrain: "Electric xDrive AWD",
        fuelType: "Electric (BEV)",
        mileage: "Up to 635 km / charge",
        seating: "5 Seater Luxury SAV",
        features: ["Shy Tech Concept Grille", "Electrochromic Panoramic Roof", "Hexagonal Steering Wheel", "Bowers & Wilkins Diamond Surround"],
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        ],
        colors: ["Mineral White", "Phytonic Blue", "Storm Bay", "Adventurine Red"],
        technology: "BMW Natural Interaction, Curved Display with 5G connectivity.",
        safety: "Active Protection, Lane Keeping Assistant, Parking Assistant Professional.",
        comfort: "Olive leaf tanned natural leather, multi-adjustable comfort seats."
    }
];

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    renderCarGrid('all');
    initFilters();
    initComparisonDropdowns();
    initTestDriveDropdowns();
    initFAQ();
    initModals();
});

/* NAVBAR & MOBILE MENU */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on click
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

/* RENDER CAR GRID */
function renderCarGrid(filter) {
    const grid = document.getElementById('carGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? bmwModels : bmwModels.filter(car => car.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No vehicles found in this category.</p>`;
        return;
    }

    filtered.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <div class="car-img-wrapper">
                <img src="${car.image}" alt="${car.name}" loading="lazy">
                <span class="car-category-badge">${car.category.toUpperCase()}</span>
            </div>
            <div class="car-details-body">
                <h3 class="car-title">${car.name}</h3>
                <div class="car-price-tag">${car.priceExShowroom} <span style="font-size:0.75rem; font-weight:400; color:var(--text-muted);">*Ex-Showroom</span></div>
                <div class="car-specs-grid">
                    <div class="spec-item"><i class="fa-solid fa-gauge-high"></i> <div><strong>${car.power}</strong></div></div>
                    <div class="spec-item"><i class="fa-solid fa-bolt"></i> <div><strong>${car.acceleration}</strong></div></div>
                    <div class="spec-item"><i class="fa-solid fa-road"></i> <div><strong>${car.mileage}</strong></div></div>
                    <div class="spec-item"><i class="fa-solid fa-gears"></i> <div><strong>${car.drivetrain}</strong></div></div>
                </div>
                <div class="car-features-tags">
                    ${car.features.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join('')}
                </div>
                <div class="car-card-footer">
                    <button class="btn-details view-details-btn" data-id="${car.id}">View Details</button>
                    <button class="btn-testdrive-card book-td-direct" data-id="${car.id}"><i class="fa-solid fa-calendar-days"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Re-bind modal event listeners
    bindCardEvents();
}

/* FILTER TABS */
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderCarGrid(filter);
        });
    });

    // Footer & Electric section jump
    document.querySelectorAll('.footer-filter-link, .filter-jump-electric').forEach(link => {
        link.addEventListener('click', (e) => {
            const filter = link.getAttribute('data-filter');
            filterBtns.forEach(b => {
                if (b.getAttribute('data-filter') === filter) {
                    b.click();
                }
            });
        });
    });
}

/* BIND CARD EVENTS */
function bindCardEvents() {
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const carId = btn.getAttribute('data-id');
            openCarModal(carId);
        });
    });

    document.querySelectorAll('.book-td-direct').forEach(btn => {
        btn.addEventListener('click', () => {
            const carId = btn.getAttribute('data-id');
            const car = bmwModels.find(c => c.id === carId);
            if (car) {
                document.getElementById('tdModel').value = car.name;
                document.getElementById('testdrive').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* CAR DETAILS MODAL */
function openCarModal(carId) {
    const car = bmwModels.find(c => c.id === carId);
    if (!car) return;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 40px;" class="modal-grid-inner">
            <div>
                <div style="position: relative; border-radius: 12px; overflow: hidden; margin-bottom: 16px; height: 320px;">
                    <img id="mainModalImg" src="${car.image}" alt="${car.name}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 5px;">
                    ${car.gallery.map((img, idx) => `
                        <img src="${img}" alt="Thumbnail" onclick="document.getElementById('mainModalImg').src='${img}'" style="width: 80px; height: 60px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid ${idx === 0 ? 'var(--bmw-blue)' : 'transparent'};">
                    `).join('')}
                </div>
                <div style="margin-top: 24px; background: var(--pearl-white); padding: 20px; border-radius: 8px;">
                    <h4 style="font-size: 1.05rem; margin-bottom: 10px; color: var(--carbon-black);">Available Exterior Colors</h4>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        ${car.colors.map(col => `<span style="background:var(--pure-white); padding: 6px 12px; border-radius: 4px; font-size: 0.8rem; border:1px solid var(--border-light);">${col}</span>`).join('')}
                    </div>
                </div>
            </div>

            <div>
                <span class="section-tag">${car.category.toUpperCase()} - ${car.variant}</span>
                <h2 style="font-size: 2rem; color: var(--carbon-black); margin-bottom: 8px;">${car.name}</h2>
                <div style="font-size: 1.4rem; font-weight: 700; color: var(--bmw-blue); margin-bottom: 20px;">
                    ${car.priceExShowroom} <span style="font-size:0.8rem; font-weight:400; color:var(--text-muted);">(Ex-Showroom)</span><br>
                    <span style="font-size: 0.95rem; font-weight: 500; color: var(--text-muted);">Estimated On-Road: ${car.priceOnRoad}</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
                    <div style="background:var(--pearl-white); padding: 12px; border-radius:6px;"><strong>Power:</strong> ${car.power}</div>
                    <div style="background:var(--pearl-white); padding: 12px; border-radius:6px;"><strong>Torque:</strong> ${car.torque}</div>
                    <div style="background:var(--pearl-white); padding: 12px; border-radius:6px;"><strong>0-100 km/h:</strong> ${car.acceleration}</div>
                    <div style="background:var(--pearl-white); padding: 12px; border-radius:6px;"><strong>Top Speed:</strong> ${car.topSpeed}</div>
                    <div style="background:var(--pearl-white); padding: 12px; border-radius:6px;"><strong>Engine/Battery:</strong> ${car.displacement}</div>
                    <div style="background:var(--pearl-white); padding: 12px; border-radius:6px;"><strong>Range/Mileage:</strong> ${car.mileage}</div>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 1rem; margin-bottom: 6px; color: var(--carbon-black);">Technology & Connectivity</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">${car.technology}</p>
                </div>

                <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 1rem; margin-bottom: 6px; color: var(--carbon-black);">Safety & Assistance</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">${car.safety}</p>
                </div>

                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 1rem; margin-bottom: 6px; color: var(--carbon-black);">Luxury & Comfort Highlights</h4>
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        ${car.features.map(f => `<span style="background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; font-weight: 500;">${f}</span>`).join('')}
                    </div>
                </div>

                <button class="btn-bmw-primary full-width-btn modal-book-trigger" data-id="${car.id}"><i class="fa-solid fa-calendar-days"></i> Book Test Drive for this Model</button>
            </div>
        </div>
    `;

    document.getElementById('carModal').classList.add('active');

    // Bind modal test drive button
    document.querySelector('.modal-book-trigger').addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const selectedCar = bmwModels.find(c => c.id === id);
        document.getElementById('carModal').classList.remove('active');
        document.getElementById('tdModel').value = selectedCar.name;
        document.getElementById('testdrive').scrollIntoView({ behavior: 'smooth' });
    });
}

function initModals() {
    const carModal = document.getElementById('carModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const successModal = document.getElementById('successModal');
    const successCloseBtn = document.getElementById('successCloseBtn');

    modalCloseBtn.addEventListener('click', () => carModal.classList.remove('active'));
    carModal.addEventListener('click', (e) => {
        if (e.target === carModal) carModal.classList.remove('active');
    });

    successCloseBtn.addEventListener('click', () => successModal.classList.remove('active'));
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) successModal.classList.remove('active');
    });
}

/* CAR COMPARISON FEATURE */
function initComparisonDropdowns() {
    const s1 = document.getElementById('compareSelect1');
    const s2 = document.getElementById('compareSelect2');
    const s3 = document.getElementById('compareSelect3');

    bmwModels.forEach(car => {
        const opt1 = document.createElement('option');
        opt1.value = car.id;
        opt1.textContent = car.name + ' (' + car.variant + ')';
        s1.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = car.id;
        opt2.textContent = car.name + ' (' + car.variant + ')';
        s2.appendChild(opt2);

        const opt3 = document.createElement('option');
        opt3.value = car.id;
        opt3.textContent = car.name + ' (' + car.variant + ')';
        s3.appendChild(opt3);
    });

    // Default select first two for instant preview
    if (bmwModels.length >= 2) {
        s1.value = bmwModels[0].id;
        s2.value = bmwModels[3].id;
        triggerComparison();
    }

    document.getElementById('compareActionBtn').addEventListener('click', triggerComparison);
}

function triggerComparison() {
    const id1 = document.getElementById('compareSelect1').value;
    const id2 = document.getElementById('compareSelect2').value;
    const id3 = document.getElementById('compareSelect3').value;

    const container = document.getElementById('comparisonResultsContainer');

    const selectedIds = [id1, id2, id3].filter(id => id !== "");

    if (selectedIds.length < 2) {
        container.innerHTML = `
            <div class="comparison-placeholder">
                <i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b;"></i>
                <h3>Please select at least two BMW models</h3>
                <p>Choose two or three models above and click 'Compare Now'.</p>
            </div>
        `;
        return;
    }

    const cars = selectedIds.map(id => bmwModels.find(c => c.id === id));

    let html = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Specification</th>
                    ${cars.map(c => `<th><img src="${c.image}" alt="${c.name}"><br>${c.name}<br><span style="font-size:0.75rem; color:var(--text-muted); font-weight:400;">${c.variant}</span></th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Ex-Showroom Price</strong></td>
                    ${cars.map(c => `<td style="color:var(--bmw-blue); font-weight:700;">${c.priceExShowroom}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Estimated On-Road</strong></td>
                    ${cars.map(c => `<td>${c.priceOnRoad}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Engine / Battery</strong></td>
                    ${cars.map(c => `<td>${c.displacement}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Maximum Power</strong></td>
                    ${cars.map(c => `<td><strong>${c.power}</strong></td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Peak Torque</strong></td>
                    ${cars.map(c => `<td>${c.torque}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>0–100 km/h</strong></td>
                    ${cars.map(c => `<td>${c.acceleration}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Top Speed</strong></td>
                    ${cars.map(c => `<td>${c.topSpeed}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Transmission</strong></td>
                    ${cars.map(c => `<td>${c.transmission}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Drivetrain</strong></td>
                    ${cars.map(c => `<td>${c.drivetrain}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Fuel / Energy Type</strong></td>
                    ${cars.map(c => `<td>${c.fuelType}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Mileage / Range</strong></td>
                    ${cars.map(c => `<td>${c.mileage}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Seating Capacity</strong></td>
                    ${cars.map(c => `<td>${c.seating}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Key Luxury Features</strong></td>
                    ${cars.map(c => `<td><ul style="padding-left:15px; font-size:0.85rem;">${c.features.map(f => `<li>${f}</li>`).join('')}</ul></td>`).join('')}
                </tr>
            </tbody>
        </table>
    `;

    container.innerHTML = html;
}

/* TEST DRIVE FORM & DROPDOWNS */
function initTestDriveDropdowns() {
    const tdModelSelect = document.getElementById('tdModel');
    bmwModels.forEach(car => {
        const opt = document.createElement('option');
        opt.value = car.name;
        opt.textContent = car.name + ' (' + car.variant + ')';
        tdModelSelect.appendChild(opt);
    });

    // Set min date to today
    const dateInput = document.getElementById('tdDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    const form = document.getElementById('testDriveForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('tdName').value;
        const email = document.getElementById('tdEmail').value;
        const phone = document.getElementById('tdPhone').value;
        const model = document.getElementById('tdModel').value;
        const dealer = document.getElementById('tdDealership').value;
        const date = document.getElementById('tdDate').value;
        const time = document.getElementById('tdTime').value;

        const detailsBox = document.getElementById('successDetailsText');
        detailsBox.innerHTML = `
            <strong>Customer:</strong> ${name}<br>
            <strong>Model:</strong> ${model}<br>
            <strong>Dealership:</strong> ${dealer}<br>
            <strong>Appointment:</strong> ${date} at ${time}<br>
            <strong>Contact:</strong> ${phone}
        `;

        document.getElementById('successModal').classList.add('active');
        form.reset();
    });
}

/* FAQ ACCORDION */
function initFAQ() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accordionItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}
