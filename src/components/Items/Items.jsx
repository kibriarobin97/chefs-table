import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    
    return (
        <div>
            <h3>Total Items:{items.length}</h3>
            {
                items.map((item) => <Item key={item.id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;