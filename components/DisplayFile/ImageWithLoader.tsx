import React, { useState } from "react";
import { Loader } from "./Loader";


const ImageWithLoader = ({ imageUrl, loader_text }: {
    imageUrl: string;
    loader_text: string;
}) => {
    const [showLoader, setShowLoader] = useState(true);

    const handleImageLoaded = () => {
        setShowLoader(false);
    };

    return (
        <>
            {showLoader && <Loader loader_text={loader_text} />}
            {imageUrl && imageUrl.length > 0 ? <img
                className="img-fluid-custom object-fit-contain rounded item-img border"
                src={imageUrl}
                alt={imageUrl}
                draggable={false}
                onLoad={handleImageLoaded}
            /> : null}
        </>
    );
};

export default ImageWithLoader;
