import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import StrikethroughSIconSvg from '../../assets/Editor/strikethrough_s_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StrikethroughSIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'StrikethroughSIcon';

const StrikethroughSIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default StrikethroughSIcon;
