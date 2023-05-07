import Component from "../core/Component.js";
import { store } from "../store/index.js";

const renderTodoCount = (todos) => {
    const count = todos && todos.length;
    return '총 <strong>' + count + '</strong> 개';
}
export default class TodoCount extends Component {
    initState() { return {}; }
    mounted() {
        // 컴포넌트가 마운트된 후에 동작한다.
    }
    template() {
        const { todos } = store.getState();
        return `
            <span class="todo-count">
                ${renderTodoCount(todos)}
            </span>
                <ul class="filters">
                    <li>
                        <a href="#" class="all selected">전체보기</a>
                    </li>
                    <li>
                        <a href="#active" class="active">해야할 일</a>
                    </li>
                    <li>
                        <a href="#completed" class="completed">완료한 일</a>
                    </li>
                </ul>
            <button class="clear-completed">모두 삭제</button>
        `;
    }

    setEvent() {

    }
}