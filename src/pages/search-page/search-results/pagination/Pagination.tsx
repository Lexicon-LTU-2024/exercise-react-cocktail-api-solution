import "./Pagination.css";

import { ReactElement } from "react";
import { Button } from "../../../../components";

interface IPaginationProps {
  back: () => void;
  currentPage: number;
  next: () => void;
  pages: number;
}

export function Pagination(props: IPaginationProps): ReactElement {
  return (
    <div className="pagination">
      <Button className="back" onClick={props.back}>
        Page {props.currentPage - 1}
      </Button>
      <p className="current-page">
        {props.currentPage}/{props.pages}
      </p>
      <Button className="forward" onClick={props.next}>
        Page {props.currentPage + 1}
      </Button>
    </div>
  );
}
