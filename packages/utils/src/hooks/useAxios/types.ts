import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Result<Data = any, Error = any> = {
    data: Data;
    isLoading: boolean;
    response: AxiosResponse<Data>;
    error: AxiosResponse<Error>;
    request: (
        param: AxiosRequestConfig & {
            onSuccess?: (response?: AxiosResponse<Data>) => void; //Function to be called whenever there is successful response
            onError?: (error?: AxiosResponse<Error>) => void; //Function to be called whenever there is an error}
        }
    ) => Promise<{ response?: AxiosResponse<Data>; error?: AxiosResponse<Error> }>;
};
