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
(Regeneración estática incremental)
`getStaticPropses` un hermano getStaticPaths y se utiliza en generación estática. Es una función asíncrona en la que puede obtener datos externos y devolverlos como apoyo al componente predeterminado en una página. Los datos se devuelven como un objeto de PROPS y se asignan implícitamente al accesorio del componente de exportación predeterminado en la página.

`getStaticPaths` Similar a getStaticProps, getStaticPathsse usa en generación estática pero es diferente en que son las rutas de su página las que son dinámicas, no el contenido de su página. Esto se usa a menudo con getStaticPropsporque no devuelve ningún dato a su componente en sí, sino que devuelve las rutas que deben renderizarse previamente en el momento de la compilación. Con el conocimiento de las rutas, puede continuar para obtener el contenido de la página correspondiente .

- SSG = Static Site Generator

- SSR = Server Side Rendered


## CONSIDERACIONES

- Al usar nextjs AUTOHOSPEDADO se debe configurar `sharp` para optimizar imágenes en un ambiente productivo
  ```bash
    npm install sharp
  ```
  Configuracion para evitar uso esxecivo de memoria
  https://sharp.pixelplumbing.com/install#linux-memory-allocator

## Exportación de HTML estático

Este comando permite generar las páginas estáticas del proyecto nextjs.  Estas páginas se generan en una carpeta ./out

- Agregar al package.json
```javascript
"scripts": {
  "build": "next build && next export"
}
```
La ejecución npm run buildgenerará un outdirectorio.

`next export` construye una versión HTML de su aplicación. Durante `next build`, `getStaticPropsy` `getStaticPaths` generará un archivo HTML para cada página en su pages directorio (o más para rutas dinámicas ). Luego, `next export ` copiará los archivos ya exportados en el directorio correcto. `getInitialProps` generará los archivos HTML durante `next export` en lugar de `next build`.


## Regeneración estática incremental
Next.js le permite crear o actualizar páginas estáticas después de haber creado su sitio. La regeneración estática incremental (ISR) le permite usar la generación estática por página, sin necesidad de reconstruir todo el sitio . Con ISR, puede conservar los beneficios de la estática mientras escala a millones de páginas.

Para usar ISR, agregue el revalidateaccesorio a getStaticProps:


