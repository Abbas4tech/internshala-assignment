export const students = [
  {
    name: "MS Dhoni",
    dateOfBirth: "2022-01-01",
    gender: "male",
  },
  {
    name: "Preeti Singh",
    dateOfBirth: "2022-02-03",
    gender: "female",
  },
  {
    name: "Ramesh Narayan",
    dateOfBirth: "2023-01-01",
    gender: "male",
  },
  {
    name: "Anushka Shetty",
    dateOfBirth: "2021-02-03",
    gender: "female",
  },
  {
    name: "KL Rahul",
    dateOfBirth: "2022-01-01",
    gender: "male",
  },
  {
    name: "Reena Roy",
    dateOfBirth: "2023-02-03",
    gender: "female",
  },
  {
    name: "MS Dhoni",
    dateOfBirth: "2022-01-01",
    gender: "male",
  },
  {
    name: "Preeti Singh",
    dateOfBirth: "2022-02-03",
    gender: "female",
  },
  {
    name: "Ramesh Narayan",
    dateOfBirth: "2023-01-01",
    gender: "male",
  },
  {
    name: "Anushka Shetty",
    dateOfBirth: "2021-02-03",
    gender: "female",
  },
  {
    name: "KL Rahul",
    dateOfBirth: "2022-01-01",
    gender: "male",
  },
  {
    name: "Reena Roy",
    dateOfBirth: "2023-02-03",
    gender: "female",
  },
];

export const coloumns: string[] = ["No.", "Name", "Date of Birth", "Gender"];

export const shuffledItems = <T>(data: T[]): T[] =>
  data
    .map((e) => ({ e, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ e }) => e);
