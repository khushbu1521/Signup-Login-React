import * as types from '../actions/actionType';
import _ from 'lodash';

const INITIALSTATE = {
    products: [
        { id: 1, name: 'HP LapTop', price: 500, stock: 20 },
        { id: 2, name: 'Mac Mini', price: 900, stock: 32 },
        { id: 3, name: 'Dell', price: 1500, stock: 12 },
        { id: 4, name: 'Lenovo', price: 3000, stock: 9 },
        { id: 5, name: 'Acer', price: 2000, stock: 99 },
        { id: 6, name: 'Air MacBook', price: 600, stock: 86 },
        { id: 7, name: 'Sony', price: 990, stock: 12 }
    ]
};

export const ProductReducer = ( state = INITIALSTATE, action) => { 
    switch (action.type) { 
        case types.DELETE_USER_PRODUCT:
            let allProducts = JSON.parse(JSON.stringify(state.products));
            let productIndex = _.findIndex(allProducts, {id: action.payload});
            if(productIndex != -1) {
                allProducts.splice(productIndex, 1);
            }
            return {
                ...state,
                products: allProducts
            };
        case types.SEARCH_PRODUCT:
            let allProductList = JSON.parse(JSON.stringify(state.products));
            if(action.payload) {
                var filteredProducts = allProductList.filter(function(obj) {
                    return obj["name"] === action.payload;
                });
            } else {
                var filteredProducts = [{ id: 1, name: 'HP LapTop', price: 500, stock: 20 },
                { id: 2, name: 'Mac Mini', price: 900, stock: 32 },
                { id: 3, name: 'Dell', price: 1500, stock: 12 },
                { id: 4, name: 'Lenovo', price: 3000, stock: 9 },
                { id: 5, name: 'Acer', price: 2000, stock: 99 },
                { id: 6, name: 'Air MacBook', price: 600, stock: 86 },
                { id: 7, name: 'Sony', price: 990, stock: 12 }]
            }           
            return {
                ...state,
                products: filteredProducts
            }
        default: 
            return state;
    }
}

export default ProductReducer;