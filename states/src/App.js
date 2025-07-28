import logo from './logo.svg';
import './App.css';
import Four from './components/four';
import Six from './components/six';
import Seven from './components/seven';
import Eight from './components/eight';
import Nine from './components/nine';
import Ten from './components/ten';
import Eleven from './components/eleven';
import Twelve from './components/twelve';
import Thirteen from './components/thirteen';
import Fourteen from './components/fourteen';

function App() {
  return (
    <div className='container'>
      <div>
        <h3>1. What is state in React? How is it different from props? </h3>
        <div>State is like a component's memory. It stores information that can change over time, like:

          A counter value

          Whether a button is clicked or not

          Text typed in an input box

          When the state changes, React updates the part of the screen that uses it.
          <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>State</th>
                <th>Props</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stored inside the component</td>
                <td>Passed from outside (parent)</td>
              </tr>
              <tr>
                <td><strong>Can change</strong> (mutable)</td>
                <td><strong>Cannot change</strong> (read-only)</td>
              </tr>
              <tr>
                <td>Used for interactive behavior</td>
                <td>Used to customize child components</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <div>
        <h3>2. Write the syntax of declaring state using the useState() hook. </h3>
        <p>const [stateVariable, setStateFunction] = useState(initialValue);</p>
      </div>
      <div>
        <h3>3. Explain what happens when the state is updated in a React component. </h3>
        <p>When you update the state in a React component (using setState or setCount, etc.), React re-renders the component. That means:

          The state value changes to the new value you gave.

          React re-runs the component's function, using the updated state.

          The UI (User Interface) updates to match the new state.

        </p>
      </div>
      <Four />
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <Eleven />
      <Twelve />
      <Thirteen />
      <Fourteen />
    </div>
  );
}

export default App;
