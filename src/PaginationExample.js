import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import logo from "./jf.png";

export default class PaginationExample extends React.Component {
  state = {
    page: 0,
    pages: 10
  };

  componentDidMount() {
    let pageNo = Number(this.props.match.params.pageNo) || 0;
    this.setState({
      page: pageNo
    });
  }

  pageChange = (newPage, e) => {
    e && e.preventDefault();
    this.setState({ page: newPage });
    this.props.history.push(`/page/${newPage}`);
    console.log(`/page/${newPage}`);
  };

  render() {
    const { page, pages } = this.state;
    return (
      <>
        <Row>
          <Col lg="12" className="pt-5 my-3">
            <a href="https://www.journeyfurther.com/">
              <img src={logo} alt="journey further" height="50" />
            </a>
            <h1>React Pagination - Technical SEO Best Practice</h1>
          </Col>
        </Row>
        <Row className="h-50">
          <Col lg="6">
            <Card className="example my-3 h-40 w-100">
              <Card.Header id="good">SEO Friendly</Card.Header>
              <Card.Body>
                <p>
                  Uses crawlable links with href attribute and preventDefault
                </p>
                {page > 0 && <p>{`Page number: ${page}`}</p>}

                <ul className="pagination">
                  {page === 0 &&
                    [...Array(3)].map((val, index) => [
                      <li className="page-item">
                        <a
                          key={index}
                          className="page-link"
                          onClick={e => this.pageChange(index + 1, e)}
                          href={`/page/${index + 1}`}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ])}
                  {page > 1 && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page - 1, e)}
                        href={`/page/${page - 1}`}
                      >
                        Previous
                      </a>
                    </li>
                  )}
                  {page === pages && pages > 2 && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page - 2, e)}
                        href={`/page/${page - 2}`}
                      >
                        {page - 2}
                      </a>
                    </li>
                  )}
                  {page > 1 && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page - 1, e)}
                        href={`/page/${page - 1}`}
                      >
                        {page - 1}
                      </a>
                    </li>
                  )}
                  {page > 0 && (
                    <li className="page-item active">
                      <a href className="page-link">
                        {page}
                      </a>
                    </li>
                  )}
                  {page > 0 && page < pages && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page + 1, e)}
                        href={`/page/${page + 1}`}
                      >
                        {page + 1}
                      </a>
                    </li>
                  )}
                  {page === 1 && pages > 2 && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page + 2, e)}
                        href={`/page/${page + 2}`}
                      >
                        {page + 2}
                      </a>
                    </li>
                  )}
                  {page === 1 && pages > 3 && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page + 3, e)}
                        href={`/page/${page + 3}`}
                      >
                        {page + 3}
                      </a>
                    </li>
                  )}
                  {page < pages && (
                    <li className="page-item">
                      <a
                        className="page-link"
                        onClick={e => this.pageChange(page + 1, e)}
                        href={`/page/${page + 1}`}
                      >
                        Next
                      </a>
                    </li>
                  )}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="example my-3 w-100">
              <Card.Header id="bad">Not SEO Friendly</Card.Header>
              <Card.Body>
                <p>Uses buttons which can't be crawled</p>
                {page > 0 && <p>{`Page number: ${page}`}</p>}
                <ul className="pagination">
                  {page === 0 &&
                    [...Array(3)].map((val, index) => [
                      <li className="page-item">
                        <button
                          key={index}
                          className="page-link"
                          onClick={e => this.pageChange(index + 1, e)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ])}
                  {page > 1 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page - 1, e)}
                      >
                        Previous
                      </button>
                    </li>
                  )}
                  {page === pages && pages > 2 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page - 2, e)}
                      >
                        {page - 2}
                      </button>
                    </li>
                  )}
                  {page > 1 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page - 1, e)}
                      >
                        {page - 1}
                      </button>
                    </li>
                  )}
                  {page > 0 && (
                    <li className="page-item active">
                      <button href className="page-link">
                        {page}
                      </button>
                    </li>
                  )}
                  {page > 0 && page < pages && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page + 1, e)}
                      >
                        {page + 1}
                      </button>
                    </li>
                  )}
                  {page === 1 && pages > 2 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page + 2, e)}
                      >
                        {page + 2}
                      </button>
                    </li>
                  )}
                  {page === 1 && pages > 3 && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page + 3, e)}
                      >
                        {page + 3}
                      </button>
                    </li>
                  )}
                  {page < pages && (
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={e => this.pageChange(page + 1, e)}
                      >
                        Next
                      </button>
                    </li>
                  )}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
