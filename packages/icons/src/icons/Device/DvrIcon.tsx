import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DvrIconSvg from '../../assets/Device/dvr_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DvrIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DvrIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DvrIcon.Style = SvgIcon;
DvrIcon.displayName = 'DvrIcon';

export default DvrIcon
