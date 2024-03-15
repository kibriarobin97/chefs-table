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
        <div className="col-span-4 grid md:grid-cols-2 gap-8">
            
            {
                items.map((item) => <Item key={item.id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;