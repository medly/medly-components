import type { FCC } from 'react';
import { HelperAndErrorTextTooltip } from './HelperAndErrorTextTooltip';

export const Custom: FCC = () => {
    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HelperAndErrorTextTooltip id={'default'} helperText={'helper text'} errorText={'error text'} />
        </div>
    );
};
