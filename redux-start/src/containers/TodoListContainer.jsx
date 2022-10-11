import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

// connect()를 실행한 결과가 함수이므로, ()를 한번 더 써줘야 함
const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
