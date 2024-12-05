import { getCookie, setCookie } from 'cookies-next';
import _, { get, remove, set } from 'lodash';
import Cookies from 'js-cookie';
import constants from '@/settings/constants';

const webStorageClient = {
    set(key: string, rawValue: any, option?: any) {
        const value: string = _.isString(rawValue) ? rawValue : JSON.stringify(rawValue);
        setCookie(key, value, option);
    },

    get(key: string) {
        const value = getCookie(key) || '';
        try {
            return JSON?.parse(value.toString());
        } catch {
            return value;
        }
    },

    remove(key: string) {
        setCookie(key, null, { maxAge: -1 });
    },

    removeAll() {
        Object.keys(Cookies.get()).forEach((key) => {
            Cookies.remove(key);
        })
    },

    setToken(value: string, option?: any) {
        setCookie(constants.ACCESS_TOKEN, value, option);
      },
    
      getToken() {
        return getCookie(constants.ACCESS_TOKEN);
      },
    
      setRefreshToken(value: string, option?: any) {
        setCookie(constants.REFRESH_TOKEN, value, option);
      },
    
      getRefreshToken() {
        return getCookie(constants.REFRESH_TOKEN);
      },
}

export default webStorageClient;