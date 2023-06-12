import { useState } from 'react';
import './SearchBar.css' 


export default function SearchBar({ onSubmit }){

    const [term, setTerm] = useState("");   

    function handleFormSubmit(event) {
        event.preventDefault();
        // console.log('form submitted because of html built in form tag in browser');
        onSubmit(term);
    }

    function handleChange(event) {
        // console.log(event.target.value);
        setTerm(event.target.value);
    }
    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Seach Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    )
}