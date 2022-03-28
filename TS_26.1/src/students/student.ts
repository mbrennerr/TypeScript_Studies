export enum Module {
	fundamentos,
	front,
	back,
	CS,
}
type Student = {
	name: string;
	age: number;
	module: Module;
};

const students: Student[] = [];

export const addStudent = (student: Student) => students.push(student);

export const getStudents = (): Student[] => students;
//poderia retornar o => [..students], pra certificar que ninguém poderia elterar os valores iniciais;

// export const printStudent = (student: string) => {
//   if (typeof student === 'string') {
//     console.log(student.toUpperCase());
//   } else {
//     console.log(student);
//   }
// };

// export const sayHello = (students: string[] | string) => {
//   if (Array.isArray(students)) {
//     students.forEach((student) => console.log(`Hello ${student}`));
//   } else {
//     console.log(`Hello ${students}`);
//   }
// };
