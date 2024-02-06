import { toCapital } from "../helpers/toCapital";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad -1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    const handleAgregar = () => {
        console.log ( {...item, cantidad});
    } 
    return (
        <div className="container">
            <div className="product-detalle">
                <img src= {item.image} alt= {item.name} />
                <div>
                    <h3 className="titulo"> {item.name} </h3>
                    <p className="description"> {item.description} </p>
                    <p className="categoria">Categoria: {toCapital(item.categorias)} </p>
                    <p className="precio">$ {item.price} </p>
                </div>
                <ItemCount cantidad= {cantidad} handleSumar= {handleSumar} handleRestar= {handleRestar} handleAgregar= {handleAgregar} />
            </div>
        </div>
    );
};

export default ItemDetail;