import { render } from '@test-utils';
import React from 'react';
import { HiddenCss } from './HiddenCss.styled';

describe('HiddenCss', () => {
    test.each([
        ['at or above', { up: 'S' }],
        ['at or down', { down: 'S' }],
        ['between start and end of', { between: { start: 'S', end: 'L' } }],
        ['at specific', { only: 'S' }],
        ['at the specified list of', { multiple: ['M', 'XL'] }]
    ])('should hide the children %s breakpoint', (propKey: any, props: any) => {
        const { container } = render(
            <HiddenCss {...props}>
                <span>Strong text</span>
            </HiddenCss>
        );
        expect(container).toMatchSnapshot();
    });

    it('should hide the children if none of the prop is passed', () => {
        const { container } = render(
            <HiddenCss>
                <span>Strong text</span>
            </HiddenCss>
        );
        expect(container).toMatchSnapshot();
    });
});
