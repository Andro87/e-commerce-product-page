import React, { useContext, useState } from "react";
import styles from "./header.module.scss";
import Menu from "../svgs/icon-menu.svg";
import Close from "../svgs/icon-close.svg";
import Logo from "../svgs/logo.svg";
import Cart from "../svgs/icon-cart.svg";
import Delete from "../svgs/icon-delete.svg";
import BasketContext from "../contexts/BasketContext";

const Header: React.FunctionComponent = () => {
    //
    const context = useContext(BasketContext);
    const [open, setOpen] = context.open;
    const [numberOfItems, setNumberOfItems] = context.numberOfItems;
    const [showNumberOfItems, setShowNumberOfItems] = context.showNumberOfItems;
    const [showCart, setShowCart] = useState<boolean>(false);
    //
    function getFinalPrice(items: number) {
        const itemPrice = 125;
        return (itemPrice * items).toFixed(2);
    }

    return (
        <header className={styles.header}>
            <button
                type="button"
                title="menu"
                className={styles.menu_btn}
                onClick={() => setOpen(!open)}
            >
                {!open ? <Menu /> : <Close />}
            </button>
            <Logo />
            <nav
                className={`${styles.navigation} ${
                    open ? styles.navigation_mobile : null
                }    `}
            >
                <a href="#">Collections</a>
                <a href="#"> Men</a>
                <a href="#">Women</a>
                <a href="#"> About</a>
                <a href="#"> Contact</a>
            </nav>
            <div className={styles.cart_container}>
                <div className={styles.cart_wrap}>
                    <button
                        type="button"
                        title="basket"
                        onClick={() => setShowCart(!showCart)}
                        className={styles.cart_btn}
                    >
                        <Cart />
                    </button>
                    {numberOfItems !== 0 && showNumberOfItems ? (
                        <p>{numberOfItems}</p>
                    ) : null}
                </div>
                <button
                    type="button"
                    title="avatar"
                    onClick={() => setShowCart(!showCart)}
                    className={styles.cart_btn}
                >
                    <img src="/images/image-avatar.png" alt="avatar" />
                </button>
            </div>
            {showCart ? (
                <div className={styles.basket_container}>
                    <h5>Cart</h5>

                    <div className={styles.basket_details}>
                        {numberOfItems === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <>
                                <div className={styles.basket}>
                                    <img
                                        src="/images/image-product-1-thumbnail.jpg"
                                        alt=""
                                    />
                                    <div className={styles.details}>
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p>
                                            $125.00 x {numberOfItems}
                                            <span>
                                                ${getFinalPrice(numberOfItems)}
                                            </span>
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        title="delete"
                                        onClick={() => {
                                            setNumberOfItems(0),
                                                setShowNumberOfItems(false),
                                                setShowCart(false);
                                        }}
                                        className={styles.cart_btn}
                                    >
                                        <Delete />
                                    </button>
                                </div>

                                <button
                                    type="button"
                                    title="checkout"
                                    className={styles.checkout_btn}
                                    onClick={() => setShowCart(false)}
                                >
                                    Checkout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default Header;
