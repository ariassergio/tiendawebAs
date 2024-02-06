import React from 'react';
import { Link } from 'react-router-dom';
const Item = ( {producto} ) => {
    return (
        <div className='producto'>
            <img src={producto.image} alt={producto.name} />
            <div>
                <h2>{producto.name}</h2>
                <p>Precio: $ {producto.price} </p>
                <p> Categoria: {producto.categorias} </p>
                <Link className="ver-mas" to = {`/item/${producto.id} ` } >Ver mas</Link>
            </div>
        </div>
    );
};

export default Item;