import React, { useState, createContext, useContext } from 'react';


export const BuyContext = createContext();


export function BuyProvider(props){

    const { children } = props;
    const [total, setTotal] = useState(0);
    const [dataProduc, setDataProduc] = useState([]);

    const calTotal = (products) => {

        const mapTotal = products.map( product => product.precio * product.cantidad);
        const newTotal = mapTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotal(newTotal);
    }
    
    const deleteCar = (id) => {
        const filterDelete = dataProduc.filter( data => data.id !== id);
        setDataProduc(filterDelete);
    }

    const dataProduct = (productos) => {
        const dataProductos = sessionStorage.getItem('myProducts');

        if (dataProductos) {
            setDataProduc(JSON.parse(dataProductos))
        }else{
            setDataProduc(productos)
        }
        
    }

    const agregarProducts = (id) => {
        setDataProduc( dataProduc.map( (producto) => 
            producto.id === id ? {...producto, cantidad: producto.cantidad + 1} : producto))

    }


    const data = {
        total,
        dataProduc,
        calTotal,
        dataProduct,
        deleteCar,
        agregarProducts
    }

    return <BuyContext.Provider value={ data }>
        { children }
    </BuyContext.Provider>
}

// export const useMyContext = () => useContext(BuyContext);