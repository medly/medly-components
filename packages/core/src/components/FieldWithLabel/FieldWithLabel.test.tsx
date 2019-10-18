import { TestUtils } from '@medly-components/utils';
import React from 'react';
import { FieldWithLabel } from './FieldWithLabel';

describe('FieldWithLabel component', () => {
    test.each`
        labelPosition | fullWidth | fieldWithMaxContent
        ${'left'}     | ${true}   | ${true}
        ${'right'}    | ${true}   | ${false}
        ${'top'}      | ${false}  | ${true}
        ${'bottom'}   | ${false}  | ${false}
    `(
        'should render properly with props labelPosition: $labelPosition, fullWidth: $fullWidth, fieldWithMaxContent: $fieldWithMaxContent',
        props => {
            const { container } = TestUtils.render(
                <FieldWithLabel {...props} minWidth={300}>
                    <FieldWithLabel.Label>Dummy Label</FieldWithLabel.Label>
                    <FieldWithLabel.Field>Dummy Field</FieldWithLabel.Field>
                    <FieldWithLabel.Description>Dummy Description</FieldWithLabel.Description>
                </FieldWithLabel>
            );
            expect(container).toMatchSnapshot();
        }
    );

    it('should render properly when lable is not present', () => {
        const { container } = TestUtils.render(
            <FieldWithLabel>
                <FieldWithLabel.Field isIndented>Dummy Field</FieldWithLabel.Field>
                <FieldWithLabel.Description>Dummy Description</FieldWithLabel.Description>
            </FieldWithLabel>
        );
        expect(container).toMatchSnapshot();
    });
});
