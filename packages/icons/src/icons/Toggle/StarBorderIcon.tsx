import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StarBorderIconSvg from '../../assets/Toggle/star_border_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarBorderIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StarBorderIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StarBorderIcon.Style = SvgIcon;
StarBorderIcon.displayName = 'StarBorderIcon';

export default StarBorderIcon
