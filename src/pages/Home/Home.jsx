import React, { use } from 'react';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import Budgeting from '../../components/Budgeting';
import FinancialPlanning from '../../components/FinancialPlanning';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';
import HowItWork from '../../components/HowItWork';
import Features from '../../components/Features';
import ChartsPreview from '../../components/ChartsPreview';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';


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
            <HowItWork></HowItWork>
            <Testimonials></Testimonials>
            <Features></Features>
            <CTA></CTA>
        </div>
    );
};

export default Home;