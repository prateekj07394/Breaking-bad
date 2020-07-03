import * as React from 'react';

interface Props{
    changeSearchQuery : (query:string)=> void
}

const Search:React.FC<Props> = ({changeSearchQuery}) => {
    return (
       <section className="search">
            <form>
            <input type="text" className="form-control" placeholder="Search Characters" onChange={(e)=>{
                changeSearchQuery(e.target.value);
            }} />
        </form>
       </section>
    )
}

export default Search;