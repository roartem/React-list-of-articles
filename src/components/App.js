//Основная разметка
import React, {Component} from "react";
import ArticleList from "./ArticleList/ArticleList";
//Информация передаваемая в article
import articles  from "../fixtures";
//Импортируем css из bootstrap
import "bootstrap/dist/css/bootstrap.css";


//Меняем функцию на класс, чтобы можно было менять его состояние
//Например менять местами статьи
class App extends Component {
    //Экспериментальный синтаксис
    state = {
        reverted:false
    }
    render() {
        return (
            // Применяем стили из bootstrap
            <div className = "container">
                <div className = "jumbotron">
                    <h2 className = "display-3" >
                        List of articles
                        {/* Добавим кнопку, по которой будем менять состояние */}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.revert}>Revert</button>
                    </h2>
                </div>
                {/* Вызываем Article и передаем пары ключ/значение */}
                {/* Меняем открытые статьи первую и последнюю, создаем новый массив статей, который будм переворачивать */}
                <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }
    // Меняем состояние, прописываем все в эксеприментальном синтаксисе со стрелочными функциями
    revert =() => this.setState({
        // Передаем объект в котором задаем новое состояние
        // Отталкиваемся от предыдущего 
        reverted: !this.state.reverted
    })
}

export default App 

