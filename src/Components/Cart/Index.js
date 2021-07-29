import { MdShoppingCart} from "react-icons/md";
import { BsFillTriangleFill } from "react-icons/bs";
import styles from './Index.module.scss';
import { useState } from 'react';
import { ProductDetails } from "./ProductDetails/Index";

export function Cart({products}){

    const [isProductListShowing,setIsProductListShowing] = useState(false)

    function showProductList(){
        setIsProductListShowing(!isProductListShowing)
    }

    const totalValue = products?.reduce((acc,cur)=>{
        return acc + cur.calcPrice
    },0)

    const totalPrice = new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(totalValue) 

    return(

        <div className={styles.cartContainer}>

            <MdShoppingCart onClick={showProductList} className={styles.icon}/>
        
            <div className={`${styles.productList} ${isProductListShowing ? '' : styles.showList}`}>

                <BsFillTriangleFill className={styles.triangle}/>
                {
                    products?.map(product=>(
                        <ProductDetails product={product} key={product.id}/>
                    ))
                }
                <span className={styles.totalPrice}>Total do pedido: <b>{totalPrice}</b></span>
                <button className={styles.checkoutBtn}>FINALIZAR COMPRA</button>
            </div>

        </div>
    )
}