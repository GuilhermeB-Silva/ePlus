import { MdLaptopWindows } from 'react-icons/md';
import styles from './Index.module.scss';


export function ProductDetails({product}){

    return(

    <div className={styles.products} key={product.id}>

        <div className={styles.product}>

            <div className={styles.imageProduct}>
                <img src={product.img} alt="product image"/>
            </div>

            <div className={styles.productDetailed}>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productQuantity}>Qtd:1</span>
                <span className={styles.productPrice}>{product.price}</span>
            </div>
            
        </div>
    </div>
    )
}