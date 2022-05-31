import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext() // Prod который с большой буквы это компонент

const API = "http://localhost:8000/products"
const INIT_STATE = {
    products: []
}
function reducer(state = INIT_STATE, action){
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload};
        default: 
            return state
    }
}

const ProductsContextProvider = ({children}) => {                                    //дочерние комп-ы всегла называются чилдрен
    
    const [state, dispatch] = useReducer(reducer, INIT_STATE)         //dispatch is a func that changes state
    
    async function createProduct(newProduct){
        await axios.post(API, newProduct)
    }
    
    async function getProducts(){
        let res = await axios(API)
        console.log(res);
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data
        })
    }

    return <productsContext.Provider value={{
        products: state.products,
        createProduct, 
        getProducts}}>{children}</productsContext.Provider>
}
    
export default ProductsContextProvider;