import students from "./data/students";
import render from "./render/students";
import { average } from "./utils";

render(
    students
        .filter(student => student.sex === 'M')
        .filter(student => student.notes.some(note => note >= 10))
        .map(student => ({
            ...student,
            average : average(student.notes)
        }))
);
