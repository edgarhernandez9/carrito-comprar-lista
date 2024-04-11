import React, { useEffect} from 'react';
import { useBuy } from '../../hooks'
import { InfoCompras, ListaProductosCarrito } from '../../components';

import '../../theme/Home.css';

export const Home = () => {

    const {total, dataProduc, calTotal, dataProduct} = useBuy();

    useEffect(() => {
      
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('productData='));
        if (cookieData) {
            const storedData = decodeURIComponent(cookieData.split('=')[1]);
            const parsedData = JSON.parse(storedData);
            dataProduct(parsedData)
        } else {
            console.log('No se encontraron datos en la cookie.');
            dataProduct([])
        }
    }, [])
    

    useEffect(() => {
        calTotal(dataProduc)
    })

    return (
        <div className="container-compras">
            <p className="container-compras-title">Productos Agregados en carrito</p>

            {
                dataProduc.length === 0 ? 
                    <div className="sinDatos">No hay productos </div> : 
                    <>
                        <div className="container-compras-productos">
                            <div>
                                {
                                    dataProduc.map((producto) => (
                                        <ListaProductosCarrito
                                            key={ producto.id}
                                            nombreProducto={ producto.name}
                                            precio={ producto.precio }
                                            cantidad={ producto.cantidad }
                                            id={ producto.id }
                                        />
                                    ))
                                }
                                
                            </div>
                        </div>
                        <div className="container-compras-footer">
                            <InfoCompras 
                                textParrafo="Total compra:"
                                textLabel={ `$ ${parsePrice(total)}` }
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



const parsePrice = (price) => {
    return parseFloat(price.toFixed(2))
}