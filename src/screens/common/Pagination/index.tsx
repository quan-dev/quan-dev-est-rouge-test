import React from "react";

import { Button, Container } from "./styles";

type Props = {
  currentPage: number;
  onPrevious: Function;
  onNext: Function;
  onChangePage: Function;
};
const Pagination: React.FC<Props> = ({
  currentPage,
  onPrevious,
  onNext,
  onChangePage,
}) => {
  return (
    <Container>
      <nav aria-label="...">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Button
              className="page-link"
              tabIndex={-1}
              aria-disabled="true"
              onClick={() => onPrevious(currentPage - 1)}
            >
              Previous
            </Button>
          </li>
          {currentPage !== 1 && (
            <li className="page-item">
              <Button
                className="page-link"
                onClick={() => onChangePage(currentPage - 1)}
              >
                {currentPage - 1}
              </Button>
            </li>
          )}
          <li className="page-item active" aria-current="page">
            <Button className="page-link">{currentPage}</Button>
          </li>
          <li className="page-item">
            <Button
              className="page-link"
              onClick={() => onChangePage(currentPage + 1)}
            >
              {currentPage + 1}
            </Button>
          </li>
          <li className="page-item">
            <Button
              className="page-link"
              onClick={() => onNext(currentPage + 1)}
            >
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
