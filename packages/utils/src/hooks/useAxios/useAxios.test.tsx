import { cleanup, fireEvent, mockAxios, render, waitFor } from '@test-utils';
import React from 'react';
import { useAxios } from '../useAxios';
import { Result } from './types';

type Props = Parameters<Result['request']>[0];

const DummyComponent: React.FC<Props> = (config: Props) => {
    const { data, error, request, isLoading } = useAxios();

    const handleApiCall = () => request(config);

    return (
        <div>
            {data && <p>{data}</p>}
            {isLoading && <p>Is Loading</p>}
            {error && <p>{error.data.message}</p>}
            <button id="callApi" onClick={handleApiCall}>
                Call Api
            </button>
        </div>
    );
};

const renderer = (props: Props) => render(<DummyComponent {...props} />);

describe('useAxios hook', () => {
    afterEach(() => {
        cleanup();
        mockAxios.reset();
    });

    it('should set isLoading true while calling api', async () => {
        const { getByText, container } = renderer({ url: '/api/users', data: { data: 'dummy' }, method: 'post' });
        fireEvent.click(container.querySelector('#callApi'));
        expect(getByText('Is Loading')).toBeInTheDocument();
    });

    it('should give data on success', async () => {
        mockAxios.onGet('/api/users').replyOnce(200, 'Success Message');
        const { findByText, container } = renderer({ url: '/api/users' });
        fireEvent.click(container.querySelector('#callApi'));
        const items = await findByText('Success Message');
        expect(items).toBeInTheDocument();
    });

    it('should give error message on failure', async () => {
        mockAxios.onPost('/api/users').replyOnce(400, { message: 'Missing fields' }).onPost('/api/users').replyOnce(400);
        const { findByText, container } = renderer({ url: '/api/users', data: { data: 'dummy' }, method: 'post' });
        fireEvent.click(container.querySelector('#callApi'));
        const message = await findByText('Missing fields');

        expect(message).toBeInTheDocument();
    });

    it('should call onSuccess if provided', async () => {
        const mockOnSuccess = jest.fn();
        mockAxios.onGet('/api/users').replyOnce(200, 'Success Message');
        const { container } = renderer({ url: '/api/users', data: { data: 'dummy' }, onSuccess: mockOnSuccess });
        fireEvent.click(container.querySelector('#callApi'));
        await waitFor(() => expect(mockOnSuccess).toHaveBeenCalled());
    });

    it('should call onError if provided', async () => {
        const mockOnError = jest.fn();
        mockAxios.onPost('/api/users').replyOnce(400, { message: 'Missing fields' });
        const { container } = renderer({ url: '/api/users', data: { data: 'dummy' }, method: 'post', onError: mockOnError });
        fireEvent.click(container.querySelector('#callApi'));
        await waitFor(() => expect(mockOnError).toHaveBeenCalled());
    });
});
