export interface Pokemon {
    id: number;
    name: string;
    type: string;
    image: string;
}

export const database: Pokemon[] = [
    { id: 1, name: "Pikachu", type: "Electric", image: "images/Pikachu.png" },
    { id: 2, name: "Bulbasaur", type: "Grass", image: "images/Bulbasaur.png" },
    { id: 3, name: "Charmander", type: "Fire", image: "images/Charmander.png" },
    { id: 4, name: "Squirtle", type: "Water", image: "images/Squirtle.png" },
];
