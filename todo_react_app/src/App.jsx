import React, {useState} from "react"
import "./styles.css"
import {InputTodo}from "./components/InputTodo"


export const App = () => {
  const [todoText, setTodoText] = useState("")

  const [incompleteTodo, setIncompleteTodo] = useState([
    "ああああ",
    "いいいい"
  ])

  const [completeTodo, setCompleteTodo] = useState([
    "うううう"
  ])

  const onChangeTodoText = (event) => setTodoText(event.target.value)
  const onClickAdd = () => {
    if (todoText === "") return
    const newTodo = [...incompleteTodo, todoText]
    setIncompleteTodo(newTodo)
    setTodoText("")
  }

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo]
    newTodo.splice(index, 1)
    setIncompleteTodo(newTodo)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo]
    newIncompleteTodo.splice(index, 1)
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]]
    setIncompleteTodo(newIncompleteTodo)
    setCompleteTodo(newCompleteTodo)
  }

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo]
    newCompleteTodo.splice(index, 1)
    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]]
    setCompleteTodo(newCompleteTodo)
    setIncompleteTodo(newIncompleteTodo)
  }

  return (
  <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)} >完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
            )
          })}
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          )
        })}
      </ul>
    </div>
  </>
  )
}