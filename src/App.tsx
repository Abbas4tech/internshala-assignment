import Card from "./components/Card";
import Chart from "./components/Chart";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import { coloumns, shuffledItems, students } from "./model/students.model";

function App() {
  return (
    <main>
      <Header />
      <article className="container h-screen gap-8 p-4 grid grid-rows-[0.5fr,0.5fr] grid-cols-[0.3fr,0.3fr,0.4fr] mx-auto">
        <section className="col-span-3">
          <StudentTable coloums={coloumns} students={students}></StudentTable>
        </section>

        {shuffledItems(students)
          .filter((_, i) => i <= 1)
          .map((_, i) => (
            <section key={i}>
              <Card
                name={_.name}
                dateOfBirth={_.dateOfBirth}
                gender={_.gender}
              />
            </section>
          ))}
        <section>
          <Chart></Chart>
        </section>
      </article>
    </main>
  );
}

export default App;
