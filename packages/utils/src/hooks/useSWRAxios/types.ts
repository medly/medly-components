import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SWRConfiguration, SWRResponse } from 'swr';

export type AxiosConfig = AxiosRequestConfig & { url: string };

type BlockingData<Data = any, Options = SWRConfiguration<Data>> = Options extends undefined
    ? false
    : Options extends {
          suspense: true;
      }
    ? true
    : Options extends {
          fallbackData: Data;
      }
    ? true
    : false;

export type Return<Data = unknown, Error = unknown, Config = SWRConfiguration<Data, Error>> = Omit<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'data' | 'error'
> & {
    data: BlockingData<Data, Config> extends true ? Data : Data | undefined;
    response?: AxiosResponse<Data> | AxiosResponse<Error>;
    error?: Error;
};

export type SWRConfig<Data = unknown, Error = unknown> = Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'fallbackData'> & {
    fallbackData?: Data;
};
