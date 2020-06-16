import { WithStyle } from '@medly-components/utils';
import React, { useMemo } from 'react';
import { DescriptionStyled, FieldStyled, FieldWithLabelStyled, LabelStyled } from './FieldWithLabel.styled';
import { Props, StaticProps } from './types';

export const FieldWithLabel: React.FC<Props> & WithStyle & StaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const isLabelPresent = useMemo(
            () => !!React.Children.toArray(props.children).find((child: any) => child && child.type && child.type.displayName === 'Label'),
            [props.children]
        );

        return <FieldWithLabelStyled ref={ref} {...props} isLabelPresent={isLabelPresent} />;
    })
);

FieldWithLabel.Field = FieldStyled;
FieldWithLabel.Label = LabelStyled;
FieldWithLabel.Description = DescriptionStyled;
FieldWithLabel.displayName = 'FieldWithLabel';
FieldWithLabel.Style = FieldWithLabelStyled;
FieldWithLabel.defaultProps = {
    labelPosition: 'left',
    fullWidth: false,
    fieldWithMaxContent: false
};
