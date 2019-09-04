import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  state = {};
  handleCurrentPage(page) {
    const cu = this.props.currentPage;
    if (cu === page) {
      return "page-item" + " active";
      console.log("page-item" + " active");
    } else return "page-item";
  }
  render() {
    const { itemCount, pageSize } = this.props;
    const pageCount = Math.ceil(itemCount / pageSize);

    const pages = _.range(1, pageCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(m => (
            <li key={m} className={this.handleCurrentPage(m)}>
              <a
                className="page-link"
                onClick={() => this.props.onPageChange(m)}
              >
                {m}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
