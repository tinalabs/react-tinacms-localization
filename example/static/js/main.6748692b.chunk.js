(this["webpackJsonptina-demo-cra"]=this["webpackJsonptina-demo-cra"]||[]).push([[0],{156:function(e){e.exports=JSON.parse('{"header":"Changer la langue actuelle","text":"Maintenant, nous allons changer la locale actuelle. Dans notre objet i18n, les param\xe8tres r\xe9gionaux actuels sont stock\xe9s \xe0 l\'\xe9tat de r\xe9action. Cela signifie que lorsque l\'application sera mise \xe0 jour, le rendu sera de nouveau","paragraph":"Le s\xe9lecteur de param\xe8tres r\xe9gionaux de la barre d\'outils changera la localisation actuelle pour nous donc tout ce que nous avons \xe0 faire pour r\xe9cup\xe9rer le contenu en fonction de la localisation actuelle et l\'utiliser dans notre application. Essaye le! dans le plugin de la barre d\'outils, essayez de cliquer sur \\"ca \\" puis sur la s\xe9lection fr_ca"}')},157:function(e){e.exports=JSON.parse('{"header":"Changer la langue actuelle","text":"Maintenant, nous allons changer la locale actuelle. Dans notre objet i18n, les param\xe8tres r\xe9gionaux actuels sont stock\xe9s \xe0 l\'\xe9tat de r\xe9action. Cela signifie que lorsque l\'application sera mise \xe0 jour, le rendu sera de nouveau","paragraph":"Le s\xe9lecteur de param\xe8tres r\xe9gionaux de la barre d\'outils changera la localisation actuelle pour nous donc tout ce que nous avons \xe0 faire pour r\xe9cup\xe9rer le contenu en fonction de la localisation actuelle et l\'utiliser dans notre application. Essaye le! dans le plugin de la barre d\'outils, essayez de cliquer sur \\"ca \\" puis sur la s\xe9lection fr_ca"}')},176:function(e,t,a){e.exports=a(432)},182:function(e,t,a){},428:function(e,t,a){var n={"./en_ca":94,"./en_ca.json":94,"./fr_ca":156,"./fr_ca.json":156};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=428},429:function(e,t,a){var n={"./en_ca":95,"./en_ca.json":95,"./fr_ca":157,"./fr_ca.json":157};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=429},432:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),l=a.n(r),c=(a(181),a(182),a(50)),i=a(9),s=a(4),u=a(22),m=a(433),d=a(169),h=a(67),p=a(25);function g(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],l=a[1];return o.a.createElement("div",{style:{marginRight:60,marginTop:40}},o.a.createElement("div",{style:{width:"100%",textAlign:"right"}},o.a.createElement(p.Button,{isSize:"small",onClick:function(){return l(!r)}},r?"Hide Code":"Show Code")),r&&o.a.createElement("div",{style:{width:"100%",fontSize:14}},o.a.createElement(m.a,{language:"jsx",style:h.a},e.children)),r&&e.readMoreLink&&o.a.createElement("a",{href:e.readMoreLink,target:"_blank",rel:"noopener noreferrer"},e.readMoreText))}function f(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Hi! lets get started with learning how to add localization to a tinacms site."),o.a.createElement("p",null,"To get started you can open the sidebar (pencil icon at the bottom of the screen)"),o.a.createElement("p",null,"Note: This guide assume you have a basic understanding of tina if you don't"," ",o.a.createElement("a",{href:"https://tinacms.org/docs"},"head over to our website check out our get started guide")),o.a.createElement(g,null,"return (\n    <>\n      <p>\n        Hi! lets get started with learning how to add localization to a tinacms\n        site.\n      </p>\n      <p>\n        This guide assume you have a basic understanding of tina if you don't{' '}\n        <a href=\"https://tinacms.org/docs\">\n          head over to our website and check them out!\n        </a>\n      </p>\n    </>\n  );"))}function b(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"First we need to set up the plugin"),o.a.createElement("p",null,"You could put all the bits and pieces together ourself or we can use a helper function"),o.a.createElement("p",null,"This helper function"),o.a.createElement("ol",null,o.a.createElement("li",null,"registers the localization api"),o.a.createElement("li",null,"registers the locale picker toolbar plugin"),o.a.createElement("li",null,"wraps out app in a provides that we can accesses with a useI18n hook")),o.a.createElement("p",null,"Now you will have access to a locale selection dropdown in the toolbar"),o.a.createElement(g,{readMoreLink:"https://tinacms.org/docs/cms",readMoreText:"Read the docs"},"\n  import { withI18n } from '@tinalabs/react-tinacms-i18n';\n\n  const AppWrapper = withI18n(App, {\n    ApiOptions: {\n      localeList: [\n        { language: 'en', region: 'ca' },\n        { language: 'fr', region: 'ca' },\n        { language: 'en', region: 'us' },\n        { language: 'sp', region: 'us' },\n      ],\n    },\n  });\n  export default () => {\n    const cms = new TinaCMS({\n      sidebar: {\n        position: 'displace',\n      },\n      enabled: true,\n      toolbar: true,\n    });\n    return (\n      <TinaProvider cms={cms}>\n        <AppWrapper />\n      </TinaProvider>\n    );\n  };\n "),o.a.createElement("p",null,"Note that that all of of our pages are inside of the App component"))}m.a.registerLanguage("jsx",d.a);var E=a(39),x=a(12);function w(){var e=Object(s.useForm)({id:"edit",label:"Edit",initialValues:Object(E.a)({},{header:"Making translations in our app",text:"First we should make a form to make our content editable. Once we have some data in a form we can use the useTranslation hook. We pass the form data to that hook and the fallback data. The fallback data will be displayed if the data we are trying to access is missing or empty. If you look at the sidebar you can see all of this in action"}),fields:[{name:"header",label:"Heading",component:"text"},{name:"text",label:"Text",component:"textarea"},{name:"paragraph",label:"Paragraph",component:"textarea"}],onSubmit:function(e,t){alert("Form submitted! Check the console to see the form values."),console.clear(),console.log(e)}}),t=Object(u.a)(e,2),a=t[0],n=t[1];Object(s.usePlugin)(n);var r=Object(x.c)(a,{header:"The is a fallback title",text:"This is some fallback text",paragraph:"Since there is no paragraph field defined on our content this fallback data will be shown. If you open the toolbar and edit the paragraph field you will override this fallback data."});return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title is-3"},r("header")),o.a.createElement("p",null,r("text")),o.a.createElement("p",null,r("paragraph")),o.a.createElement(g,{readMoreLink:"https://tinacms.org/docs/forms",readMoreText:"Read the docs"},"export default function Translations() {\n    const fallbackData = {\n      header: 'The is a fallback title',\n      text: 'This is some fallback text',\n      paragraph:\n        'Since there is no paragraph field defined on our content this fallback data will be shown. If you open the toolbar and edit the paragraph field you will override this fallback data.',\n    };\n    const content = {\n      header: 'Making translations in our app',\n      text:\n        'First we should make a form to make our content editable. Once we have some data in a form we can use the useTranslation hook. We pass the form data to that hook and the fallback data. The fallback data will be displayed if the data we are trying to access is missing or empty. If you look at the sidebar you can see all of this in action',\n    };\n    const [formData, form] = useForm({\n      id: 'edit',\n      label: 'Edit',\n  \n      initialValues: {\n        ...content,\n      },\n  \n      fields: [\n        {\n          name: 'header',\n          label: 'Heading',\n          component: 'text',\n        },\n        {\n          name: 'text',\n          label: 'Text',\n          component: 'textarea',\n        },\n        {\n          name: 'paragraph',\n          label: 'Paragraph',\n          component: 'textarea',\n        },\n      ],\n  \n      onSubmit(data, form) {\n        alert('Form submitted! Check the console to see the form values.');\n        console.clear();\n        console.log(data);\n      },\n    });\n  \n    usePlugin(form);\n    const t = useTranslation(formData, fallbackData);\n  \n  \n    return (\n      <>\n        <h1>{t('header')}</h1>\n        <p>{t('text')}</p>\n        <p>{t('paragraph')}</p\n      </>\n    );\n  }\n  "))}function k(){var e=Object(x.a)(),t={},n=e.locale;try{t=a(428)("./".concat(e.localeToString(n)))}catch(p){console.log("no locale exists"),console.warn(p)}var r=a(94),l=Object(s.useForm)({id:"edit-".concat(e.localeToString(n)),label:"Edit form in ".concat(e.getFormateLocale()),initialValues:Object(E.a)({},t),fields:[{name:"header",label:"Heading",component:"text"},{name:"text",label:"Text",component:"textarea"},{name:"paragraph",label:"Paragraph",component:"textarea"}],onSubmit:function(e,t){alert("Form submitted! Check the console to see the form values."),console.clear(),console.log(e)}}),c=Object(u.a)(l,2),i=c[0],m=c[1];Object(s.usePlugin)(m);var d=Object(x.c)(i,r),h="\nimport { useI18n, useTranslation } from '@tinalabs/react-tinacms-i18n';\nimport React from 'react';\nimport { useForm, usePlugin } from 'tinacms';\n\n\nexport default function SwitchLocale() {\n  const i18n = useI18n();\n\n  // get the content\n  let content = {};\n  const currentLocale = i18n.locale;\n  try {\n    content = require(`../content/".concat(e.localeToString(n),"`);\n  } catch (error) {\n    console.log('no locale exists');\n    console.warn(error);\n  }\n  // define fallback data\n  const fallbackData = require('../content/en_ca.json');\n\n  // setup a form\n  const [formData, form] = useForm({\n    id: `edit-").concat(e.localeToString(n),"`,\n    label: `Edit form in ").concat(e.getFormateLocale(),"`,\n    initialValues: {\n      ...content,\n    },\n\n    fields: [\n      {\n        name: 'header',\n        label: 'Heading',\n        component: 'text',\n      },\n      {\n        name: 'text',\n        label: 'Text',\n        component: 'textarea',\n      },\n      {\n        name: 'paragraph',\n        label: 'Paragraph',\n        component: 'textarea',\n      },\n    ],\n\n    onSubmit(data, form) {\n      alert('Form submitted! Check the console to see the form values.');\n      console.clear();\n      console.log(data);\n    },\n  });\n  // register the form\n  usePlugin(form);\n  const t = useTranslation(formData, fallbackData);\n\n  return (\n    <>\n      <h1 className=\"title is-3\">{t('header')}</h1>\n      <p>{t('text')}</p>\n      <p>{t('paragraph')}</p>\n    </>\n  );\n}\n  ");return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title is-3"},d("header")),o.a.createElement("p",null,d("text")),o.a.createElement("p",null,d("paragraph")),o.a.createElement(g,{readMoreLink:"https://tinacms.org/docs/forms",readMoreText:"Read the docs"},h))}var v=a(171);function T(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],l=a[1];return o.a.createElement("div",{style:{marginRight:60,marginTop:40}},o.a.createElement("div",{style:{width:"100%",textAlign:"right"}},o.a.createElement(p.Button,{isSize:"small",onClick:function(){return l(!r)}},r?"Hide Code":"Show Code")),r&&o.a.createElement("div",{style:{width:"100%",fontSize:14}},o.a.createElement(m.a,{language:"diff",style:h.a},e.children)),r&&e.readMoreLink&&o.a.createElement("a",{href:e.readMoreLink,target:"_blank",rel:"noopener noreferrer"},e.readMoreText))}function y(){var e=Object(x.a)(),t=!0,n={},r=e.locale;try{n=a(429)("./".concat(e.localeToString(r)))}catch(p){t=!1,console.log("no locale exists"),console.warn(p)}var l=a(95),c=Object(s.useForm)({id:"edit-".concat(e.localeToString(r)),label:"Edit form in ".concat(e.getFormateLocale()),initialValues:Object(E.a)({},n),fields:[{name:"header",label:"Heading",component:"text"},{name:"text",label:"Text",component:"textarea"},{name:"paragraph",label:"Paragraph",component:"textarea"}],onSubmit:function(e,t){alert("Form submitted! Check the console to see the form values."),console.clear(),console.log(e)}}),i=Object(u.a)(c,2),m=i[0],d=i[1];Object(s.usePlugin)(d);var h=Object(x.c)(m,l);Object(x.b)(!t,{onNo:function(){e.setLocale({language:"en",region:"ca"})}});return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title is-1"},h("header")),o.a.createElement("p",null,h("text")),o.a.createElement("p",null,h("paragraph")),o.a.createElement(T,{readMoreLink:"https://tinacms.org/docs/forms",readMoreText:"Read the docs"},"import {\n    useI18n,\n+   useLocalePromptPlugin,\n    useTranslation,\n  } from '@tinalabs/react-tinacms-i18n';\n  import React from 'react';\n  import { useForm, usePlugin } from 'tinacms';\n  \n  \n  export default function Forms() {\n    const i18n = useI18n();\n+   let hasContent = true;\n  \n    // get the content\n    let content = {};\n    const currentLocale = i18n.locale;\n    try {\n      content = require(`../content/PromptPage/${i18n.localeToString(\n        currentLocale\n      )}`);\n    } catch (error) {\n+     hasContent = false;\n      console.log('no locale exists');\n      console.warn(error);\n    }\n  \n    // define fallback data\n    const fallbackData = require('../content/PromptPage/en_ca.json');\n  \n    // setup a form\n    const [formData, form] = useForm({\n      id: `edit-${i18n.localeToString(currentLocale)}`,\n      label: `Edit form in ${i18n.getFormateLocale()}`,\n      initialValues: {\n        ...content,\n      },\n  \n      fields: [\n        {\n          name: 'header',\n          label: 'Heading',\n          component: 'text',\n        },\n        {\n          name: 'text',\n          label: 'Text',\n          component: 'textarea',\n        },\n        {\n          name: 'paragraph',\n          label: 'Paragraph',\n          component: 'textarea',\n        },\n      ],\n  \n      onSubmit(data, form) {\n        alert('Form submitted! Check the console to see the form values.');\n        console.clear();\n        console.log(data);\n      },\n    });\n    // register the form\n    usePlugin(form);\n    const t = useTranslation(formData, fallbackData);\n  \n+   useLocalePromptPlugin(!hasContent, {\n+     onNo: () => {\n+       i18n.setLocale({\n+         language: 'en',\n+         region: 'ca',\n+       });\n+     },\n+   });\n  \n    return (\n      <>\n        <h1 className=\"title is-1\">{t('header')}</h1>\n        <p>{t('text')}</p>\n        <p>{t('paragraph')}</p>\n      </>\n    );\n  }\n  "))}function O(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.c,{exact:!0,to:e.to,activeStyle:{fontWeight:"bold",color:"hsl(0, 0%, 21%)"}},e.children))}m.a.registerLanguage("diff",v.a);var j=a(173),S=a(174);function L(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"title is-3"},"Next Steps"),o.a.createElement("p",null,"i18n is made easy with tina!"),o.a.createElement("h3",{className:"title is-5"},"What can I do next?"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://tinalabs.github.io/react-tinacms-i18n/docs/"},"Look at our the docs for react-tinacms-i18n for more specific details")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://tinacms.org"},"Check out tinacms and all the of cool stuff you can do with it"))))}var C=function(){var e=Object(s.useCMS)();console.log("/react-tinacms-i18n/example");var t={localeList:[{language:"en",region:"ca"},{language:"fr",region:"ca"},{language:"en",region:"us"},{language:"sp",region:"us"}]};return o.a.createElement(c.a,{basename:"/react-tinacms-i18n/example"},o.a.createElement(p.Container,{style:{marginTop:40,marginBottom:40,paddingLeft:40,paddingRight:40,maxWidth:1e3}},o.a.createElement(p.Columns,null,o.a.createElement(p.Column,{isSize:"3/4"},o.a.createElement("h1",{className:"title is-1"},o.a.createElement(c.b,{to:"/",className:"has-text-black"},"TinaCMS i18n Example")),o.a.createElement(S.Button,{onClick:e.toggle},"Toggle edit mode"),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:f}),o.a.createElement(i.a,{path:"/setup",component:Object(x.d)(b,{ApiOptions:t})}),o.a.createElement(i.a,{path:"/translations",component:Object(x.d)(w,{ApiOptions:t})}),o.a.createElement(i.a,{path:"/switch-locale",component:Object(x.d)(k,{ApiOptions:t})}),o.a.createElement(i.a,{path:"/using-prompts",component:Object(x.d)(y,{ApiOptions:t})}),o.a.createElement(i.a,{path:"/whats-next",component:Object(x.d)(L,{ApiOptions:t})}))),o.a.createElement(p.Column,{isSize:"1/4"},o.a.createElement("ol",{style:{marginTop:20}},o.a.createElement(O,{to:"/"},o.a.createElement("li",null,"Welcome")),o.a.createElement(O,{to:"/setup"},o.a.createElement("li",null,"Register the Api")),o.a.createElement(O,{to:"/translations"},o.a.createElement("li",null,"MakeTranslations")),o.a.createElement(O,{to:"/switch-locale"},o.a.createElement("li",null,"Switch locale")),o.a.createElement(O,{to:"/using-prompts"},o.a.createElement("li",null,"Using Prompts")),o.a.createElement(O,{to:"/whats-next"},o.a.createElement("li",null,"Whats Next?")))))))},F=function(){var e=new s.TinaCMS({sidebar:{position:"displace"},enabled:!0,toolbar:!0});return o.a.createElement(s.TinaProvider,{cms:e},o.a.createElement(j.PromptProvider,null,o.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},94:function(e){e.exports=JSON.parse('{"header":"Switch the current locale","text":"Now we are going to switch the current locale. In our i18n object the current locale is stored at react state. This means when it updates out app will re-render. If you open the toolbar you will see that the form has also been changed.","paragraph":"The locale picker in the toolbar will switch the current locale for us so all we have to do it grab the content based on the current locale and use that in out app. Try it out! in the toolbar plugin try clicking \\"ca\\" and then selection fr_ca"}')},95:function(e){e.exports=JSON.parse('{"header":"Using Prompts","text":"Next we are going to add a prompt when the user is in edit mode and switches to a locale that doesn\'t exist. Note that in this demo both US locales do not exist. (en_us, es_us)","paragraph":"To do this all we have to do is call the useLocalePromptPlugin and pass it when a condition that when true will show the model. Try it out! Go ahead and click us in the Locale switcher in the toolbar and choose sp_us"}')}},[[176,1,2]]]);
//# sourceMappingURL=main.6748692b.chunk.js.map