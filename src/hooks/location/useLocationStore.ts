import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import { Rootstate } from '../../store/store';
import { setCurrentLocation } from '../../store/location/locationSlice';

export const useLocationStore = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: Rootstate) => state.location);

    const requestLocationPermission = async (): Promise<boolean> => {
        if (Platform.OS === 'android') {
            const alreadyGranted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (alreadyGranted) return true;

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permiso de ubicación',
                    message: 'Cirkula necesita acceder a tu ubicación para mostrarte tiendas cercanas',
                    buttonPositive: 'Permitir',
                    buttonNegative: 'Cancelar',
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    };

    const getCurrentLocation = async () => {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) return;

        Geolocation.getCurrentPosition(
            (position) => {
                dispatch(setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }));
            },
            (error) => console.log('Error obteniendo ubicación:', error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    return {
        ...state,
        getCurrentLocation,
    }
}