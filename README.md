This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


[![Main workflow](https://github.com/mortegac/prismic-nextjs-base/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/mortegac/prismic-nextjs-base/actions/workflows/main.yml)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Initial Configuration in Prismic.io
DOC: https://prismic.io/docs/technologies/setup-nextjs

- Install slice machine
```
npx @slicemachine/init --repository NAME_REPOSITORY_IN_PRISMIC
```

- Initialize the configuration executing
```
npx @slicemachine/init
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## DEFINITION

- ISR = Incremental Static Site Generator
(Regeneraci??n est??tica incremental)
`getStaticPropses` un hermano getStaticPaths y se utiliza en generaci??n est??tica. Es una funci??n as??ncrona en la que puede obtener datos externos y devolverlos como apoyo al componente predeterminado en una p??gina. Los datos se devuelven como un objeto de PROPS y se asignan impl??citamente al accesorio del componente de exportaci??n predeterminado en la p??gina.

`getStaticPaths` Similar a getStaticProps, getStaticPathsse usa en generaci??n est??tica pero es diferente en que son las rutas de su p??gina las que son din??micas, no el contenido de su p??gina. Esto se usa a menudo con getStaticPropsporque no devuelve ning??n dato a su componente en s??, sino que devuelve las rutas que deben renderizarse previamente en el momento de la compilaci??n. Con el conocimiento de las rutas, puede continuar para obtener el contenido de la p??gina correspondiente .

- SSG = Static Site Generator

- SSR = Server Side Rendered


## CONSIDERACIONES

- Al usar nextjs AUTOHOSPEDADO se debe configurar `sharp` para optimizar im??genes en un ambiente productivo
  ```bash
    npm install sharp
  ```
  Configuracion para evitar uso esxecivo de memoria
  https://sharp.pixelplumbing.com/install#linux-memory-allocator

## Exportaci??n de HTML est??tico

Este comando permite generar las p??ginas est??ticas del proyecto nextjs.  Estas p??ginas se generan en una carpeta ./out

- Agregar al package.json
```javascript
"scripts": {
  "build": "next build && next export"
}
```
La ejecuci??n npm run buildgenerar?? un outdirectorio.

`next export` construye una versi??n HTML de su aplicaci??n. Durante `next build`, `getStaticPropsy` `getStaticPaths` generar?? un archivo HTML para cada p??gina en su pages directorio (o m??s para rutas din??micas ). Luego, `next export ` copiar?? los archivos ya exportados en el directorio correcto. `getInitialProps` generar?? los archivos HTML durante `next export` en lugar de `next build`.