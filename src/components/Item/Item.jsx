import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";

const Item = ({item}) => {
    const { name, image, description, preparing_time, calories, ingredients } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-5/6 h-48 object-cover rounded-lg" src={image} alt={`picture of ${name}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <ul>
                        <h3 className="font-bold">Ingredients: {ingredients.length}</h3>
                        {
                            ingredients.map((ingred, idx) => <li className="text-[#878787]" key={idx}>* {ingred}</li>)
                        }
                    </ul>
                    <div className="flex items-center justify-between">
                        <div className="w-32 flex items-center gap-0">
                            <p><MdOutlineWatchLater /></p>
                            <p>{preparing_time} minutes</p>
                        </div>
                        <div className="w-32 flex items-center gap-0">
                            <p><FaFireAlt /></p>
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn rounded-full text-black bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;