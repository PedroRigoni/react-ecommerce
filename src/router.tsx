import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import type { CartItem } from "./types/index"; // Centralize o tipo
import { AllProducts } from './Pages/AllProducts';

interface RouterProps {
    addToCart: (item: CartItem) => void;
}

export function Router({ addToCart }: RouterProps) {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home addToCart={addToCart} />}
            />
            <Route path='/products' element={<AllProducts addToCart={addToCart} />} />
           
        </Routes>
    );
}
