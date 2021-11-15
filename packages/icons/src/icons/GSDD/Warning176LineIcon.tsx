import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import Warning176LineIconSvg from '../../assets/GSDD/Warning_176_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning176LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Warning176LineIcon';

const Warning176LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default Warning176LineIcon;
