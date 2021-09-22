import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Result<Data = any, Error = any> = {
    data?: Data; //Data in the response
    isLoading: boolean; //This variable will be set true when api call is in progress
    response?: AxiosResponse<Data>; //Success Response of the api call
    error?: AxiosResponse<Error>; //Error response of the api call
    request: (
        param: AxiosRequestConfig & {
            onSuccess?: (response?: AxiosResponse<Data>) => void; //Function to be called whenever there is successful response
            onError?: (error?: AxiosResponse<Error>) => void; //Function to be called whenever there is an error}
        }
    ) => Promise<{ response?: AxiosResponse<Data>; error?: AxiosResponse<Error> }>;
    clear: () => void; //This can be used to clear all the state.
};
