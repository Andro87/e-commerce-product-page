import React from "react";
import styles from "./info.module.scss";
import Cart from "../svgs/icon-cart.svg";
import Plus from "../svgs/icon-plus.svg";
import Minus from "../svgs/icon-minus.svg";
interface Props {
    readonly onRemove: Function;
    readonly onAdd: Function;
    readonly numberOfItems: number;
    readonly onShowNumberOfItems: Function;
}

const Info: React.FunctionComponent<Props> = props => {
    const { onRemove, onAdd, numberOfItems, onShowNumberOfItems } = props;
    return (
        <>
            <h1>
                <span>Sneaker Company</span>
                <br />
                Fall Limited Edition Sneakers
            </h1>

            <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className={styles.price_wrap}>
                <p>
                    $125.00<span>50%</span>
                </p>
                <p>$250.00</p>
            </div>

            <div className={styles.interaction_wrap}>
                <div className={styles.items_numbers}>
                    <button
                        type="button"
                        className={styles.button}
                        title="minus"
                        onClick={() => onRemove()}
                    >
                        <Minus />
                    </button>
                    <p>{numberOfItems}</p>
                    <button
                        type="button"
                        className={styles.button}
                        title="plus"
                        onClick={() => onAdd()}
                    >
                        <Plus />
                    </button>
                </div>

                <div
                    className={styles.add_items}
                    onClick={() => onShowNumberOfItems()}
                >
                    <span>
                        <Cart />
                    </span>
                    <button
                        type="button"
                        className={styles.button}
                        title="add to cart"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Info;
