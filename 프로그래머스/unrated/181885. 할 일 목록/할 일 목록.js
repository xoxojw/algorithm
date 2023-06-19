function solution(todo_list, finished) {
    return todo_list.filter((v, i) => !finished[i] ? v : "")
}