import Content from './Components/Content';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { TodoProvider } from './contexts/ToDoContext';
import './index.css';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
