import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions/productActions';
import MetaData from './layout/MetaData'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <MetaData title={'Buy Best Products Online'} />
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded">
                            <img
                                className="card-img-top mx-auto"
                                src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
                                alt=""
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    {/* <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a> */}
                                    <a href="/">128GB Solid Storage Memory card - SanDisk Ultra</a>

                                </h5>
                                <div className="ratings mt-auto">
                                    <div className="rating-outer">
                                        <div className="rating-inner"></div>
                                    </div>
                                    <span id="no_of_reviews">(5 Reviews)</span>
                                </div>
                                <p className="card-text">$45.67</p>
                                {/* <a href="#" id="view_btn" className="btn btn-block">View Details</a> */}
                                <a href="/" id="view_btn" className="btn btn-block">View Details</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home