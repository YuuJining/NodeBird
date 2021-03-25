import React from 'react';
import AppLayout from '../components/Applayout';
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <div>내정보 페이지</div>
            </AppLayout>
        </>
    );
    
};

export default Profile;