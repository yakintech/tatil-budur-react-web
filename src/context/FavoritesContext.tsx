import { createContext, useState } from "react";
import { ProductModel } from "../models/Product";


export const favoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({children} : any) => {
    
        const [favorites, setFavorites] = useState<ProductModel[]>([]);
    
        return (
            <favoritesContext.Provider value={{favorites, setFavorites}}>
                {children}
            </favoritesContext.Provider>
        )

}






export type FavoritesContextType = {
    favorites: ProductModel[];
    setFavorites: (model: ProductModel[]) => void;
};