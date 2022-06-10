import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from './redux/actions/productActions';
import MetaData from './layout/MetaData'
import Product from './product/Product';
import Loader from './layout/Loader';
import Pagination from "react-js-pagination";


const Home = ({match}) => {
    const alert = useAlert();
    const dispatch = useDispatch()
    const { loading, products, error, productCount,resPerPage } = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);

    const keyword = match.params.keyword;
    
    useEffect(() => {
        if(error) {
            // alert.success('success')
           return alert.error(error)
        }

        dispatch(getProducts(keyword,currentPage))
        
    }, [dispatch, alert, error, keyword , currentPage])
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
            {resPerPage <= productCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productCount}
                onChange={(e) => setCurrentPage(e)}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}

            

        </>
    )
}

export default Home