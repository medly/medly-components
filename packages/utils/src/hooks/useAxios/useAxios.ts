import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { useIsMounted } from '../useIsMounted';
import { Result } from './types';

/**
 * A hook that provides abstraction over common axios functions
 *
 * @returns {Result<Data, Error>} An object with data, response, request, isLoading and error
 */
export const useAxios = <Data = any, Error = { message: string; variant: 'error' }>(): Result<Data, Error> => {
    const [data, setData] = useState<Data>(),
        [response, setResponse] = useState<AxiosResponse<Data>>(),
        [error, setError] = useState<AxiosResponse<Error>>(),
        [isLoading, setLoadingState] = useState(false),
        isMounted = useIsMounted();

    const request = useCallback(async ({ onSuccess, onError, ...config }) => {
        setLoadingState(true);
        return axios({
            method: 'get',
            ...config
        })
            .then(res => {
                setData(res.data);
                setResponse(res);
                onSuccess && onSuccess(res);
                return { response: res };
            })
            .catch(err => {
                const customizedError = {
                    ...err.response,
                    data: { message: 'Something went wrong', variant: 'error', ...err.response.data }
                };
                setError(customizedError);
                onError && onError(customizedError);
                return { error: customizedError };
            })
            .finally(() => {
                isMounted.current && setLoadingState(false);
            });
    }, []);

    const clear = useCallback(() => {
        setData(undefined);
        setResponse(undefined);
        setError(undefined);
        setLoadingState(false);
    }, []);

    return {
        data,
        response,
        request,
        isLoading,
        error,
        clear
    };
};
