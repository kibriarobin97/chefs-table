import PropTypes from 'prop-types';

const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div className="col-span-2">
            <h3 className="text-2xl font-bold text-center">Want to cook: {carts.length}</h3>
        </div>
    );
};

Cart.propTypes = {
    carts: PropTypes.array.isRequired
}

export default Cart;