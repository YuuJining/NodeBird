import React, {useCallback, useState} from 'react';
import { Card,Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    },[])
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="following">팔로잉<br />0</div>,
                <div key="follower">팔로워<br />0</div>
            ]}
        >
            <Card.Meta 
                title="YuJining"
                avatar={<Avatar>YJ</Avatar>}
            />

            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;