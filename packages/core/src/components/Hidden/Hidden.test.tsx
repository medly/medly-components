import { defaultTheme } from '@medly-components/theme';
import { useMediaQuery } from '@medly-components/utils';
import { render } from '@test-utils';
import { ThemeContext } from 'styled-components';
import { Hidden } from './Hidden';

const useMediaQueryMock = jest.fn();

jest.mock('@medly-components/utils', () => ({
    ...(jest.requireActual('@medly-components/utils') as any),
    useMediaQuery: jest.fn()
}));

describe('Hidden', () => {
    beforeAll(() => {
        // @ts-ignore
        useMediaQuery.mockImplementation(useMediaQueryMock);
    });
    afterEach(() => jest.clearAllMocks());

    it('should render Js component', () => {
        const { container } = render(
            <ThemeContext.Provider value={defaultTheme}>
                <Hidden>Strong text</Hidden>
            </ThemeContext.Provider>
        );
        expect(container).toMatchSnapshot();
        expect(useMediaQuery).toHaveBeenCalled();
    });

    it('should render Css component', () => {
        const { container } = render(<Hidden implementation="css" />);
        expect(container).toMatchSnapshot();
        expect(useMediaQuery).not.toHaveBeenCalled();
    });
});
