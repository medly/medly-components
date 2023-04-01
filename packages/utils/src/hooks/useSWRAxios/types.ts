import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SWRConfiguration, SWRResponse } from 'swr';

export type AxiosConfig = AxiosRequestConfig & { url: string };

export type Return<Data = unknown, Error = unknown> = Omit<SWRResponse<AxiosResponse<Data>, AxiosError<Error>>, 'data' | 'error'> & {
    data?: Data;
    response?: AxiosResponse<Data>;
    error?: AxiosResponse<Error>;
};

export type SWRConfig<Data = unknown, Error = unknown> = Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> & {
    fallbackData?: Data;
};
