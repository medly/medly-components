import { AvatarTheme } from './types';

const avatar: AvatarTheme = {
    sizes: {
        S: {
            avatarSize: '30px',
            fontVariant: 'body2'
        },
        M: {
            avatarSize: '60px',
            fontVariant: 'h3'
        },
        L: {
            avatarSize: '90px',
            fontVariant: 'h2'
        },
        XL: {
            avatarSize: '120px',
            fontVariant: 'h1'
        }
    },
    defaults: {
        size: 'S',
        textColor: '#fafafa',
        bgColor: '#bdbdbd'
    }
};

export default avatar;
