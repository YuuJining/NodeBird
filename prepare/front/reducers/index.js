import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginDaga: {},
    },
    post: {
        mainPosts: [],
    }
};

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}
// //action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// }
// changeNickname('Newvely'); // 아래와 동일한 동작을 취하게 됨

// //위와 동일한데 데이터를 직접 넣어준 액션
// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'Newvely',
// }

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE:
            console.log('HYDRATE', action)
            return { ...state, ...action.payload };
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            }
        default:
            return state;    
    }
}

export default rootReducer;