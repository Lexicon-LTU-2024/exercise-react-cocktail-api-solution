import "./SearchInput.css";
import { HTMLInputTypeAttribute, ReactElement, useState } from "react";

interface ISearchInputProps {
  name?: string;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  updateValue: (newValue: string) => void;
  value: string;
}

export function SearchInput(props: ISearchInputProps): ReactElement {
  return (
    <div id="search-input">
      <input
        className="input"
        name={props.name}
        onChange={(e) => props.updateValue(e.target.value)}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
      />
    </div>
  );
}
