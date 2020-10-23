import { render } from '@test-utils';
import React from 'react';
import { Actions } from './Actions';
import { ModalActionUserProps } from './types';

describe('Modal action component', () => {
    test.each([
        ['left', 'flex-start'],
        ['center', 'center'],
        ['right', 'flex-end']
    ])('should align actions properly when align-items props is %s', (alignItems: ModalActionUserProps['alignItems'], flexValue) => {
        const { container } = render(
            // TODO: fix types
            <Actions id="dummy" scrollState={{ scrolledToTop: true, scrolledToBottom: false }} alignItems={alignItems}>
                Demo Actions
            </Actions>
        );
        expect(container.querySelector('#dummy-actions')).toHaveStyle(`justify-content: ${flexValue}`);
    });
});
