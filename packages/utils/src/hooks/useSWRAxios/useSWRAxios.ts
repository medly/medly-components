import axios, { AxiosError, AxiosResponse } from 'axios';
import useSWR from 'swr';
import { AxiosConfig, Return, SWRConfig } from './types';

const defaultSWRConfig = { revalidateOnMount: true, errorRetryCount: 5 };

export const useSWRAxios = <Data = unknown, Error = unknown>(
    config: string | AxiosConfig,
    { initialData, ...swrConfig }: SWRConfig<Data, Error> = {}
): Return<Data, Error> => {
    const axiosConfig = typeof config === 'string' ? { url: config } : config;
    const {
        data: axiosSuccessResponse,
        error: axiosErrorResponse,
        ...swrResponse
    } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(axiosConfig.url, () => axios(axiosConfig), {
        ...defaultSWRConfig,
        ...swrConfig,
        initialData: initialData && {
            status: 200,
            statusText: 'InitialData',
            config: axiosConfig,
            headers: {},
            data: initialData
        }
    });

    return {
        data: axiosSuccessResponse?.data,
        response: axiosSuccessResponse,
        error: axiosErrorResponse?.response,
        ...swrResponse
    };
};
