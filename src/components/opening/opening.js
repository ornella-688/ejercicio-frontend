import React, { Component } from 'react';
import ItemArticle from '../item-article/item-article';
import './opening.css';

// Change focal-left / focal-right classes to modify alignment

class Opening extends React.Component {
    render() {
        return (
            <section className="opening focal-right">
                <div className="opening__layout">
                    <div className="row">
                        <div className="col-md">
                            <ItemArticle />
                        </div>
                        <div className="col-sm">
                            <ItemArticle />
                            <ItemArticle />
                        </div>
                    </div>
                    <div className="row-grid">
                        <ItemArticle />
                        <ItemArticle />
                        <div className="item-article-especial">
                            <ItemArticle />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default Opening;
