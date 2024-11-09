import React, { useEffect, useState } from 'react';
import Heading_Bg from '../../../Components/Heading_Bg/Heading_Bg';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Admin_Home = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get("/order").then(response => {
            setOrders(response.data)
        })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Device Master - Order</title>
            </Helmet>
            <Heading_Bg name={"Orders"}></Heading_Bg>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className=''>
                        <tr>
                            <th className='text-center text-sm text-[#00A452]'>Customer Name</th>
                            <th className='text-center text-sm text-[#00A452]'>Email</th>
                            <th className='text-center text-sm text-[#00A452]'>Phone</th>
                            <th className='text-center text-sm text-[#00A452]'>Service</th>
                            <th className='text-center text-sm text-[#00A452]'>Fair</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((item) => (
                                <tr key={item._id}>
                                    <th className='text-center'>{item.name}</th>
                                    <th className='text-center'>{item.email}</th>
                                    <th className='text-center'>{item.phone}</th>
                                    <th className='text-center'>{item.service_name}</th>
                                    <th className='text-center'>{item.price}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Admin_Home;