import { render } from '@test-utils';
import React from 'react';
import Text from '../Text';
import { Card } from './Card';

describe('Card component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = render(
            <Card>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render solid variant properly ', () => {
        const { container } = render(
            <Card variant="solid">
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render flat variant properly ', () => {
        const { container } = render(
            <Card variant="flat">
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is clickable ', () => {
        const { container } = render(
            <Card clickable>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when fullWidth and fullHeight is set true', () => {
        const { container } = render(
            <Card fullWidth fullHeight>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when flow direction is horizontal and separator is set true', () => {
        const { container } = render(
            <Card separator flowDirection="horizontal">
                <Card separator flowDirection="horizontal" alignItems="left">
                    <Text>Dummy Text</Text>
                </Card>
                <Card separator flowDirection="horizontal" alignItems="right">
                    <Text>Dummy Text</Text>
                </Card>
                <Card separator flowDirection="horizontal" alignItems="top">
                    <Text>Dummy Text</Text>
                </Card>
                <Card separator flowDirection="horizontal" alignItems="bottom">
                    <Text>Dummy Text</Text>
                </Card>
                <Card separator flowDirection="horizontal">
                    <Text>Dummy Text</Text>
                </Card>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when separator is set true flow direction is vertical', () => {
        const { container } = render(
            <Card separator withPadding flowDirection="vertical" alignItems="left">
                <Card variant="flat" flowDirection="vertical" alignItems="left">
                    <Text>Marks</Text>
                </Card>
                <Card variant="flat" flex={6} flowDirection="vertical" alignItems="right">
                    <Text>Dummy Text</Text>
                </Card>
                <Card variant="flat" flex={6} flowDirection="vertical" alignItems="top">
                    <Text>Dummy Text</Text>
                </Card>
                <Card variant="flat" flex={6} flowDirection="vertical" alignItems="bottom">
                    <Text>Dummy Text</Text>
                </Card>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });
});
