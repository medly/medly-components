import { AddIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { updateNestedValue } from '@medly-components/utils';
import { render } from '@test-utils';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { ButtonProps } from './types';

describe('Button component', () => {
    const variants: Required<ButtonProps>['variant'][] = ['solid', 'outlined', 'flat'];

    describe.each(variants)('with %p variant', variant => {
        test('should render properly', () => {
            const { container } = render(<Button variant={variant}>Button</Button>);
            expect(container).toMatchSnapshot();
        });

        test('should render properly when it is disabled', () => {
            const { container } = render(
                <Button disabled variant={variant}>
                    Button
                </Button>
            );
            expect(container).toMatchSnapshot();
        });

        test('should render properly when it is loading', () => {
            const { container } = render(
                <Button isLoading variant={variant}>
                    Button
                </Button>
            );
            expect(container).toMatchSnapshot();
        });

        const options: ButtonProps['size'][] = ['XS', 'S', 'M', 'L'];
        test.each(options)('should render properly with %p size', size => {
            const { container } = render(
                <Button size={size} variant={variant}>
                    Button
                </Button>
            );
            expect(container).toMatchSnapshot();
        });
    });

    const options: ButtonProps['size'][] = ['S', 'L'];
    test.each(options)('should render properly with %s size and loading state', size => {
        const { container } = render(
            <Button size={size} isLoading>
                Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    const edgeOptions: Required<ButtonProps>['edges'][] = ['square', 'rounded', 'circle'];
    test.each(edgeOptions)('should render properly with %p edges', edges => {
        const { container } = render(<Button edges={edges}>Flat Button</Button>);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with circle edges and S size', () => {
        const { container } = render(
            <Button edges="circle" size="S">
                Button
            </Button>
        );
        expect(container.querySelector('button')).toHaveStyle(`
            padding: 1.4rem
        `);
    });

    it('should render properly with any icon at the beginning of the text', () => {
        const { container } = render(
            <Button variant="solid">
                <AddIcon />
                Solid Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with any icon at the end of the text', () => {
        const { container } = render(
            <Button variant="solid">
                <AddIcon />
                Solid Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should wrap children into Text component when rendering string or number', () => {
        const { container } = render(
            <Button variant="solid">
                Some text
                <i>some icon</i>
                <div>element2</div>
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with 100% width if fullWidth prop is truthy', () => {
        const { container } = render(
            <Button fullWidth variant="solid">
                Some text
            </Button>
        );
        expect(container.querySelector('button')).toHaveStyle(`width: 100%`);
    });

    it("should render properly with outlined and theme doesn't have bgColor", () => {
        const { container } = render(
            <ThemeProvider
                theme={updateNestedValue(defaultTheme, 'button.outlined', {
                    textColor: {
                        default: defaultTheme.colors.red[500],
                        hovered: defaultTheme.colors.red[600],
                        pressed: defaultTheme.colors.red[700],
                        disabled: defaultTheme.colors.grey[200]
                    },
                    hoverShadow: true
                })}
            >
                <Button variant="outlined">Red Button</Button>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly as outlined when theme has hover set to false', () => {
        const { container } = render(
            <ThemeProvider
                theme={updateNestedValue(defaultTheme, 'button.outlined', {
                    ...defaultTheme.button.outlined,
                    hoverShadow: false
                })}
            >
                <Button variant="outlined">Outlined Button</Button>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly as solid when theme has hover set to false', () => {
        const { container } = render(
            <ThemeProvider
                theme={updateNestedValue(defaultTheme, 'button.solid', {
                    ...defaultTheme.button.solid,
                    hoverShadow: false
                })}
            >
                <Button variant="solid">Solid Button</Button>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render flat variant properly when hideUnderline set to true', () => {
        const { container } = render(
            <Button variant="flat" hideUnderline>
                Some text
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render flat variant properly when hideUnderline set to false', () => {
        const { container } = render(
            <Button variant="flat" hideUnderline={false}>
                Some text
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
});
