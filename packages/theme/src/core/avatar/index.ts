import { AvatarTheme } from './types';

const avatar: AvatarTheme = {
    sizes: {
        S: {
            avatarSize: '30px',
            fontSize: 'M3'
        },
        M: {
            avatarSize: '60px',
            fontSize: 'L2'
        },
        L: {
            avatarSize: '90px',
            fontSize: 'L3'
        },
        XL: {
            avatarSize: '120px',
            fontSize: 'L4'
        }
    },
    defaults: {
        size: 'S',
        textColor: '#fafafa',
        bgColor: '#bdbdbd'
    }
};

export default avatar;
