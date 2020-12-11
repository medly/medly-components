import { keyframes, styled } from '@medly-components/utils';
import { rgba } from 'polished';
import Text from '../Text';
import { CenterAlignedProps } from './types';

const fadesIn = keyframes`
  from {
    transform: translateY(0.8rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CenterAligned = styled('div')<CenterAlignedProps>`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: ${({ position }) => position};
    background-color: ${({ withOverlay, theme }) => withOverlay && rgba(theme.colors.white, 0.75)};
    & > * {
        animation: ${fadesIn} 300ms ${({ withLoadingBox }) => (withLoadingBox ? 'ease-in-out' : 'ease-in')};
    }
`;

export const LoadingBox = styled('div')`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.white};
    height: 14.4rem;
    width: 14.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0.4rem 1.6rem ${({ theme }) => rgba(theme.colors.grey[600], 0.2)};
    border-radius: 1rem;
    ${Text.Style} {
        margin-top: 1.4rem;
        color: ${({ theme }) => theme.colors.grey[700]};
    }
`;
