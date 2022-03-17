import { login } from '../../pages/_Auth/LoginPage/service';
import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER } from '../types';
import axios from 'axios';

export function loginStart(){
    return{
        type: LOGIN_START,
    }
}

export function loginSuccess(token){
    return{
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

export function loginFailure(error){
    return{
        type: LOGIN_FAILURE,
        error: true,
        payload: error
    }
}

export function logoutInitiate (){
    return{
        type:LOGOUT_USER,

    }
}

export function loginInitiate(value) {
    
    return async function (dispatch, getState, { api, history }) {
    dispatch(loginStart());
    try {
        const login = await api.users.login(value)
        dispatch(loginSuccess());
        const { from } = history.location.state || { from: { pathname: '/' } };
        history.replace(from);
    } catch (error) {
        dispatch(loginFailure(error));
    }
    };
}
  
// export const loginInitiate = (remember, ...credentials) =>{
//     return async function(dispatch, getState, {api, history}){
//         dispatch(loginStart());
//         try{
//             await axios.post('http://localhost:3001/api/v1/login', {
//              credentials})
//         // }).then(({userToken})=> {
//         //     configureClient({userToken});
//         //     return userToken;
//         // })
//         // .then(userToken=>{
//         //     storage.remove('auth');
//         //     if(remember){
//         //         storage.set('auth', userToken)
//         //     }
//         // })
//             //await api.auth.login(credentials);
//             dispatch(loginSuccess());
//             const { from } = history.location.state || { from: { pathname: '/' } };
//             history.replace(from);
//         } catch (error) {
//             dispatch(loginFailure(error));
//         }
//     };

    // return function (dispatch){
    //     dispatch(loginStart());
    //     axios.post('http://localhost:3001/api/v1/login', {
    //         email,
    //         password
    //     })
    //     .then((response)=> {
    //         console.log("response", response);
    //         dispatch(loginSuccess(response.data.userToken))
    //     })
    //     .catch((error) => dispatch(loginFailure(error.response.data.message)))
    // }
    //}
