# PRISEE - Frontend

## Naming conventions

- Use PascalCase for components and component's filenames. (`PrimaryButton`, `Button.js`)
- Use camelCase for variables, function names, folder names and non component
  file names. (`const myVariable = 'hello'`, `components/`, `jsonParser.js`)

## Folder Structure

```text
my-react-app/
│
├── public/                  (Public assets)
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       ├── components/  (Component-specific styles)
│   │       └── main.scss    (Main styles)
│   │
│   ├── components/           (Reusable UI components)
│   │   ├── Button/
│   │   ├── Header/
│   │   └── ...
│   │
│   ├── pages/                (Top-level page components)
│   │   ├── Home/
│   │   ├── About/
│   │   └── ...
│   │
│   ├── services/             (API services, utilities)
│   │   ├── api.js
│   │   └── ...
│   │
│   ├── context/              (React context providers)
│   │   ├── AuthContext.js
│   │   └── ...
│   │
│   ├── hooks/                (Custom hooks)
│   │   ├── useFetch.js
│   │   └── ...
│   │
│   ├── utils/                (Helper functions)
│   │   ├── formatDate.js
│   │   └── ...
│   │
│   ├── App.js                (Main component)
│   ├── index.js              (Entry point)
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...

```
