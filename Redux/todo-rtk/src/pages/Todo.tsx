import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-xl font-semibold py-10">
        Todo Application
      </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
