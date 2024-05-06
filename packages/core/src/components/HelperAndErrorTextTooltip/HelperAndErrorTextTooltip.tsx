import { ErrorIcon, InfoOutlineIcon } from '@medly-components/icons';
import type { FCC } from 'react';
import { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Popover from '../Popover';
import * as Styled from './HelperAndErrorTextTooltip.styled';
import { HelperTextTooltipProps } from './types';

export const HelperAndErrorTextTooltip: FCC<HelperTextTooltipProps> = memo((props: HelperTextTooltipProps) => {
    const { id, errorText, helperText } = props;

    const theme = useContext(ThemeContext);

    if (errorText || helperText) {
        return (
            <Popover interactionType="hover">
                <Styled.PopoverIconContainer>
                    {errorText ? (
                        <ErrorIcon title="error-icon" iconColor={theme?.helperAndErrorTextTooltip.errorIconColor} size="S" />
                    ) : (
                        <InfoOutlineIcon size="S" title="info-icon" />
                    )}
                </Styled.PopoverIconContainer>
                <Styled.HelperAndErrorTextPopover placement="top" withArrow bgColor={'#211F46'}>
                    <Styled.HelperAndErrorTextContainer id={`${id}-helper-text`}>
                        {(errorText || helperText || '').trim()}
                    </Styled.HelperAndErrorTextContainer>
                </Styled.HelperAndErrorTextPopover>
            </Popover>
        );
    } else return null;
});
HelperAndErrorTextTooltip.displayName = 'HelperAndErrorTextTooltip';
