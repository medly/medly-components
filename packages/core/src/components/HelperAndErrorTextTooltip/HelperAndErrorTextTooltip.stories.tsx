import { HelperAndErrorTextTooltip } from './HelperAndErrorTextTooltip';
import type { FC } from 'react';

export const Custom: FC = () => {
    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HelperAndErrorTextTooltip id={'default'} helperText={'helper text'} errorText={'error text'} />
        </div>
    );
};
