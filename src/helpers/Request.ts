import axios from 'axios';
import { logout, refreshTokenSuccess } from '@/store/actions';
import { clearStore } from '@/store/reducers';
import { store } from '@/store';
import Log from './Log';

const makeApiCallWithAccessToken = async ({
  endpoint,
  data,
  method,
  file,
  newToken,
  log,
  functionName,
  params,
}: {
  endpoint: string;
  data?: any;
  params?: any;
  method: 'get' | 'post' | 'put' | 'delete'| 'patch';
  file?: boolean;
  log?: boolean;
  newToken?: string;
  functionName?: string;
}) => {
  const baseURL =
    process?.env?.NEXT_PUBLIC_API_URL || `https://staging-api.qtopia.in/api/`;
  let VERSION = 'v1';
  let url = `${baseURL}${VERSION}${endpoint}`;

  const state = store?.getState();


  if (log) {
    Log(
      `[${method.toUpperCase()}][API_CALL for ${functionName}] to ${url},`,
      data ?? '',
      'infoNetwork'
    );
  }
  


  let token = newToken?? state?.auth?.accessToken;

  let headers: {
    Cookie?: string;
    Authorization: string;
    Accept?: string;
    'Content-Type'?: string;
  } = token
    ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    : { Authorization: '' };

  if (file) {
    headers = {
      Cookie: `jwt='refresh_token'`,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  }

  let response: any = null;

  try {
    axios.defaults.withCredentials = true;
    response = await axios({ method, url, data, headers, params, });

    if (log && response) {
      Log(
        `[${method.toUpperCase()}][API_RESPONSE] FROM ${url} `,
        response.data,
        'successNetwork'
      );
    }

    return response;
  } catch (err: any) {
    // TO CHECK IF ACCESS TOKEN IS EXPIRED & UPDATE ACCESS TOKEN WITH HELP OF REFRESH TOKEN
    // log &&
    Log(
      `[${method?.toUpperCase()}][API_ERR] TO ${url} FOR ${functionName} ERROR ${err?.response?.status}`,
      err?.response?.data ?? err,
      'errorNetwork'
    );
    // if (err?.message == 'Request failed with status code 401') {
    //   Log('401 error after new token ', err?.message);
    //   store.dispatch(logout({}));
    //   store.dispatch(clearStore());
    // }
    // console.log('error', err?.response);
    // // throw err?.response;
    throw err;
  }
};

async function refreshAccessToken() {
  try {

  

    const API =
      process?.env?.NEXT_PUBLIC_API_URL || `https://staging-api.qtopia.in/api/`;
    const state = store?.getState();



    axios.defaults.withCredentials = true;
    const response = await axios({
      method: 'get',
      url: `${API}v1/refresh`,
      headers: {
        // Cookie: `jwt=${refresh_token}`,
        'Content-Type': 'application/json',
      },
    });

    // const response = await axios.post(`${API}v1/refresh`, {
    //   // refresh_token: state?.auth?.refreshToken,
    // });


    
    let accessToken = response?.data?.accessToken;
    store.dispatch(refreshTokenSuccess( accessToken ));

    return response.data.accessToken;
  } catch (error) {
    console.log('error in refreshAccessToken', error);
    store.dispatch(logout({}));
    store.dispatch(clearStore());
    throw error;
  }
}

const request = async ({
  endpoint,
  data,
  method,
  file = false,
  log = false,
  functionName='',
  params,
}: {
  endpoint: string;
  data?: any;
  method: 'get' | 'post' | 'put' | 'delete'| 'patch';
  file?: boolean;
  log?: boolean;
  functionName?: string;
  params?: any;
}) => {
  const baseURL =
    process?.env?.NEXT_PUBLIC_API_URL || `https://staging-api.qtopia.in/api/`;
  let VERSION = 'v1';
  let token = store.getState().auth?.accessToken;

  let headers: {
    Authorization: string;
    Accept?: string;
    'Content-Type'?: string;
  } = token ? { Authorization: `Bearer ${token}` } : { Authorization: '' };

  if (file) {
    headers = {
      // Cookie: "jwt='refresh_token'",
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
  }

  let url = `${baseURL}${VERSION}${endpoint}`;

  try {
    const response = await makeApiCallWithAccessToken({
      endpoint,
      data,
      method,
      file,
      log,
      functionName,
      params,
    });
    return response;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      // If the API call returns a 401 Unauthorized status, it means the access token is expired.
      const newAccessToken = await refreshAccessToken();

      try {

        // Retry the API call with the new access token
        const response = await makeApiCallWithAccessToken({
          endpoint,
          data,
          method,
          file,
          log,
          newToken: newAccessToken,
          functionName,
          params,
        });
        return response;
      } catch (refreshError) {
        // If refreshing the token also fails, handle the error appropriately
        store.dispatch(
          logout({
            callback: (cb:any) => {
              store.dispatch(clearStore());
              localStorage.clear();
              // navigate('AddMobileScreen');
            },
          })
        );

        throw refreshError;
      }
    } else {
      // Handle other API call errors
      console.log('error', error);

      return error?.response;
    }
  }
};

export default request;
