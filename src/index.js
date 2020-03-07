//импортируем основные библиотеки
import React from 'react';
import ReactDOM from 'react-dom';
//импортируем основной компонент
import App from './components/app'

//загружаем компонент в index.html в элемент c id:root
ReactDOM.render(<App />, document.getElementById('root'));
