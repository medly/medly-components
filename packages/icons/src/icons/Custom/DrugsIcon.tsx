import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DrugsIconSvg from '../../assets/Custom/drugs_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DrugsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DrugsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DrugsIcon.Style = SvgIcon;
DrugsIcon.displayName = 'DrugsIcon';

export default DrugsIcon
