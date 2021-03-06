import { useTranslation } from 'react-tinacms-i18n';
import React from 'react';
import { useForm, usePlugin } from 'tinacms';

import { Layout } from '../components/Layout.js';

export default function Translations() {
  const fallbackData = {
    header: 'The is a fallback title',
    text: 'This is some fallback text',
    paragraph:
      'Since there is no paragraph field defined on our content this fallback data will be shown. If you open the toolbar and edit the paragraph field you will override this fallback data.',
  };
  const content = {
    header: 'Make Translations',
    text:
      'First we should make a form to make our content editable. Once we have some data in a form we can use the useTranslation hook. We pass the form data to that hook and fallback data. The fallback data will be displayed if the data we are trying to access is missing or empty. If you look at the sidebar you can see all of this in action',
  };
  const [formData, form] = useForm({
    id: 'edit',
    label: 'Edit',

    initialValues: {
      ...content,
    },

    fields: [
      {
        name: 'header',
        label: 'Heading',
        component: 'text',
      },
      {
        name: 'text',
        label: 'Text',
        component: 'textarea',
      },
      {
        name: 'paragraph',
        label: 'Paragraph',
        component: 'textarea',
      },
    ],

    onSubmit(data, form) {
      alert('Form submitted! Check the console to see the form values.');
      console.clear();
      console.log(data);
    },
  });

  usePlugin(form);
  const t = useTranslation(formData, fallbackData);

  let code = `export default function Translations() {
    const fallbackData = {
      header: 'The is a fallback title',
      text: 'This is some fallback text',
      paragraph:
        'Since there is no paragraph field defined on our content this fallback data will be shown. If you open the toolbar and edit the paragraph field you will override this fallback data.',
    };
    const content = {
      header: 'Making translations in our app',
      text:
        'First we should make a form to make our content editable. Once we have some data in a form we can use the useTranslation hook. We pass the form data to that hook and the fallback data. The fallback data will be displayed if the data we are trying to access is missing or empty. If you look at the sidebar you can see all of this in action',
    };
    const [formData, form] = useForm({
      id: 'edit',
      label: 'Edit',
  
      initialValues: {
        ...content,
      },
  
      fields: [
        {
          name: 'header',
          label: 'Heading',
          component: 'text',
        },
        {
          name: 'text',
          label: 'Text',
          component: 'textarea',
        },
        {
          name: 'paragraph',
          label: 'Paragraph',
          component: 'textarea',
        },
      ],
  
      onSubmit(data, form) {
        alert('Form submitted! Check the console to see the form values.');
        console.clear();
        console.log(data);
      },
    });
  
    usePlugin(form);
    const t = useTranslation(formData, fallbackData);
  
  
    return (
      <>
        <h1>{t('header')}</h1>
        <p>{t('text')}</p>
        <p>{t('paragraph')}</p
      </>
    );
  }
  `;

  return (
    <Layout code={code} prevLink="/setup" nextLink="/switch-locale">
      <h1 className="title is-3">{t('header')}</h1>
      <p>{t('text')}</p>
      <p>{t('paragraph')}</p>
    </Layout>
  );
}
