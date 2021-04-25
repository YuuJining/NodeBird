export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'YuuJining',
        },
        content: '#쿠키런재밌어 #아배고파 #퓨어바닐라언제오니',
        Images: [{
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fsakuya_478%2Fstatus%2F1362638571945873410&psig=AOvVaw3GJONqAUtrhV6NQ5sAvD2T&ust=1619333760647000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCIob-mlvACFQAAAAAdAAAAABAD'
        }, {
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcreativestudio.kr%2F2383&psig=AOvVaw2461GaQ2LAMUeFkN6DpX0R&ust=1619333797736000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjjx9GmlvACFQAAAAAdAAAAABAD'
        }, {
            src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftodaybob.tistory.com%2F96&psig=AOvVaw0QM-RDbGXnkUOq1ZQoIUj3&ust=1619333833357000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOD39eOmlvACFQAAAAAdAAAAABAD'
        }],
        Comments: [{
            User: {
                nickname: 'Insoo'
            },
            content: '나는 퓨바 나왔지롱~'
        }, {
            User: {
                nickname: 'YuJining'
            },
            content: '나도 어제 나왔어!'
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미 데이터지롱',
    User: {
        id: 2,
        nickname: 'Cookie'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState ,action) => {
    switch (action.type) {
        default:
            return state;
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
    }
}

export default reducer;