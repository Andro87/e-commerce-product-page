import React from "react";
import { createContext } from "react";

interface Props {
    readonly open?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];

    readonly numberOfItems?: [
        number,
        React.Dispatch<React.SetStateAction<number>>
    ];
    readonly showNumberOfItems?: [
        boolean,
        React.Dispatch<React.SetStateAction<boolean>>
    ];
}
const BasketContext = createContext<Props>({
    open: [false, open => void open],
    numberOfItems: [0, numberOfItems => void numberOfItems],
    showNumberOfItems: [false, showNumberOfItems => void showNumberOfItems]
});
export default BasketContext;
