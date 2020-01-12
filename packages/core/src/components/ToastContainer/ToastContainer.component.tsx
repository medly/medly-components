import React, { SFC } from 'react';

import { WithStyle } from '@medly-components/utils';
import * as Styled from './ToastContainer.styled';
import { Props } from './types';

export const ToastContainer: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => <Styled.Container ref={ref} {...props} />)
);
ToastContainer.defaultProps = {
    position: 'top'
};
ToastContainer.displayName = 'ToastContainer';
ToastContainer.Style = Styled.Container;
