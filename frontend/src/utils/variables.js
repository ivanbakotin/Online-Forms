import CheckboxCreate from "../components/createTypes/CheckboxType";
import ParagraphCreate from "../components/createTypes/ParagraphType";
import LineCreate from "../components/createTypes/LineType";
import RadioCreate from "../components/createTypes/RadioType";

import CheckboxSolve from "../components/solveTypes/CheckboxType";
import ParagraphSolve from "../components/solveTypes/ParagraphType";
import LineSolve from "../components/solveTypes/LineType";
import RadioSolve from "../components/solveTypes/RadioType";

export const componentsCreate = {
  Paragraph: ParagraphCreate,
  Checkbox: CheckboxCreate,
  Line: LineCreate,
  Radio: RadioCreate,
};

export const componentsSolve = {
  Paragraph: ParagraphSolve,
  Checkbox: CheckboxSolve,
  Line: LineSolve,
  Radio: RadioSolve,
};

export const types = ["Checkbox", "Paragraph", "Line", "Radio"];
