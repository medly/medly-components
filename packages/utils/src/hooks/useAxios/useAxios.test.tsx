import { cleanup, fireEvent, mockAxios, render, screen, waitFor } from '@test-utils';
import React from 'react';
import { useAxios } from '../useAxios';
import { Result } from './types';

type Props = Parameters<Result['request']>[0];

const DummyComponent: React.FC<Props> = (config: Props) => {
    const { data, error, request, isLoading, clear } = useAxios();

    const handleApiCall = () => request(config);

    return (
        <div>
            {data && <p>{data}</p>}
            {isLoading && <p>Is Loading</p>}
            {error && <p>{error.data.message}</p>}
            <button id="callApi" onClick={handleApiCall}>
                Call Api
            </button>
            <button id="callApi" onClick={clear}>
                Clear state
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
        renderer({ url: '/api/users', data: { data: 'dummy' }, method: 'post' });
        fireEvent.click(screen.getByRole('button', { name: 'Call Api' }));
        expect(screen.getByText('Is Loading')).toBeInTheDocument();
    });

    it('should give data on success', async () => {
        mockAxios.onGet('/api/users').replyOnce(200, 'Success Message');
        renderer({ url: '/api/users' });
        fireEvent.click(screen.getByRole('button', { name: 'Call Api' }));
        const items = await screen.findByText('Success Message');
        expect(items).toBeInTheDocument();
    });

    it('should give error message on failure', async () => {
        mockAxios.onPost('/api/users').replyOnce(400, { message: 'Missing fields' }).onPost('/api/users').replyOnce(400);
        renderer({ url: '/api/users', data: { data: 'dummy' }, method: 'post' });
        fireEvent.click(screen.getByRole('button', { name: 'Call Api' }));
        const message = await screen.findByText('Missing fields');
        expect(message).toBeInTheDocument();
    });

    it('should clear state when clear function is called', async () => {
        mockAxios.onGet('/api/users').replyOnce(200, 'Success Message');
        renderer({ url: '/api/users' });
        fireEvent.click(screen.getByRole('button', { name: 'Call Api' }));
        const items = await screen.findByText('Success Message');
        expect(items).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Clear state' }));
        expect(screen.queryByText('Success Message')).not.toBeInTheDocument();
    });

    it('should call onSuccess function if provided', async () => {
        const mockOnSuccess = jest.fn();
        mockAxios.onGet('/api/users').replyOnce(200, 'Success Message');
        renderer({ url: '/api/users', data: { data: 'dummy' }, onSuccess: mockOnSuccess });
        fireEvent.click(screen.getByRole('button', { name: 'Call Api' }));
        await waitFor(() => expect(mockOnSuccess).toHaveBeenCalled());
    });

    it('should call onError function if provided', async () => {
        const mockOnError = jest.fn();
        mockAxios.onPost('/api/users').replyOnce(400, { message: 'Missing fields' });
        renderer({ url: '/api/users', data: { data: 'dummy' }, method: 'post', onError: mockOnError });
        fireEvent.click(screen.getByRole('button', { name: 'Call Api' }));
        await waitFor(() => expect(mockOnError).toHaveBeenCalled());
    });
});
