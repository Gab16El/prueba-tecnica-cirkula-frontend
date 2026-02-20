# Cirkula App - Prueba Técnica Frontend

Aplicación móvil desarrollada en React Native que consume la API REST de Cirkula para mostrar tiendas cercanas al usuario.

---

## Tecnologías

- **React Native 0.84** con TypeScript
- **Redux Toolkit** para manejo de estado global (ubicación y favoritos)
- **TanStack Query 5** para fetching y caché de datos
- **Axios** para peticiones HTTP
- **React Navigation** con Bottom Tabs
- **AsyncStorage** para persistencia de favoritos
- **@react-native-community/geolocation** para ubicación del usuario
- **react-native-linear-gradient** para overlays en imágenes
- **react-native-vector-icons** para iconografía

---

## Requisitos previos

- Node.js 20 o superior
- Android Studio con emulador configurado
- JDK 17

---

## Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Gab16El/prueba-tecnica-cirkula-frontend.git
cd pruebaTecnicaFrontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Correr la app

```bash
npx react-native run-android
```

> Asegúrate de tener el emulador corriendo antes de ejecutar el comando.

---

## Funcionalidades

- Lista de tiendas consumida desde la API con nombre, distancia y estado abierto/cerrado
- Geolocalización real del usuario para calcular distancias (opcional, con fallback a Miraflores)
- Favoritos persistentes con AsyncStorage — sobreviven al cerrar la app
- Pull to refresh para recargar las tiendas
- Skeletons mientras cargan los datos
- Categorías con scroll horizontal
- Sección de tiendas favoritas en la pantalla principal

---

## Estructura del proyecto

```
src/
├── api/                  # Configuración de Axios
├── assets/               # Imágenes locales
├── components/
│   ├── home/             # Header, Categories, FavoritePlaces, Explore
│   ├── shared/           # IonIcon, Empty, Section
│   └── store/            # StoreCard, StoreCardSkeleton
├── config/               # Query client de TanStack Query
├── hooks/
│   ├── location/         # useLocationStore
│   └── stores/           # useStoreQuery, useFavorites
├── navigation/           # AppNavigator, MainTabs
├── screens/              # HomeScreen, StoresScreen
├── services/             # store.service.ts
├── store/                # Redux store, locationSlice, favoritesSlice
├── theme/                # Colores
└── types/                # Tipos TypeScript
```

---

## Backend

Este proyecto consume la API REST del backend de Cirkula desplegada en Railway:
`https://prueba-tecnica-cirkula-backend-production.up.railway.app/api`

Puedes encontrar el repositorio del backend en:
[cirkula-api](https://github.com/Gab16El/prueba-tecnica-cirkula-backend)