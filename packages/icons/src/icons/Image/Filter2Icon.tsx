import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Filter2IconSvg from '../../assets/Image/filter_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter2Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Filter2IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Filter2Icon.Style = SvgIcon;
Filter2Icon.displayName = 'Filter2Icon';

export default Filter2Icon
