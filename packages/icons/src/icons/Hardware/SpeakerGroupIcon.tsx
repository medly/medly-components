import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SpeakerGroupIconSvg from '../../assets/Hardware/speaker_group_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpeakerGroupIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SpeakerGroupIcon';

const SpeakerGroupIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SpeakerGroupIcon;
