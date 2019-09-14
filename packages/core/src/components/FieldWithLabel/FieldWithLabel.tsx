import { WithStyle } from '@medly-components/utils';
import React from 'react';
import { DescriptionStyled, FieldStyled, FieldWithLabelStyled, LabelStyled } from './FieldWithLabel.styled';
import { Props, StaticProps } from './types';

const FieldWithLabel: React.SFC<Props> & WithStyle & StaticProps = props => {
    let isLabelPresent = false;

    React.Children.forEach(props.children, (child: any) => {
        if (child && child.type && child.type.displayName === 'Label') {
            isLabelPresent = true;
        }
    });

    return <FieldWithLabelStyled {...props} isLabelPresent={isLabelPresent} />;
};

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

export default FieldWithLabel;
