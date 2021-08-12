import { ErrorIcon, InfoOutlineIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Popover from '../Popover';
import * as Styled from './HelperAndErrorTextTooltip.styled';

interface HelperTextTooltipProps {
    /** Id prefix */
    idPrefix: string;
    /** Error icon color */
    errorIconColor?: string;
    /** Helper Text */
    helperText?: string;
    /** Error Text */
    errorText?: string;
}
export const HelperAndErrorTextTooltip: FC<HelperTextTooltipProps> & WithStyle = React.memo((props: HelperTextTooltipProps) => {
    const { idPrefix, errorIconColor, errorText, helperText } = props;

    if (errorText || helperText) {
        return (
            <Popover interactionType="hover">
                <Styled.PopoverIconContainer>
                    {errorText ? (
                        <ErrorIcon iconColor={errorIconColor || defaultTheme.colors.red[500]} size="S" />
                    ) : (
                        <InfoOutlineIcon size="S" />
                    )}
                </Styled.PopoverIconContainer>
                <Styled.HelperAndErrorTextPopover placement="top" withArrow bgColor={'#211F46'}>
                    <Styled.HelperAndErrorTextContainer id={`${idPrefix}-helper-text`}>
                        {(errorText || helperText).trim()}
                    </Styled.HelperAndErrorTextContainer>
                </Styled.HelperAndErrorTextPopover>
            </Popover>
        );
    } else return null;
});
HelperAndErrorTextTooltip.displayName = 'HelperAndErrorTextTooltip';
