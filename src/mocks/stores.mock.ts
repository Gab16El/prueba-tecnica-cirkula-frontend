export interface StoresInterface {
    id: number;
    name: string;
    bannerUrl: any;
    latitude: number;
    longitude: number;
    openTime: string;
    closeTime: string;
    distanceInKm: number;
    isOpen: boolean;
}
export const stores: StoresInterface[] = [
    {
        "id": 1,
        "name": "Chifa el Sol",
        "bannerUrl": require("../assets/stores/chifa-el-sol.png"),
        "latitude": 40.7128,
        "longitude": -74.0060,
        "openTime": "09:00 AM",
        "closeTime": "07:00 PM",
        "distanceInKm": 1.5,
        "isOpen": true
    },
    {
        "id": 2,
        "name": "Primos - Chiken Lovers Bar",
        "bannerUrl": require("../assets/stores/primos.png"),
        "latitude": 34.0522,
        "longitude": -118.2437,
        "openTime": "10:00 AM",
        "closeTime": "08:30 PM",
        "distanceInKm": 3.2,
        "isOpen": true
    }
]

export const exploreStore = [
    {
        id: 1,
        name: "Primos - Chiken Lovers Bar",
        address: "Av. Conquistadores 201, San Isidro",
        phone: "(01) 12345678",
        rating: 4.8,
        thumbnail: require('../assets/stores/primos.png'),
        buyUntil: "10:30 pm",
        pickupTime: "11:00 pm"
    }
]

export const favsStores = []