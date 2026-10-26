import ReactDOM from 'react-dom/client';

import BoardApp from './board/BoardApp.jsx';
import './tailwind.css';

/*
 * O simulador de investimentos (aula anterior) continua em src/App.jsx,
 * com o CSS em src/index.css. Para visualizá-lo, troque a importação acima por
 * `import App from './App.jsx'` e use `import './index.css'`.
 */
ReactDOM.createRoot(document.getElementById('root')).render(<BoardApp />);
