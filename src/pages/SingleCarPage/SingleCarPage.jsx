import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../services/products'
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard"

const SingleProductPage = () => {

    const [car, setCar] = useState({})

    const {id} = useParams()

    useEffect(() => {
        productService
            .getProduct(id)
            .then(res => setCar(res.data))
    }, [])
    return (
        <div>
            <SingleProductCard
                car={car}
                img={car.img}
                title={car.title}
                descr={car.descr}
                price={car.price}
            />
        </div>
    );
};

export default SingleProductPage;