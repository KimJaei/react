import {useState} from "react";
import './Todo.css';
function Header(props) {
    return (
        <header className="todotitle"><h2>To-Do List</h2></header>
    );
}

function Article(props) {
    return (
        <article>
            <form onSubmit={event => {
                event.preventDefault();
                const content = event.target.content.value;
                props.onCreate(content);
            }
            }>
                <input type="text" name="content"/>
                <input type="submit" value="추가"/>
            </form>

        </article>
    );
}

function Todo() {

    return (
        <div>
            <Header></Header>
            <Article onCreate={(_content) => {
                const newList = {content : _content};

            }}></Article>
        </div>
    )

}

export default Todo;