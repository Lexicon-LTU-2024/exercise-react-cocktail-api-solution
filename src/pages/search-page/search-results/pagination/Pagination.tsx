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
      {props.currentPage > 1 && (
        <Button className="back" onClick={props.back}>
          Back
        </Button>
      )}
      <p className="current-page">
        {props.currentPage}/{props.pages}
      </p>
      {props.currentPage !== props.pages && (
        <Button className="forward" onClick={props.next}>
          Next
        </Button>
      )}
    </div>
  );
}
