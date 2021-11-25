import { render } from '@test-utils';
import styled from 'styled-components';
import { getFontStyle } from './getFontStyle';

describe('getFontStyle', () => {
    it('should apply default styles', () => {
        const Element = styled('div')`
            ${getFontStyle}
        `;
        const { container } = render(<Element />);
        expect(container).toMatchSnapshot();
    });

    it('should apply styles for specific font variant', () => {
        const Element = styled('div')`
            ${({ theme }) => getFontStyle({ theme, fontVariant: 'h1' })}
        `;
        const { container } = render(<Element />);
        expect(container).toMatchSnapshot();
    });

    it('should apply styles for a specific font weight', () => {
        const Element = styled('div')`
            ${({ theme }) => getFontStyle({ theme, fontWeight: 'ExtraStrong' })}
        `;
        const { container } = render(<Element />);
        expect(container).toMatchSnapshot();
    });

    it('should apply styles for a specific font variant and font weight', () => {
        const Element = styled('div')`
            ${({ theme }) => getFontStyle({ theme, fontVariant: 'h1', fontWeight: 'ExtraStrong' })}
        `;
        const { container } = render(<Element />);
        expect(container).toMatchSnapshot();
    });
});
