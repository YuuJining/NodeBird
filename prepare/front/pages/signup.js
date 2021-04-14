import React, { useCallback,useState } from 'react';
import AppLayout from '../components/Applayout';
import useInput from '../hooks/useInput';
import Head from 'next/head';
import { Form, Input } from 'antd';

const Signup = () => {
    const onSubmit = useCallback(()=>{

    }, [])

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e)=> {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password])

     return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        onChange={onChangeId}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input
                        name="user-nickname"
                        value={nickname}
                        onChange={onChangeNickname}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user-passowrd-check">비밀번호 체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                        required
                    />
                </div>
                </Form>
            </AppLayout>
        </AppLayout>
    );
};

export default Signup;