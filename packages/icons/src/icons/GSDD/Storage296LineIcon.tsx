import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Storage296LineIconSvg from '../../assets/GSDD/Storage_296_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Storage296LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage296LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Storage296LineIcon.Style = SvgIcon;
Storage296LineIcon.displayName = 'Storage296LineIcon';

export default Storage296LineIcon
