//Разметка статьи
// Для использования классов добавляем компонент из es6
import React, {Component} from "react";


// Перепишем функцию на классы, унаследуем клас Article от базового Component
class Article extends Component {
    // Пишем функцию-конструктор, куда передаем свойства
    // Инициализируем жизненный цикл react-компонента
    constructor (props) {
        super(props)
         // Задаем состояние
         this.state = {
             //Указываем должна ли быть открыта статья по-умолчанию
            isOpen: props.defaultOpen
        }
    }
    //Реализуем метод жизеного цикла, чтобы реагировать на соответствующее событие
    //Ручная проверка на изменение компонентов, Dom-дерево перестраивает только необходимые компоненты
        shouldComponentUpdate(nextProps, nextState){
            return this.state.isOpen !== nextState.isOpen
        }

    //Методы жизненого цикла доступны только для классовых компонентов
        componentWillMount() {
         console.log("-->", "mounting");
        }    
    //Меняем местами первую и последнюю открытые статьи
        componentWillReceiveProps(nextProps) {       
            if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState ({
                isOpen: nextProps.defaultOpen
            })
        }

        componentWillUpdate() {
            console.log("-->", "will update");
        }
    //Единственный обязательный метод, который нужно реализовать Render
    render() {
 //Деструктурируем - распаковываем объекты в кучу переменных 
 const {article} = this.props;
 // Прописываем элементы в переменную, чтобы не перегружать код
 //  Используем состояние, this.state - специальный атрибут вроде this.props
 const body = this.state.isOpen && <section className = "card-text">{article.text}</section>
 //Инлайновый стиль вставляем константой
 const style = {width: "55%"}
 return (
     // Вставим инлайновый стиль 
     <div className = "card mx-auto" style = {style}>
         <div>
            <h2 className = "card-header">
                {article.title} 
            {/* Создадим кнопку для открытия и закрытия статьи и повесим на нее обработчик событий 
            при нажатии на кнопку мы будем менять состояние компонента*/}
            <button onClick = {this.handleClick} className = "btn btn-primary btn-lg float-right">
                {/* Делаем интерактивный текст на кнопке */}
                {this.state.isOpen ? "close" : "open"}
                </button>
            </h2>
         </div>
         <div className = "card-body">
            <h6 className = "card-subtitle text-muted">
                creation date: {(new Date(article.date)).toDateString()}
            </h6>
                {/* Вызываем переменную */} 
                {body}
        </div>
     </div>
 )
    }
// Меняем состояние, прописываем все в эксеприментальном синтаксисе со стрелочными функциями
handleClick = () => { 
    this.setState({
        // Передаем объект в котором задаем новое состояние
        // Отталкиваемся от предыдущего
        isOpen: !this.state.isOpen
    })
}
}
export default Article
