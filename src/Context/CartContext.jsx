/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState} from "react";

const productDetails = createContext(null);
const handleProductDetails = createContext(null);

const CartContext = ({children}) => {
  const datas = [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        }
    ]

    const [data,setData] = useState(datas);
    
    const [totalQty,setTotalQty] = useState(0);
    const [total,setTotal] = useState(0);

    const handleRemove = (ids) =>{
        const filData = data.filter((card) => card.id !== ids);
        setData(filData);
        setTotalQty(filData.length);
        setTotal(filData.reduce((acc,curr) => acc + curr.price,0));
    }

    useEffect(()=>{
        setTotalQty(datas.length);
        setTotal(() => datas.reduce((acc,curr) => acc + curr.price,0));
    },[]);

  return (
    <div>
        {data &&
        <productDetails.Provider
        value ={
            {
                data,
                setData,
            }
        }
        >
            <handleProductDetails.Provider
            value={
                {
                    total,
                    setTotal,
                    handleRemove,
                    totalQty,
                    setTotalQty,
                }
            }
            >
                {children}
            </handleProductDetails.Provider>
        </productDetails.Provider>
        }
    </div>
  )
}

export default CartContext;

export const CartData = () => {
    return useContext(productDetails);
};

export const HandleDetails = () => {
    return useContext(handleProductDetails);
}