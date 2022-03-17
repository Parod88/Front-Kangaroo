import client, {removeAuthorizationHeader, setAuthorizationHeader} from '../../../api/client';
import storage from '../../../utils/storage';

const auth = process.env.REACT_APP_LOGIN_BASE_URL

export const login = credentials => {
    return client.post('/login', credentials)
    .then(({ token }) => {
    setAuthorizationHeader(token);
    storage.set('auth', token);
    });
};

export const logout = () =>
    Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove('auth');
});
