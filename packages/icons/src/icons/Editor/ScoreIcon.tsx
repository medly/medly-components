import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ScoreIconSvg from '../../assets/Editor/score_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ScoreIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ScoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ScoreIcon.Style = SvgIcon;
ScoreIcon.displayName = 'ScoreIcon';

export default ScoreIcon
