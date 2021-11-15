import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import Storage362LineIconSvg from '../../assets/GSDD/Storage_362_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Storage362LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Storage362LineIcon';

const Storage362LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default Storage362LineIcon;
