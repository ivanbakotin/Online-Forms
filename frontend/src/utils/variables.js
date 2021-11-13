import CheckboxCreate from "../components/createTypes/CheckboxType"
import ParagraphCreate from "../components/createTypes/ParagraphType"
import LineCreate from "../components/createTypes/LineType"

import CheckboxSolve from "../components/solveTypes/CheckboxType"
import ParagraphSolve from "../components/solveTypes/ParagraphType"
import LineSolve from "../components/solveTypes/LineType"

export const types = ["Checkbox", "Paragraph", "Line", "Radio", "Date"];

export const componentsCreate = {
    Paragraph: ParagraphCreate,
    Checkbox: CheckboxCreate,
    Line: LineCreate,
}

export const componentsSolve = {
    Paragraph: CheckboxSolve,
    Checkbox: ParagraphSolve,
    Line: LineSolve,
}
