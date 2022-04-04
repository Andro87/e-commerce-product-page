import React, { useState } from "react";
import styles from "./carousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Prev from "../svgs/icon-previous.svg";
import Next from "../svgs/icon-next.svg";
import ThumbImage from "./thumbImage";

interface Props {
    readonly onZoom?: Function;
    readonly zoom?: string;
    readonly zoomBtn?: string;
    readonly zoomContainer?: string;
}
const Carousel: React.FunctionComponent<Props> = props => {
    const { onZoom, zoom, zoomBtn, zoomContainer } = props;
    const [mainViewportRef, emblaApi] = useEmblaCarousel({
        loop: true
    });
    const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
        containScroll: "keepSnaps",
        draggable: false
    });
    const [selected, setSelected] = useState<number>();
    const images = [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg"
    ];

    const thumbImages = [
        "./images/image-product-1-thumbnail.jpg",
        "./images/image-product-2-thumbnail.jpg",
        "./images/image-product-3-thumbnail.jpg",
        "./images/image-product-4-thumbnail.jpg"
    ];

    return (
        <>
            <div className={`${styles.embla}  ${styles[zoomContainer]}`}>
                <div className={styles.embla__viewport} ref={mainViewportRef}>
                    <div className={styles.embla__container}>
                        {images.map((image, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div
                                    className={styles.embla__slide__inner}
                                    onClick={() => onZoom()}
                                >
                                    <img
                                        className={styles.embla__slide__img}
                                        src={image}
                                        alt=" image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.btn_container} ${styles[zoomBtn]}`}>
                    <button
                        type="button"
                        title="previous"
                        className={styles.btn}
                        onClick={() => emblaApi.scrollPrev()}
                    >
                        <Prev />
                    </button>
                    <button
                        type="button"
                        title="next"
                        className={styles.btn}
                        onClick={() => emblaApi.scrollNext()}
                    >
                        <Next />
                    </button>
                </div>
            </div>
            <div className={`${styles.embla} ${styles.embla__thumb}`}>
                <div className={styles.embla__viewport} ref={thumbViewportRef}>
                    <div
                        className={`${styles.embla__container} ${styles.embla__container__thumb} ${styles[zoom]} `}
                    >
                        {thumbImages.map((image, index) => (
                            <ThumbImage
                                key={index}
                                onChoose={() => {
                                    emblaApi.scrollTo(index),
                                        setSelected(index);
                                }}
                                image={image}
                                selectedImage={
                                    selected === index ? "selected" : null
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
