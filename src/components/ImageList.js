import React from 'react'
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const items = props.images.map((image) =>
        <ImageCard key={image.id} image={image} />
    );
    return (
              <div className="image-list">
                      {items}
              </div>
    )
};

export default ImageList;