import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import ReduxContext from './contexts/ReduxContext';
// import { addTodo, completeTodo, showComplete } from './redux/actions';

//store에 변경사항이 생기는것을 구독 (unsubscribe하는 함수가 리턴됨)
// store.subscribe(() => {
//     console.log(store.getState());
// });
// store.dispatch(addTodo('coding'));
// store.dispatch(addTodo('reding books'));
// store.dispatch(addTodo('eat dinner'));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ReduxContext.Provider value={store}>
            <App />
        </ReduxContext.Provider>
    </React.StrictMode>
);
