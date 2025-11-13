import React, { use } from 'react';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Budgeting from '../../components/Budgeting';
import FinancialPlanning from '../../components/FinancialPlanning';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';


const Home = () => {
    const {loading} = use(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Hero></Hero>
            <Overview></Overview>
            <Budgeting></Budgeting>
            <FinancialPlanning></FinancialPlanning>
        </div>
    );
};

export default Home;