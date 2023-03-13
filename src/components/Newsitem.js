import News from "./News";
import React, { Component } from "react";
import Spinner from "./Spinner";
export class Newsitem extends Component {
  articles = [];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title=`${this.props.category}-NewsFeed`;
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eda35aa5152e4004aa87c3c6eeff9938&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let news = await fetch(url);
    let parseNews = await news.json();
    this.setState({
      articles: parseNews.articles,
      totalResults: parseNews.totalResults,
      loading: false
    })
  }
  handleNclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=eda35aa5152e4004aa87c3c6eeff9938&page=${this.state.page + 1}&${
      this.props.pageSize
    }`;
    this.setState({ loading: true });

    let news = await fetch(url);
    let parseNews = await news.json();

    this.setState({
      page: this.state.page + 1,
      articles: parseNews.articles,
      loading: false
    })
  };
  handlePclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=eda35aa5152e4004aa87c3c6eeff9938&page=${this.state.page - 1}&${
      this.props.pageSize
    }`;
    this.setState({ loading: true });
    let news = await fetch(url);
    let parseNews = await news.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseNews.articles,
      loading: false
    })
  };
  render() {
    return (
      <div>
        <div className="container my-3  ">
          <h1 className=" text-center my-3">NewsFeed Headilines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <News
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishedAt ={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div> 
                );
              })}
          </div>
          </div>
        <div className="container my-3 d-flex justify-content-between">
        <button disabled ={this.state.page <=1} type="button" onClick={this.handlePclick} class="btn btn-dark">&larr; Previous</button>
        <button disabled = {this.state.page +1 > this.state.totalResults/this.props.pageSize} stype="button" onClick={this.handleNclick}class="btn btn-dark">Next &rarr;</button>
        </div>
        </div>
      
      
    );
  }
}

export default Newsitem;
