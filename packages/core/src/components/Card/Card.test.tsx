import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Text from '../Text';
import { Card } from './Card.styled';

describe('Card component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(
            <Card>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render solid variant properly ', () => {
        const { container } = TestUtils.render(
            <Card variant="solid">
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });
    it('should render flat variant properly ', () => {
        const { container } = TestUtils.render(
            <Card variant="flat">
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when it is clickable ', () => {
        const { container } = TestUtils.render(
            <Card clickable>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when fullWidth and fullHeight is set true', () => {
        const { container } = TestUtils.render(
            <Card fullWidth fullHeight>
                <Text>Dummy Text</Text>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render properly when flow direction is horizontal and separator is set true', () => {
        const { container } = TestUtils.render(
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
        const { container } = TestUtils.render(
            <Card separator flowDirection="vertical" alignItems="left">
                <Card variant="flat">
                    <Text>Marks</Text>
                </Card>
                <Card variant="flat" flex={6} alignItems="right">
                    <Text>Dummy Text</Text>
                </Card>
                <Card variant="flat" flex={6} alignItems="top">
                    <Text>Dummy Text</Text>
                </Card>
                <Card variant="flat" flex={6} alignItems="bottom">
                    <Text>Dummy Text</Text>
                </Card>
            </Card>
        );
        expect(container).toMatchSnapshot();
    });
});
