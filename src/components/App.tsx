import * as React from 'react';
import Header from './Header';
import axios from 'axios';
import CharacterGrid from './Characters/CharacterGrid';
import Search from './Search'
import {Character} from '../constants'


const App:React.FC=()=>{
    const [items, setItems] = React.useState<Array<Character>>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [query, setQuery] = React.useState<string>("");

    React.useEffect(()=>{
        const fetchItems = async () => {
            const res = await axios.get(
                `
                https://www.breakingbadapi.com/api/characters?name=${query}
                `
            );
            setItems(res.data);
            setLoading(false);
        };
        fetchItems();
    },[query]);

    const changeSearchQuery = (query:string):void => {
        setQuery(query);
    }
    
    return (
        <div className="container">
            <Header/>
            <Search changeSearchQuery={changeSearchQuery} />
            <CharacterGrid isLoading={loading} characters={items}  />
        </div>
    )
}

export default App;