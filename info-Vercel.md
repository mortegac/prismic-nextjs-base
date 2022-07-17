

## TOKEN - VERCEL

`github_actions: qPJGRerHIG3hUNPduSDSVTLo`


## DEPLOY 

DOC CLI: https://vercel.com/docs/cli

```bash

// Deploy
vercel deploy --prebuilt

// 
vercel > deployment-url.txt

// 
vercel --debug

//
vercel --force

```

## Token
The --token option, shorthand -t, can be used to execute Vercel CLI commands with an authorization token.
Usage example

```bash
vercel --token iZJb2oftmY4ab12HBzyBXMkp
```

## Confirm
The `--confirm` option can be used to skip questions you are asked when setting up a new project. The questions will be answered with the provided defaults, inferred from vercel.json and the folder name.
Usage example

```bash
vercel --confirm
```