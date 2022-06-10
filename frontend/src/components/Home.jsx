import React, { useEffect, useState } from 'react'
import Pagination from "react-js-pagination";


import Slider from "rc-slider";
import "rc-slider/assets/index.css";


import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from './redux/actions/productActions';
import MetaData from './layout/MetaData'
import Product from './product/Product';
import Loader from './layout/Loader';


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);



const Home = ({ match }) => {
    const alert = useAlert();
    const dispatch = useDispatch()
    const { loading, products, error, productCount, resPerPage } = useSelector(state => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000]);

    const keyword = match.params.keyword;

    useEffect(() => {
        if (error) {
            // alert.success('success')
            return alert.error(error)
        }

        dispatch(getProducts(keyword, currentPage, price))

    }, [dispatch, alert, error, keyword, currentPage, price])
    return loading ? (
        <Loader />
    ) : (
        <>
            <MetaData title={'Buy Best Products Online'} />
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
            <div className="row">
              {keyword ? (
                <>
                  <div className="col-6 col-md-3 mt-5 mb-5">
                    <div className="px-5">
                      <Range
                        marks={{
                          1: `$1`,
                          1000: `$1000`,
                        }}
                        min={1}
                        max={1000}
                        defaultValue={[1, 1000]}
                        tipFormatter={(value) => `$${value}`}
                        tipProps={{
                          placement: "top",
                          visible: true,
                        }}
                        value={price}
                        onChange={(price) => setPrice(price)}
                      />
                    </div>
                  </div>

                  <div className="col-6 col-md-9">
                    <div className="row">
                      {products &&
                        products.map((product) => (
                          <Product key={product._id} product={product} col={4} />
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                products &&
                products.map((product) => (
                  <Product key={product._id} product={product} col={3} />
                ))
                )}
                
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