import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import PregnantWomanIconSvg from '../../assets/Action/pregnant_woman_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PregnantWomanIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PregnantWomanIcon';

const PregnantWomanIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PregnantWomanIcon;
