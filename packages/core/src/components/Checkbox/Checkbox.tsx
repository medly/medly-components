import { CheckMaterialIcon } from '@medly-components/icons';
import { useCombinedRefs, WithStyle } from '@medly-components/utils';
import colors from 'packages/theme/src/core/colors';
import React, { SFC, useCallback, useState } from 'react';
import FieldWithLabel from '../FieldWithLabel';
import * as Styled from './Checkbox.styled';
import { Props } from './types';

export const Checkbox: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => {
        const {
            id,
            size,
            label,
            required,
            labelPosition,
            labelVariant,
            labelWeight,
            labelColor,
            fullWidth,
            onChange,
            ...restProps
        } = props;

        const inputRef = useCombinedRefs<HTMLInputElement>(ref, React.useRef(null)),
            [isActive, setActiveState] = useState(restProps.checked || restProps.defaultChecked);

        const changeHandler = useCallback(
            (e: any) => {
                e.stopPropagation();
                setActiveState((e.target as HTMLInputElement).checked);
                onChange && onChange(e);
            },
            [onChange]
        );

        const getLabelColor = restProps.disabled ? colors.grey[500] : labelColor;

        return (
            <FieldWithLabel id={`${label}-checkbox`} fieldWithMaxContent {...{ fullWidth, labelPosition }}>
                {label && (
                    <FieldWithLabel.Label
                        showPointer={!restProps.disabled}
                        {...{ required, labelPosition, labelVariant, labelWeight, labelColor: getLabelColor }}
                        htmlFor={id || label}
                    >
                        {label}
                    </FieldWithLabel.Label>
                )}
                <Styled.Wrapper size={size} disabled={restProps.disabled} isActive={isActive} error={restProps.error}>
                    <Styled.Checkbox ref={inputRef} id={id || label} required={required} onChange={changeHandler} {...restProps} />
                    <CheckMaterialIcon onClick={changeHandler} />
                </Styled.Wrapper>
            </FieldWithLabel>
        );
    })
);

Checkbox.displayName = 'Checkbox';
Checkbox.Style = FieldWithLabel.Style;
Checkbox.defaultProps = {
    label: '',
    required: false,
    labelPosition: 'right'
};
