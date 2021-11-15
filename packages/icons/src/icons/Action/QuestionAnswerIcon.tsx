import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import QuestionAnswerIconSvg from '../../assets/Action/question_answer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <QuestionAnswerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'QuestionAnswerIcon';

const QuestionAnswerIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default QuestionAnswerIcon;
