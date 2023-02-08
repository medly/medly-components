import { render } from '@test-utils';
import { Footer } from './Footer';
import { ModalFooterProps } from './types';

const testData: [ModalFooterProps['alignItems'], string][] = [
    ['left', 'flex-start'],
    ['center', 'center'],
    ['right', 'flex-end']
];

describe('Modal action component', () => {
    test.each(testData)('should align actions properly when align-items props is %s', (alignItems, flexValue) => {
        const { container } = render(<Footer alignItems={alignItems}>Demo Footer</Footer>);
        expect(container.querySelector('#default-id-actions')).toHaveStyle(`justify-content: ${flexValue}`);
    });
});
