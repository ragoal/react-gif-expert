export const GifItem = ({title, url}) => {
    // return ( <img className="card" key={image.id} src={image.url} alt={image.title}/> );
    return ( 
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}
 