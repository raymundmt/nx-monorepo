import { DatePicker } from "antd";
import React from "react";

export interface InputDateTimeProps { }

export function InputDateTime(props: InputDateTimeProps) {
  return <>
    <DatePicker />
  </>;
}

export default InputDateTime;
