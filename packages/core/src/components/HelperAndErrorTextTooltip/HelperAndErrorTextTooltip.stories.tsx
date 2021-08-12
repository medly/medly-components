import React from 'react';
import { HelperAndErrorTextTooltip } from './HelperAndErrorTextTooltip';

export const Custom: React.FC = () => {
    return (
        <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <HelperAndErrorTextTooltip id={'default'} errorIconColor={'red'} helperText={'helper text'} errorText={'error text'} />
        </div>
    );
};
