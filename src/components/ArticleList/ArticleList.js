//Разметка списка статей
import React from "react";
import Article from "../Article";
import "./ArticleList.css";


export default function ArticleList({articles}){
    //Map перебирает элементы массива и выводит li
    const articleElements = articles.map((article, index) =>
        // Добавляем уникальный ключ
        <li key = {article.id} className="article-list__li">
            {/* Передаем свойства, что открыта только первая статья с помощью defaultOpen */}
            <Article article = {article} defaultOpen = {index === 0}/>
        </li>
        )
    return (
        // Выводим список статей
        <ul>
            {articleElements}   
        </ul>
    )
}