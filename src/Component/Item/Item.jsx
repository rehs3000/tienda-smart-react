import "./Item.css";

export const Item  = ({title, description, price, image, children}) => {

    return (
        <article className="card">
            <img src={image} alt={`Foto de ${title}`} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>

            {children}

        </article>
    );


};