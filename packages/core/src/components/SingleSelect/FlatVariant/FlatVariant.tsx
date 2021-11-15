import { ChevronDownIcon } from '@medly-components/icons';
import { useCallback, forwardRef, memo } from 'react';
import Label from '../../Label';
import Text from '../../Text';
import { FlatVariantStyled, HelperText, OuterWrapper, Suffix } from './FlatVariant.styled';
import { FlatVariantProps } from './types';
import type { FC } from 'react';

export const FlatVariant: FC<FlatVariantProps> = memo(
    forwardRef<HTMLButtonElement, FlatVariantProps>((props, ref) => {
        const { label, value, id, areOptionsVisible, errorText, helperText, disabled, ...restProps } = props;
        const stopPropagation = useCallback((event: React.MouseEvent) => event.stopPropagation(), []);
        return (
            <OuterWrapper id={`${id}-button-wrapper`}>
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
                {(errorText || helperText)?.trim() && (
                    <HelperText id={`${id}-helper-text`} onClick={stopPropagation} disabled={disabled} isError={!!errorText}>
                        {errorText || helperText}
                    </HelperText>
                )}
            </OuterWrapper>
        );
    })
);

FlatVariant.displayName = 'SingleSelectButtonVariant';
