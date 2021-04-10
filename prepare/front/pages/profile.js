import React from 'react';
import AppLayout from '../components/Applayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head';

const Profile = () => {
    const followingList = [{ nickname: '슈크림맛 쿠키'},{ nickname: '라떼맛 쿠키'},{nickname: '허브맛 쿠키'},{nickname: '퓨어바닐라 쿠키'}];
    const followerList = [{ nickname: '용감한 쿠키'},{nickname: '자색고구마 쿠키'},{nickname: '감초맛 쿠키'},{nickname: '천사맛 쿠키'}];
    
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로워 목록" data={followerList}/>
            </AppLayout>
        </>
    );
    
};

export default Profile;