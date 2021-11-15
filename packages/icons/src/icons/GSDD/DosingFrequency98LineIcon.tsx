import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import DosingFrequency98LineIconSvg from '../../assets/GSDD/DosingFrequency_98_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DosingFrequency98LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'DosingFrequency98LineIcon';

const DosingFrequency98LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default DosingFrequency98LineIcon;
