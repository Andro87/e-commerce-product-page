import React, { useState } from "react";
import BasketContext from "../contexts/BasketContext";
import MainContainer from "../components/mainContainer";
export default function Home() {
    //

    const open = useState(false);
    const numberOfItems = useState(0);
    const showNumberOfItems = useState(false);

    return (
        <BasketContext.Provider
            value={{ open, numberOfItems, showNumberOfItems }}
        >
            <MainContainer />
        </BasketContext.Provider>
    );
}
