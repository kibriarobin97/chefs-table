import PropTypes from 'prop-types';

const Cart = ({ carts, handlePreparing, cooking }) => {
    console.log(cooking)
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
                                        <th>{idx + 1}</th>
                                        <td>{cart.name}</td>
                                        <td>{cart.preparing_time} minutes</td>
                                        <td>{cart.calories} calories</td>
                                        <td><button onClick={() => handlePreparing(cart.id, cart)} className="btn bg-[#0BE58A] rounded-full">Preparing</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-5'>
                <h3 className="text-2xl font-bold text-center border-b-2">Currently cooking: {cooking.length}</h3>
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
                                    cooking.map((cook, idx) => (
                                        <tr key={idx}>
                                            <th>{idx + 1}</th>
                                            <td>{cook.name}</td>
                                            <td>{cook.preparing_time} minutes</td>
                                            <td>{cook.calories} calories</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='border-t-2 flex justify-around items-center'>
                <h3 className='text-1xl font-bold'>Total:</h3>
                <p>Minutes: {cooking.reduce((p, c) => p + c.preparing_time, 0)}</p>
                <p>Calories: {cooking.reduce((p, c) => p + c.calories, 0)}</p>
            </div>
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func,
    cooking: PropTypes.array.isRequired
}

export default Cart;