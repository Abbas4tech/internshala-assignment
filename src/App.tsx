import Card from "./components/Card";
import Chart from "./components/Chart";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import { coloumns, shuffledItems, students } from "./model/students.model";

function App() {
  return (
    <main>
      <Header />
      <article className="container w-full gap-8 py-4 p-4 md:px-12 lg:px-16 grid lg:grid-rows-[0.5fr,0.5fr] grid-cols-1 grid-rows-[1fr,0.3fr,0.3fr,0.3fr] lg:grid-cols-[1.4fr,1fr,1fr] mx-auto mt-4">
        <section className="lg:col-span-3 w-full h-full">
          <StudentTable coloums={coloumns} students={students}></StudentTable>
        </section>
        <section>
          <Chart></Chart>
        </section>
        {shuffledItems(students)
          .filter((_, i) => i <= 1)
          .map((_, i) => (
            <section className="w-full h-full" key={i}>
              <Card
                name={_.name}
                dateOfBirth={_.dateOfBirth}
                gender={_.gender}
              />
            </section>
          ))}
      </article>
    </main>
  );
}

export default App;
