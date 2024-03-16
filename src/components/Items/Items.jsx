import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";
import PropTypes from 'prop-types';

const Items = ({handleCooked}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    
    return (
        <div className="col-span-5 grid md:grid-cols-2 gap-5">
            
            {
                items.map((item) => <Item 
                key={item.id} 
                handleCooked={handleCooked}
                item={item}></Item>)
            }
        </div>
    );
};


Items.propTypes = {
    handleCooked: PropTypes.func
}

export default Items;