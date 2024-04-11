import React from 'react';
import { useBuy } from '../../hooks';
import { InfoCompras } from '../infoCompras';
import { Button } from '../Button';

import '../../theme/ListaProductosCarrito.css';


export const ListaProductosCarrito = (props) => {

    // const {deleteCar, agregarProducts} = useBuy();

    const { 
        nombreProducto,
        precio,
        cantidad,
        id,
        deleteCar,
        agregarProducts
    } = props;


    const subTotalCal = (precio, cantidad) => {
        return precio * cantidad;
    }
    
    


    return (
        <div className="view-producto">
            <div>
                <InfoCompras 
                    textParrafo="Nombre producto"
                    textLabel={ nombreProducto }
                    styleParrafo={{
                        fontSize: "20px",
                        height: "20px"
                    }}
                    styleLabel={{
                        fontSize: "20px",
                        marginLeft: "120px",
                        height: "20px"
                    }}
                />
            </div>
            <div>
                <InfoCompras 
                    textParrafo="Precio unitario"
                    textLabel={`$ ${precio}`}
                    styleParrafo={{
                        fontSize: "20px",
                        height: "20px"
                    }}
                    styleLabel={{
                        fontSize: "20px",
                        marginLeft: "120px",
                        height: "20px"
                    }}
                />
            </div>
            <div>
                <InfoCompras 
                    textParrafo="Cantidad"
                    textLabel={ cantidad }
                    styleParrafo={{
                        fontSize: "20px",
                        height: "20px",
                    }}
                    styleLabel={{
                        fontSize: "20px",
                        marginLeft: "120px",
                        height: "20px"
                    }}
                />
            </div>
            <div>
                <InfoCompras 
                    textParrafo="Total Producto"
                    textLabel={`$ ${subTotalCal(precio, cantidad)}`}
                    styleParrafo={{
                        fontSize: "20px",
                        height: "20px",
                        marginLeft: "120px",
                    }}
                    styleLabel={{
                        fontSize: "20px",
                        marginLeft: "120px",
                        height: "20px"
                    }}
                />
            </div>
            <div className="view-producto-btn">
                <Button 
                    type="primary"
                    name="Eliminar"
                    stylesBtn={{
                        backgroundColor: "#DE331B",
                        border: "none",
                        borderRadius: "10px",
                        width: "90px",
                        height: "25px",
                        position: "relative",
                        top: "40px",
                        left: "40px",
                        color: "white",
                        fontWeight: "bold"
                    }}
                    onClick={ () => deleteCar(id)}
                /> 
                <Button 
                    type="primary"
                    name="Agregar producto"
                    stylesBtn={{
                        backgroundColor: "#309F5A",
                        border: "none",
                        borderRadius: "10px",
                        width: "160px",
                        height: "25px",
                        position: "relative",
                        top: "40px",
                        left: "50px",
                        fontWeight: "bold"
                    }}
                    onClick={ () => agregarProducts(id)}
                /> 
            </div>
                        
        </div>
    )
}
