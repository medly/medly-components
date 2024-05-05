import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, forwardRef, memo, useMemo } from 'react';
import { DescriptionStyled, FieldStyled, FieldWithLabelStyled, LabelStyled } from './FieldWithLabel.styled';
import { FieldWithLabelProps, StaticProps } from './types';

const Component: FCC<FieldWithLabelProps> = memo(
    forwardRef((props, ref) => {
        const isLabelPresent = useMemo(
            () => !!Children.toArray(props.children).find((child: any) => child && child.type && child.type.displayName === 'Label'),
            [props.children]
        );

        return <FieldWithLabelStyled ref={ref} {...props} isLabelPresent={isLabelPresent} />;
    })
);

Component.displayName = 'FieldWithLabel';
Component.defaultProps = { labelPosition: 'left', fullWidth: false, fieldWithMaxContent: false };
export const FieldWithLabel: FCC<FieldWithLabelProps> & WithStyle & StaticProps = Object.assign(Component, {
    Style: FieldWithLabelStyled,
    Description: DescriptionStyled,
    Label: LabelStyled,
    Field: FieldStyled
});
