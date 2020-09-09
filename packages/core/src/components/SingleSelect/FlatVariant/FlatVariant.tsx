import { WithStyle } from '@medly-components/utils';
import { ChevronDownIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import React, { useCallback } from 'react';
import Text from '../../Text';
import Label from '../../Label';
import { FlatVariantProps } from './types';
import { FlatVariantStyled, HelperText, OuterWrapper, Suffix } from './FlatVariant.styled';

export const FlatVariant: React.FC<FlatVariantProps> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const { valueColor, labelColor } = defaultTheme.singleSelect.variant.flat;
        const { label, value, id, fullWidth, areOptionsVisible, errorText, helperText, disabled, ...restProps } = props;
        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []);
        return (
            <OuterWrapper fullWidth={fullWidth} id={`${id}-button-wrapper`}>
                <FlatVariantStyled
                    ref={ref}
                    id={`${id}-button`}
                    disabled={disabled}
                    errorText={errorText}
                    areOptionsVisible={areOptionsVisible}
                    {...restProps}
                >
                    {label && <Label labelVariant="body3">{label}:</Label>}
                    <Text textVariant="body3" textWeight="Medium">
                        {value}
                    </Text>
                    <Suffix areOptionsVisible={areOptionsVisible}>
                        <ChevronDownIcon size="S" />
                    </Suffix>
                </FlatVariantStyled>
                {(errorText || helperText) && (
                    <HelperText
                        id={`${id}-helper-text`}
                        onClick={stopPropagation}
                        isError={!!errorText}
                        textColor={errorText ? valueColor.error : disabled ? labelColor.disabled : labelColor.default}
                    >
                        {errorText || helperText}
                    </HelperText>
                )}
            </OuterWrapper>
        );
    })
);

FlatVariant.displayName = 'SingleSelectButtonVariant';
