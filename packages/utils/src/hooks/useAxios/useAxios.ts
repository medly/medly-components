import axios, { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { Result } from './types';

export const useAxios = <Data = any, Error = { message: string; variant: 'error' }>(): Result<Data, Error> => {
    const [data, setData] = useState<Data>(),
        [response, setResponse] = useState<AxiosResponse<Data>>(),
        [error, setError] = useState<AxiosResponse<Error>>(),
        [isLoading, setLoadingState] = useState(false);

    const request = useCallback(async ({ onSuccess, onError, ...config }) => {
        setLoadingState(true);
        return axios({
            method: 'get',
            ...config
        })
            .then(response => {
                setData(response.data);
                setResponse(response);
                onSuccess && onSuccess(response);
                return { response };
            })
            .catch(error => {
                const customizedError = {
                    ...error.response,
                    data: { message: 'Something went wrong', variant: 'error', ...error.response.data }
                };
                setError(customizedError);
                onError && onError(customizedError);
                return { error: customizedError };
            })
            .finally(() => {
                setLoadingState(false);
            });
    }, []);

    return {
        data,
        response,
        request,
        isLoading,
        error
    };
};
