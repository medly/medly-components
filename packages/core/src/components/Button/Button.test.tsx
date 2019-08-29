import { GearIcon } from '@medly-components/icons';
import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Button from './Button';

describe('Button component', () => {
    it('should render properly with flat variant and primary color', () => {
        const { container } = TestUtils.render(
            <Button variant="flat" color="primary">
                Flat Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render properly with outlined variant and secondary color', () => {
        const { container } = TestUtils.render(
            <Button variant="outlined" color="secondary">
                Outlined Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render properly with solid variant', () => {
        const { container } = TestUtils.render(<Button variant="solid">Solid Button</Button>);
        expect(container).toMatchSnapshot();
    });

    it('should render properly with any icon at the beginning of the text', () => {
        const { container } = TestUtils.render(
            <Button variant="solid">
                <GearIcon />
                Solid Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly with any icon at the end of the text', () => {
        const { container } = TestUtils.render(
            <Button variant="solid">
                <GearIcon />
                Solid Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is disabled', () => {
        const { container } = TestUtils.render(
            <Button disabled variant="solid">
                Solid Button
            </Button>
        );
        expect(container).toMatchSnapshot();
    });

    it('should wrap children into Text component when rendering string or number', () => {
        const { container } = TestUtils.render(
            <Button variant="solid">
                Some text
                <i>some icon</i>
                <div>element2</div>
            </Button>
        );
        expect(container).toMatchSnapshot();
    });
});
