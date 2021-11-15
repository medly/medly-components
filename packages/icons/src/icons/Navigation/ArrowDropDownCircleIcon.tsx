import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import ArrowDropDownCircleIconSvg from '../../assets/Navigation/arrow_drop_down_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowDropDownCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ArrowDropDownCircleIcon';

const ArrowDropDownCircleIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ArrowDropDownCircleIcon;
