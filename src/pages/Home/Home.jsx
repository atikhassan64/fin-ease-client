import React, { Suspense, use, useEffect, useState } from 'react';
import Hero from '../../components/Hero';
import Overview from '../../components/Overview';
import { AuthContext } from '../../context/AuthContext';


const Home = () => {
    const { user } = use(AuthContext);
    const [heroData, setHeroData] = useState([]);
   
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/transactions?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setHeroData(data);
                })
        }
    }, [user])
    return (
        <div>
            <Hero></Hero>
            <Suspense><Overview heroData={heroData}></Overview></Suspense>
        </div>
    );
};

export default Home;