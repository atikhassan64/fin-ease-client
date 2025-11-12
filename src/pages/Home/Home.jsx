import React from 'react';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Budgeting from '../../components/Budgeting';
import FinancialPlanning from '../../components/FinancialPlanning';


const Home = () => {

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