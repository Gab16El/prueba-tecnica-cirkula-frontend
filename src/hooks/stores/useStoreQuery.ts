import { useQuery } from '@tanstack/react-query';
import { getStores } from '../../services/store.service';

// Lima, Miraflores como coordenadas por defecto
// ESTO ES DE LA WEB, PRACTICAMENTE ES LO MISMO
// LA DIFERENCIA ES QUE ACA SI ME PIDE QUE LE ENVIE MIS COORDENADAS REALES
const DEFAULT_COORDS = {
    latitude: -12.1211,
    longitude: -77.0282,
};

interface Coords {
    latitude: number;
    longitude: number
}

export const useStoresQuery = (coords: Coords | null) => {
    return useQuery({
        queryKey: ['stores', coords?.latitude, coords?.longitude],
        queryFn: () => getStores(coords!),
        select: (data) => data.stores,
        enabled: !!coords,
    });
};