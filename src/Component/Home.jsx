import React from 'react'
import "./Home.css"
import Product from './Product'
import useToast from './toast/Toast'

function Home() {
    const {ToastComponent, setToast} = useToast();
    return (
        <div className="home">
            <ToastComponent/>
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/AK2/wood-web.jpg"
                    alt=""
                />
                <div className="home__row">

                    <Product
                    setToast={setToast}
                    id={1}
                    title="real me"
                    price={12,990.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfF_F7vHpNosHMR-C6GAGQyVSfyXAiirS3iQ&usqp=CAU"
                    />
                    <Product
                    setToast={setToast}
                     id={2}
                     title="DELL Alienware Laptop"
                     price={80000.00}
                     rating={4}
                     image="https://im.indiatimes.in/amp/2019/Oct/alienware_1570809003.jpg"

                    />
                </div>

                <div className="home__row">

                    <Product
                    setToast={setToast} 
                    id={3}
                    title="Sony headphone"
                    price={6000.00}
                    rating={4}
                    image="https://www.sony.co.in/image/1cc1c23c2224adedbaaa8c3e656bef23?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
                    
                    />
                    <Product
                    setToast={setToast}
                    id={4}
                    title="The Tempest"
                    price={500}
                    rating={4}
                    image="https://images.booksense.com/images/326/249/9781984249326.jpg"
                    />
                    <Product
                    setToast={setToast} 
                    id={5}
                    title="Apple watch"
                    price={3000.00}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FWW12?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1580325951651"
                    
                    />

                </div>

                <div className="home__row">

                    <Product
                    setToast={setToast}
                    id={6}
                    title="Andriod tv"
                    price={40000.00}
                    rating={4}
                    image="https://www.androidpolice.com/wp-content/uploads/2020/06/05/TCL-Android-TV.png"
                    
                    />
                    <Product
                    setToast={setToast}
                    id={7}
                    title="Samsung Tv"
                    price={50000.00}
                    rating={4}
                    image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/curved/pd/lc43j890dknxza/gallery/LC43J890DKNXZA_Gallery_1-G1.jpg?$product-details-jpg$"
                    
                    />


                </div>

            </div>
        </div>
    )
}

export default Home
