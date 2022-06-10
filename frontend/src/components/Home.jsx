import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from './redux/actions/productActions';
import MetaData from './layout/MetaData'
import Product from './product/Product';
import Loader from './layout/Loader';
const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch()
    // const { loading, products, error, productCount } = useSelector(state => state.products)

    const { loading, products, error } = useSelector(state => state.products)
    // dispatch(getProducts())


    // useEffect(() => {
    //     if(error) {
    //         // alert.success('success')
    //        return alert.error(error)
    //     }

    //     dispatch(getProducts())
        
    // }, [dispatch,alert,error])
    return loading ? (
        <Loader />
    ) : (
        <>
            <MetaData title={'Buy Best Products Online'} />
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products && products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default Home