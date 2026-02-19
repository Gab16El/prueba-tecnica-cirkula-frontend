export interface CatsProps {
    id: number;
    title: string;
    description: string;
    thumbnail: any;
}

export const cats: CatsProps[] = [
    {
        id: 1,
        title: 'Postres',
        thumbnail: require('../assets/cats/1.png'),
        description: 'Tus postres favs',
    },
    {
        id: 2,
        title: 'Productos',
        thumbnail: require('../assets/cats/2.png'),
        description: 'Tus Productos favs',
    },
    {
        id: 3,
        title: 'Saludable',
        thumbnail: require('../assets/cats/3.png'),
        description: 'Tus Saludables favs',
    },
    {
        id: 4,
        title: 'Cafeteria',
        thumbnail: require('../assets/cats/4.png'),
        description: 'Cafeteria favs',
    },
    {
        id: 5,
        title: 'Panaderia',
        thumbnail: require('../assets/cats/5.png'),
        description: 'Tus panes favs',
    },
    {
        id: 6,
        title: 'Comida Rápida',
        thumbnail: require('../assets/cats/6.png'),
        description: 'Tu comida rápida fav',
    }
]