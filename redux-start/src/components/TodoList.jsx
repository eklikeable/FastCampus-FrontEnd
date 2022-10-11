// todos를 받아서 보여주기만 하는 컴포넌트 : presentational component
export default function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo) => {
                return <li>{todo.text}</li>;
            })}
        </ul>
    );
}
