import * as React from 'react';
import Card from './Card';
import {Character} from '../../constants';

interface Props{
    isLoading : boolean
    characters : Array<Character>
}



const CharacterGrid:React.FC<Props> = ({isLoading, characters})=>{
    return isLoading ? <div>Loading ....</div> : (
        <section className="cards">
            {characters.map((character,index)=>{
                return <Card character={character} />
            })}
        </section>
    )
}

export default CharacterGrid;