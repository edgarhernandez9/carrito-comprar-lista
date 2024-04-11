import { useContext } from 'react';
import { BuyContext } from '../context';

const context = ()=> useContext(BuyContext);

export const useBuy = () => {

    return {
        ...context
    }
}