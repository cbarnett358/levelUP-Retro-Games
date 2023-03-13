//search bar component for products 

import { useState } from "react";
import { useRouter } from "next/router";
import { searchProducts } from "../components/ProductCards";

function SearchBar() {
    //ret

    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/products?searchTerm=${searchTerm}`);
    };
 


    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>

      
    );
}

export default SearchBar;