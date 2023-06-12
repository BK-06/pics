import axios from 'axios';

const searchImages = async (term) => {
    try {
        
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization : 'Client-ID 2Cs58dHCGt1YqFMX7eHXpEms6tslBaRupSK1jgaVEQ0',
        },
        params: {
            query : term
        },
    }); 
    // console.log(response.data.results);
    return response.data.results;
    
    } catch (error) {
        console.log(error);       
    }
};


export default searchImages;