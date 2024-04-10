import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useBuy } from '../../hooks'
import { InfoCompras, ListaProductosCarrito } from '../../components';

import '../../theme/Home.css';

const products = [
    {
        id: 1,
        name: 'Producto 1',
        image: 'https://mandalacases.com/cdn/shop/articles/accesorios-para-celulares-mandala-cases.jpg?v=1633406350&width=1024',
        precio: 120,
        cantidad: 2
    },
    {
        id: 2,
        name: 'Producto 2',
        image: 'https://img.ws.mms.shopee.com.mx/fcc88c10fb8ca06c28c43c79cdb412c4',
        precio: 200,
        cantidad: 2
    },
];
  
export const Home = () => {

    const location = useLocation();
    const {total, dataProduc, calTotal, dataProduct} = useBuy();

    useEffect(() => {
      
      if (location.state) {
        dataProduc(location.state)
      }else{
        dataProduct(products)
      }
    }, [])
    

    useEffect(() => {
        calTotal(dataProduc)
    })

    return (
        <div className="container-compras">
            <p className="container-compras-title">Productos Agregados en carrito</p>

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
                    textLabel={ `$ ${total}` }
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
        </div>
    )
}
