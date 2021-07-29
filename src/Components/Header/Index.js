import styles from './Index.module.scss';
import { MdDehaze,MdClose } from "react-icons/md";
import { useEffect,useState } from 'react';

import { Cart } from '../Cart/Index';
import { User} from '../User/Index';
import { Search } from '../Search/Index';

import axios from 'axios'

export function Header(){

    const [ isMenuMobileOpen,setIsMenuMobileOpen] = useState(false)
    const [ products, setProducts] = useState()
    const [ windowSize,setWindowSize] = useState()

    useEffect(()=>{
        async function getApiData(){
            try{
                const result = await axios.get("https://dscatalog-bootcamp.herokuapp.com/products").then(result=> result.data.content)

                const arrayProducts = result.map(product=>{
                    return {
                        id:product.id,
                        name:product.name,
                        img:product.imgUrl,
                        price:new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format(product.price),
                        calcPrice:product.price
                    }
                }).slice(0,4)
                setProducts(arrayProducts)
            }catch(e){
                console.error(e)
            }    
        }
        getApiData()

        const windowWidth = window.innerWidth
        setWindowSize(windowWidth)

    },[windowSize])

    console.log(windowSize)

    function OpenMenuMobile(){
        setIsMenuMobileOpen(true)
    }

    function closeMenuMobile(){
        setIsMenuMobileOpen(false)
    }

    return(
        <header className={styles.headerContainer}>

            <div className={styles.headerContainer__content}>

                <div className={styles.logo}>

                    <img 
                    src="https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png" 
                    alt="Eplus logo"/>

                </div>

                <div className={`${styles.showMenu} ${isMenuMobileOpen ? styles.mobileOpen: ''}`}>

                    <MdClose onClick={closeMenuMobile} className={styles.menuIcon}/>

                    <div className={styles.containerNav}>
                        <nav>
                            <a href="/">Lorem ipsum</a>
                            <a href="/">Lorem ipsum</a>
                            <a href="/">Lorem ipsum</a> 
                            <a href="/">Lorem ipsum</a>
                            <a href="/">Lorem ipsum</a>
                        </nav>
                    </div>

                    <div className={styles.containerIcons}>
                        <Search />
                        <User />
                        <Cart products={products}/>
                    </div>

                </div>

                <MdDehaze onClick={OpenMenuMobile}className={styles.menuIcon}/>

            </div>

        </header>
    )
}