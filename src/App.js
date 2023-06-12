import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";
import searchImages from "./SearchImagesApi";

export default function App(){

    const[images, setImages] = useState([]);


    const handleSubmit  = async (term) => {
        const result = await searchImages(term);

        setImages(result);
    }
    return (
        <div>
            <SearchBar onSubmit= {handleSubmit} />
            <ImageList images={images} />
        </div>

    )
}