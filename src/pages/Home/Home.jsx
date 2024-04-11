import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'
// import { useBuy } from '../../hooks';
import { InfoCompras, ListaProductosCarrito } from '../../components';

import '../../theme/Home.css';

const Home = () => {

    
    const [data, setData] = useState([]);

    const location = useLocation();

    useEffect(() => {
        if (location && location.state) {
            setData(location.state.data)
            
        } else {
            console.log('No se encontraron datos en la cookie.');
            setData([])
        }
    }, [location]);

    const deleteCar = (id) => {
        const filterDelete = data.filter( data => data.id !== id);
        setData(filterDelete);
    }
    
    const agregarProducts = (id) => {
        setData( data.map( (producto) => 
            producto.id === id ? {...producto, cantidad: producto.cantidad + 1} : producto))
    
    }
    
    return (
        <div className="container-compras">
            <p className="container-compras-title">Productos Agregados en carrito</p>

            {
                data.length === 0 ? 
                    <div className="sinDatos">No hay productos </div> : 
                    <>
                        <div className="container-compras-productos">
                            <div>
                                {
                                    data.map((producto) => (
                                        <ListaProductosCarrito
                                            key={ producto.id}
                                            nombreProducto={ producto.name}
                                            precio={ producto.precio }
                                            cantidad={ producto.cantidad }
                                            id={ producto.id }
                                            deleteCar={ deleteCar }
                                            agregarProducts={ agregarProducts }
                                        />
                                    ))
                                }
                                
                            </div>
                        </div>
                        <div className="container-compras-footer">
                            <InfoCompras 
                                textParrafo="Total compra:"
                                textLabel={ `$ ${parsePrice(calTotal(data))}` }
                                styleParrafo={{
                                    fontSize: "20px",
                                    height: "20px"
                                }}
                                styleLabel={{
                                    fontSize: "20px",
                                    marginLeft: "470px",
                                    height: "20px"
                                }}
                                styleContainerInfoCompras={{
                                    flexDirection: "row",
                                    alingItems: "end",
                                    border: "2px solid black",
                                    padding: "10px"
                                }}
                            />
                        </div>
                    </>
            }
            
        </div>
    )
}

export default Home;


const parsePrice = (price) => {
    return parseFloat(price.toFixed(2))
}

const calTotal = (products) => {

    const mapTotal = products.map( product => product.precio * product.cantidad);
    const newTotal = mapTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return newTotal;
}

