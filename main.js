// Debugging in VSCode works if I comment the following line out
import './style.css';
// The reason may be that Vite alters the import and removes the leading dot from
// the path. The files are not identical any more. Are source maps needed for this?

const foo = 123;

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
