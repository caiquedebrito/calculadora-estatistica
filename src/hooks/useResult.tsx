import { ResultContext } from "@/Contexts/ResultContext";
import { useContext } from "react";

export function useResult() {
  return useContext(ResultContext)
}