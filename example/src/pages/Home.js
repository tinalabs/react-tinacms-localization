import React from 'react';
import { useCMS } from 'tinacms';

import Code from '../components/Code.js';

export default function Home() {
  const cms = useCMS();

  // cms.sidebar.hidden = true;

  let code = `return (
    <>
      <p>
        Hi! lets get started with learning how to add localization to a tinacms
        site.
      </p>
      <p>
        This guide assume you have a basic understanding of tina if you don't{' '}
        <a href="https://tinacms.org/docs">
          head over to our website and check them out!
        </a>
      </p>
    </>
  );`;

  return (
    <>
      <p>
        Hi! lets get started with learning how to add localization to a tinacms
        site.
      </p>
      <p>
        To get started you can open the sidebar (pencil icon at the bottom of
        the screen)
      </p>
      <p>
        Note: This guide assume you have a basic understanding of tina if you
        don't{' '}
        <a href="https://tinacms.org/docs">
          head over to our website and check them out!
        </a>
      </p>

      <Code>{code}</Code>
    </>
  );
}