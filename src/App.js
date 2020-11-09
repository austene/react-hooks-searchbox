import './App.css';

function App() {
  return (
    <div>
      <form>
        <label for='searchbox'>Search</label>
        <input
          type='text'
          id='searchbox'
          name='searchbox'
          value=''
          placeholder='Enter Phrase'
        />
      </form>
    </div>
  );
}

export default App;
