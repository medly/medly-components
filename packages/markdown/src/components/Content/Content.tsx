import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import directive from 'remark-directive';
import remarkFootnotes from 'remark-footnotes';
import gfm from 'remark-gfm';
import { CodeBlock } from './CodeBlock';
import customDirectives from './customDirectives';
import { YouTube } from './Youtube';

export const Content: FC<{ content: string }> = ({ content }) => (
    <ReactMarkdown
        skipHtml={false}
        remarkPlugins={[gfm, remarkFootnotes, directive, customDirectives]}
        components={{
            code: CodeBlock,
            // @ts-ignore
            youtube: YouTube
        }}
    >
        {content}
    </ReactMarkdown>
);
