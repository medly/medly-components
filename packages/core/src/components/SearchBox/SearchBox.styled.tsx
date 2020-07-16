import { SvgIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { css, styled } from '@medly-components/utils';
import Options from '../SingleSelect/Options';
import { SearchIconWrapper } from './styles/icons';
import { getOptionsStyles } from './styles/options';
import { getBorderAndBoxShadow, getSearchBoxSize } from './styles/utils';
import { Props } from './types';

const getSmallSearchBoxStyle = ({ areOptionsVisible }: { areOptionsVisible?: boolean }) => {
    return css`
        border-radius: ${areOptionsVisible ? '2rem 2rem 0 0' : '4rem'};
        input {
            font-size: 1.4rem;
            line-height: 2.2rem;
            padding-left: 2rem;
        }
        ${SvgIcon} {
            padding: 0.2rem;
        }
    `;
};

const getMediumSearchBoxStyle = ({ areOptionsVisible }: Props & { areOptionsVisible?: boolean }) => {
    return css`
        border-radius: ${areOptionsVisible ? '2.5rem 2.5rem 0 0' : '4rem'};
        padding-right: 3px;
        input {
            font-size: 1.6rem;
            line-height: 2.6rem;
            padding-left: 2.4rem;
        }
        ${SvgIcon} {
            padding: 0.4rem;
        }
    `;
};

const activeSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { active }
    } = theme;
    return css`
        box-shadow: ${active.boxShadow};
        border-color: ${active.borderColor};
        border-width: 1.5px;
    `;
};

const nonActiveSearchBoxStyle = ({ theme }: Props) => {
    const {
        searchBox: { hover, active, default: defaultStyle }
    } = theme;

    return css`
        border-bottom: 1.5px solid;
        border-color: ${defaultStyle.borderColor};
        border-radius: 4rem;
        transition: border-color 100ms, box-shadow 100ms;
        &:focus-within {
            ${getBorderAndBoxShadow(active.borderColor, active.boxShadow)};
            ${SearchIconWrapper} {
                ${SvgIcon} {
                    * {
                        fill: ${active.borderColor};
                    }
                }
            }
        }
        &:hover {
            ${getBorderAndBoxShadow(hover.borderColor, hover.boxShadow)};
        }
        &:focus-within:hover {
            ${getBorderAndBoxShadow(active.borderColor, active.boxShadow)};
        }
    `;
};

export const SearchBoxWrapper = styled.div<Props & { isActive?: boolean; areOptionsVisible?: boolean }>`
    width: 25.6rem;
    display: flex;
    flex-direction: row;
    outline: none;
    box-sizing: border-box;
    height: ${getSearchBoxSize};
    border: 1.5px solid;
    position: relative;

    ${Options.Style} {
        ${getOptionsStyles};
    }
    ${({ size }) => (size === 'M' ? getMediumSearchBoxStyle : getSmallSearchBoxStyle)};
    ${({ isActive }) => (isActive ? activeSearchBoxStyle : nonActiveSearchBoxStyle)};
`;

SearchBoxWrapper.defaultProps = {
    theme: defaultTheme
};
