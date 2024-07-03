import "./App.css";

function App() {
  return (
    <main>
      <h1>To do list</h1>

      <div className="input-container">
        <input type="text" />
        <button>+</button>
      </div>
      <div className="container">
        <div className="todo">
          <p>Go to the school</p>
          <div className="actions">
            <input type="checkbox" name="checkbox" id="todocheck " />
              <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
