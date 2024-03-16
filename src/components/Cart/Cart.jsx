import PropTypes from 'prop-types';

const Cart = ({ carts, handlePreparing }) => {
    console.log(carts)
    return (
        <div className="col-span-4">
            <h3 className="text-2xl font-bold text-center border-b-2">Want to cook: {carts.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                carts.map((cart, idx) => (
                                    <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{cart.name}</td>
                                        <td>{cart.preparing_time} minutes</td>
                                        <td>{cart.calories} calories</td>
                                        <td><button onClick={()=>handlePreparing(cart.id)} className="btn bg-[#0BE58A] rounded-full">Preparing</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func
}

export default Cart;