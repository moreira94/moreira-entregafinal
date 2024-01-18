import { ItemDetail } from '../itemDetail/ItemDetail';
import {Item} from "../item/Item"

const ItemList = ({movies}) => {



    return (
        <div className="container">
            {
                movies.length > 0 &&
                movies.map((movie) => 
                <Item key={movie.id} movie={movie} />)}

        </div>
    )
}

export default ItemList