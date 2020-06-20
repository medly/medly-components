import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LabelImportantIconSvg from '../../assets/Action/label_important_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelImportantIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LabelImportantIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LabelImportantIcon.Style = SvgIcon;
LabelImportantIcon.displayName = 'LabelImportantIcon';

export default LabelImportantIcon
