import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

type AxiosConfig = AxiosRequestConfig & { url: string };

const defaultSWRConfig = { revalidateOnMount: true, errorRetryCount: 5 };

/**
 * This react hook can be used to call the api using SWR and axios. SWR helps to cache the data. With SWR, components will get a stream of data updates constantly and automatically. And the UI will be always fast and reactive. Pass url as null if you don't want to fetch the data initially.
 *
 * @param {string | AxiosConfig | null} requestConfig can be either url, AxiosRequestConfig or null
 * @param {SWRConfig<Data, Error>} sWRConfig SWR config
 *
 * @returns {Return<Data, AxiosResponse<Error>>} An object with data, response, request, isLoading and error
 */
export const useSWRAxios = <
    Data = unknown,
    Error = unknown,
    Config extends SWRConfiguration<Data, AxiosResponse<Error>> = SWRConfiguration<Data, AxiosResponse<Error>>
>(
    requestConfig: string | AxiosConfig | null,
    swrConfig: Config = {} as Config
) => {
    const axiosConfig = requestConfig === null ? { url: '' } : typeof requestConfig === 'string' ? { url: requestConfig } : requestConfig;
    const swrResponse = useSWR<Data, AxiosResponse<Error>, Config>(
        axiosConfig.url || null,
        () =>
            axios(axiosConfig)
                .then(res => res.data)
                .catch((err: AxiosError) => {
                    const error = new Error(err.response?.data?.message || err.toString());
                    Object.entries(err.response || {}).forEach(([key, value]) => {
                        // @ts-ignore
                        error[key] = value;
                    });
                    throw error;
                }),
        {
            ...defaultSWRConfig,
            ...swrConfig
        }
    );

    return swrResponse;
};
