import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';




export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    

  

    return ( 
        <>
            <h3>{category}</h3>
            {
                isLoading && <p>Loading...</p>
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image}></GifItem>  
                    ))
                }
            </div>
        </>
     );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
 
