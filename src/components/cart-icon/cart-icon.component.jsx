import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartDropdown }) => {
  const handleClick = (e) => {
    toggleCartDropdown();
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="cart-counter">0</span>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   isHidden: state.cart.isHidden,
// });

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () =>
    dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
