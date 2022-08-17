import React from "react";
import styles from "./LightBox.module.scss";
import Close from "svgs/icon-close.svg";
import { Carousel } from "components";
interface Props {
    readonly onLight: () => void;
}
export const LightBox: React.FunctionComponent<Props> = props => {
    const { onLight } = props;

    return (
        <section className={styles.section_zoom} aria-label="zoom">
            <button
                type="button"
                title="close"
                className={styles.btn_close_zoom}
                onClick={() => onLight()}
            >
                <Close />
            </button>
            <Carousel
                zoom="zoom"
                zoomBtn="zoom_btn"
                zoomContainer="embla_zoom"
            />
        </section>
    );
};
