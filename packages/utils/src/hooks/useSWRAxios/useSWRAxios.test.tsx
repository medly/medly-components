import { mockAxios, renderWithSWR } from '@test-utils';
import React from 'react';
import { cache, SWRConfiguration } from 'swr';
import { useSWRAxios } from './useSWRAxios';

const DummyComp = ({ initialData }: SWRConfiguration) => {
    const { data, error } = useSWRAxios<unknown, { message: string }>({ url: '/api/applications' }, { initialData });
    return (
        <>
            <p>{data}</p>
            {error && <p>{error?.data?.message}</p>}
        </>
    );
};

describe('useSWRAxios', () => {
    afterEach(() => {
        cache.clear();
        mockAxios.reset();
    });

    it('should return expected data', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200, 'Hello');
        const { findByText } = renderWithSWR(<DummyComp />);
        const message = await findByText('Hello');
        expect(message).toBeInTheDocument();
    });

    it('should return initial data if passed as props', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200);
        const { findByText } = renderWithSWR(<DummyComp initialData="Dummy initial data" />);
        const message = await findByText('Dummy initial data');
        expect(message).toBeInTheDocument();
    });

    it('should return error if api call fails', async () => {
        mockAxios.onGet('/api/applications').replyOnce(500, { message: 'Something went wrong' });
        const { findByText } = renderWithSWR(<DummyComp />);
        const message = await findByText('Something went wrong');
        expect(message).toBeInTheDocument();
    });
});
