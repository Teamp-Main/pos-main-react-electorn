import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
container.style.width = '100%';
container.style.height = '100%';

const root = createRoot(container);
root.render(<App />);
