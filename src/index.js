import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from './03_state/Lesson.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Syntax without JSX
// React.createElement('div', null, 'Simple div with text');
// React.createElement('input', { className: 'just-class' });

ReactDOM.render(<Lesson />, document.getElementById('root'));
registerServiceWorker();
