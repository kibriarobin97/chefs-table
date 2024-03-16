import { MdOutlineWatchLater } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";
import PropTypes from 'prop-types';

const Item = ({item, handleCooked}) => {
    const { name, image, description, preparing_time, calories, ingredients } = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
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
                    <div className="flex items-center justify-between my-3">
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
                        <button onClick={()=>handleCooked(item)} className="btn rounded-full text-black bg-[#0BE58A]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    handleCooked: PropTypes.func
}

export default Item;