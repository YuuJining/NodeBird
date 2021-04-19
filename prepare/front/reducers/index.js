const initialState = {
    name: 'YuuJining',
    age: 24,
    password: 'rmfo'
};

//action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}
changeNickname('Newvely'); // 아래와 동일한 동작을 취하게 됨

//위와 동일한데 데이터를 직접 넣어준 액션
const changeNickname = {
    type: 'CHANGE_NICKNAME',
    data: 'Newvely',
}
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data,
            }
    }
}

export default rootReducer;