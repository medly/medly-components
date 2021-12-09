import { mockAxios, renderWithSWR, screen } from '@test-utils';
import { cache, SWRConfiguration } from 'swr';
import { useSWRAxios } from './useSWRAxios';

const DummyComp = ({ initialData, passUrlOnly = false }: SWRConfiguration & { passUrlOnly?: boolean }) => {
    const { data, error } = useSWRAxios<string, { message: string }>(passUrlOnly ? '/api/applications' : { url: '/api/applications' }, {
        initialData
    });
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

    it('should return initial data if passed as props', async () => {
        mockAxios.onGet('/api/applications').replyOnce(200);
        renderWithSWR(<DummyComp initialData="Dummy initial data" />);
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
