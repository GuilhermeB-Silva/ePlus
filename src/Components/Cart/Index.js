import { MdShoppingCart} from "react-icons/md";
import { BsFillTriangleFill } from "react-icons/bs";
import styles from './Index.module.scss'

export function Cart({products}){

    console.log(products)
    return(
        <div className={styles.cartContainer}>
            <MdShoppingCart className={styles.icon}/>
        
            <div className={styles.productList}>
                <BsFillTriangleFill className={styles.triangle}/>

                <div className={styles.products}>
                    <div className={products}>

                        <div></div>
                        <div></div>
                        

                    </div>
                </div>
                <button></button>
            </div>

        </div>
    )
}