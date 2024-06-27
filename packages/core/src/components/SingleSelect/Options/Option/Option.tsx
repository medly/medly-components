import { ArrowRightIcon, CheckIcon } from '@medly-components/icons';
import { WithStyle, useKeyPress, useOuterClickNotifier } from '@medly-components/utils';
import type { FC } from 'react';
import { isValidElement, memo, useCallback, useEffect, useRef, useState } from 'react';
import { withTheme } from 'styled-components';
import Text from '../../../Text';
import Options from '../Options';
import { CustomComponentWrapper, OptionStyled } from './Option.styled';
import { OptionProps } from './types';

const Component: FC<OptionProps> = memo(props => {
    const ref = useRef<HTMLLIElement>(null),
        [areOptionsVisible, setOptionsVisibilityState] = useState(false),
        { value, theme, label, disabled, selected, onClick, hasError, hovered, size, variant, maxWidth, includesNestedOptions } = props,
        id = label.replace(/ /g, '-'),
        enterPress = useKeyPress('Enter'),
        leftPress = useKeyPress('ArrowLeft'),
        rightPress = useKeyPress('ArrowRight'),
        isNested = Array.isArray(value);

    const showNestedOptions = useCallback(() => setOptionsVisibilityState(true), []),
        hideNestedOptions = useCallback(() => setOptionsVisibilityState(false), []),
        handleOnClick = useCallback(
            (event: React.MouseEvent<HTMLLIElement>) => {
                event.stopPropagation();
                isNested && showNestedOptions();
                onClick({ value, label, disabled, selected });
            },
            [isNested, disabled, onClick]
        );

    useEffect(() => {
        (selected || hovered) &&
            ref.current?.scrollIntoView({
                behavior: 'instant',
                block: 'nearest'
            });
    }, [selected, hovered]);

    useEffect(() => {
        if (!disabled && isNested && hovered) {
            (rightPress || enterPress) && showNestedOptions();
            leftPress && !value.find((op: OptionProps) => op.hovered && Array.isArray(op.value)) && hideNestedOptions();
        }
    }, [value, disabled, isNested, hovered, leftPress, rightPress, enterPress]);

    useOuterClickNotifier(() => hideNestedOptions(), ref);

    return (
        <OptionStyled
            id={id}
            ref={ref}
            disabled={disabled}
            selected={selected}
            variant={variant}
            hasError={hasError}
            hovered={hovered}
            maxWidth={maxWidth}
            onClick={handleOnClick}
            onMouseEnter={showNestedOptions}
            onMouseLeave={hideNestedOptions}
        >
            {isValidElement(value) && !isNested ? (
                <CustomComponentWrapper>{value}</CustomComponentWrapper>
            ) : (
                <Text
                    textWeight={selected ? 'Medium' : 'Regular'}
                    textVariant={variant === 'flat' ? 'body3' : theme.singleSelect.option.textVariant[size]}
                >
                    {label}
                </Text>
            )}
            {isNested ? <ArrowRightIcon size={variant === 'flat' ? 'S' : 'M'} /> : selected && variant !== 'flat' && <CheckIcon />}
            {areOptionsVisible && isNested && (
                <Options
                    isNested
                    size={size}
                    id={`${id}-options`}
                    options={value}
                    variant={variant}
                    onOptionClick={onClick}
                    hasError={hasError}
                    maxWidth={maxWidth}
                    includesNestedOptions={includesNestedOptions}
                />
            )}
        </OptionStyled>
    );
});
Component.displayName = 'Option';
const Option: FC<OptionProps> & WithStyle = Object.assign(Component, { Style: OptionStyled });
export default withTheme(Option);
