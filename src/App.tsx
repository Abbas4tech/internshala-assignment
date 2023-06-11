import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import { coloumns, students } from "./model/students.model";

function App() {
  return (
    <main>
      <Header />
      <article className="container p-4 mx-auto">
        <StudentTable coloums={coloumns} students={students}></StudentTable>
      </article>
    </main>
  );
}

export default App;
