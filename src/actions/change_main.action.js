import Axios from "axios";
import { CHANGE, GRAB } from "./constants";

export function change_main(data) {
  return {
    type: CHANGE,
    payload: data
  };
}

export function grab_data() {
  const request = Axios.get("/api/v0/sample");
  return {
    type: GRAB,
    payload: request
  };
}
