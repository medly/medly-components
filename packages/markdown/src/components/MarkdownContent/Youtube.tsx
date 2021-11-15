/* eslint-disable react/display-name */
import { memo } from 'react';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';

export const YouTube: CodeComponent = memo(props => {
    // @ts-ignore
    const params = new URL(props.link || props.children[0]?.props?.href).searchParams;
    return (
        <iframe
            src={`https://www.youtube.com/embed/${params.get('v') || props.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
});
