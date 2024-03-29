import React from "react";
import styles from "./ThumbImage.module.scss";

interface Props {
    readonly image: string;
    readonly onChoose: () => void;
    readonly selectedImage: string;
}
export const ThumbImage: React.FunctionComponent<Props> = props => {
    const { image, onChoose, selectedImage } = props;

    return (
        <div className={styles.embla_slide_thumb}>
            <button
                type="button"
                title="thumb image"
                className={`${styles.slide_btn}   ${styles[selectedImage]}`}
                onClick={() => onChoose()}
            >
                <img
                    src={image}
                    alt="thumb image"
                    className={styles.slide_btn_img}
                />
            </button>
        </div>
    );
};
