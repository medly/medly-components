import { WithStyle } from '@medly-components/utils';
import { Children, useMemo, memo, forwardRef } from 'react';
import { DescriptionStyled, FieldStyled, FieldWithLabelStyled, LabelStyled } from './FieldWithLabel.styled';
import { FieldWithLabelProps, StaticProps } from './types';
import type { FC } from 'react';

const Component: FC<FieldWithLabelProps> = memo(
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
export const FieldWithLabel: FC<FieldWithLabelProps> & WithStyle & StaticProps = Object.assign(Component, {
    Style: FieldWithLabelStyled,
    Description: DescriptionStyled,
    Label: LabelStyled,
    Field: FieldStyled
});
