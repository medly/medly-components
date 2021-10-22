import { render, screen } from '@test-utils';
import React from 'react';
import styled from 'styled-components';
import { centerAligned } from './centerAligned';

const Element = styled('div')`
        ${centerAligned()}
    `,
    expected = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

describe('center aligned', () => {
    it('should add expected properties in css', () => {
        render(<Element data-testid="center-div" />);
        expect(screen.getByTestId('center-div')).toHaveStyle(expected);
    });
});
