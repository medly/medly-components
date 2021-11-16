import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import Brightness3IconSvg from '../../assets/Image/brightness_3_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness3IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Brightness3Icon';

const Brightness3Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default Brightness3Icon;
