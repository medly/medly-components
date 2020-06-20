import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LabelImportantOutlineIconSvg from '../../assets/Action/label_important_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelImportantOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LabelImportantOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LabelImportantOutlineIcon.Style = SvgIcon;
LabelImportantOutlineIcon.displayName = 'LabelImportantOutlineIcon';

export default LabelImportantOutlineIcon
