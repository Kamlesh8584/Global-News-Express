import React, { Component } from 'react';
import NewsItems from './NewsItem';

export class News extends Component {
  render() {
    return (
      <div>This is News Component
      <NewsItems/>

      </div>
    );
  }
}
export default News