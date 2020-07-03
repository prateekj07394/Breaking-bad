import * as React from 'react';
import { Character } from '../../constants';

interface Props {
    character: Character
}

const Card: React.FC<Props> = ({ character }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={character.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{character.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor portrayed : {character.portrayed} </strong>
                        </li>
                        <li>
                            <strong>Nickname : {character.nickname} </strong>
                        </li>
                        <li>
                            <strong>Birthday : {character.birthday} </strong>
                        </li>
                        <li>
                            <strong>Status :{character.status} </strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;