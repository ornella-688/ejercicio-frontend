import React, { Component } from 'react';
import './item-article.css';

class ItemArticle extends React.Component {
  render() {
    return (
      <article className="item-article">
        <div className="item-article__media">
          <a href="#">
            <picture className="item-article__media--image">
              <img src="img/01.jpg" alt="image"/>
            </picture>
            <span>En vivo</span>
          </a>
        </div>
        <div className="item-article__text">
          <a href="#">
            <h1 className="item-article__text--title"><em>Lorem ipsum</em>Dolor sit amet consectetur
                adipiscing imperdiet vivamus felis augue himenaeos condimentum integer</h1>
              <p className="item-article__text--subtitle">Dictumst quam ante pellentesque turpis semper
                iaculis sodales taciti imperdiet litora, netus metus lectus mollis in lobortis magna
                morbi felis, cubilia volutpat habitant gravida pharetra ultricies mauris congue dis.
                Neque fusce at primis risus eros platea hendrerit</p>
              <span className="item-article__text--credit">Por Lana Diamante</span>
              <span className="item-article__text--date">20 de abril de 2020</span>
            </a>
        </div>
      </article>
    );
  }
}

export default ItemArticle;
