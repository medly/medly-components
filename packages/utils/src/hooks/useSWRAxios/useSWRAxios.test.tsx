import { mockAxios, renderWithSWR, screen } from '@test-utils';
import { SWRConfiguration } from 'swr';
import { useSWRAxios } from './useSWRAxios';

const DummyComp = ({
    fallbackData,
    passUrlOnly = false,
    passNull = false
}: SWRConfiguration & { passUrlOnly?: boolean; passNull?: boolean }) => {
    const { data, error } = useSWRAxios<string, { message: string }>(
        passNull ? null : passUrlOnly ? '/api/applications' : { url: '/api/applications' },
        {
            fallbackData
        }
    );
    return (
        <>
            <p>{data}</p>
            {error && <p>{error?.data?.message}</p>}
        </>
    );
};

describe('useSWRAxios', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should return expected data if we pass axios config as first param', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200, 'Hello');
        renderWithSWR(<DummyComp />);
        const message = await screen.findByText('Hello');
        expect(message).toBeInTheDocument();
    });

    it('should return expected data if we pass url as first param', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200, 'Hello');
        renderWithSWR(<DummyComp passUrlOnly />);
        const message = await screen.findByText('Hello');
        expect(message).toBeInTheDocument();
    });

    it('should not call the api if url passed as null', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200, 'Hello');
        renderWithSWR(<DummyComp passNull />);
        expect(mockAxios.history.get.length).toBe(0);
        expect(screen.queryByText('Hello')).not.toBeInTheDocument();
    });

    it('should return initial data if passed as props', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200);
        renderWithSWR(<DummyComp fallbackData="Dummy initial data" />);
        const message = await screen.findByText('Dummy initial data');
        expect(message).toBeInTheDocument();
    });

    it('should return error if api call fails', async () => {
        mockAxios.onGet('/api/applications').replyOnce(500, { message: 'Something went wrong' });
        renderWithSWR(<DummyComp />);
        const message = await screen.findByText('Something went wrong');
        expect(message).toBeInTheDocument();
    });
});
