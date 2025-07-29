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
import Fifteen from './components/fifteen';
import TwentyTwo from './components/twentytwo';
import TwentyFour from './components/twentyFour';
import Sixteen from './components/sixteen';
import Seventeen from './components/seventeen';
import Eighteen from './components/eighteen';
import Nighteen from './components/nighteen';
import Twenty from './components/twenty';
import Twentyone from './components/twentyone';
import TwentyThird from './components/twentyThird';

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
      <div>
        <h3>5. What is the purpose of the updater function returned by useState()? </h3>
        <p>The updater function is used to change the value stored in the state.Because in React, you should never change the state directly.
          You must use the updater function to tell React to re-render the component with the new state.</p>
        <p>The updater function returned by useState() lets you safely change the state and re-render the component with the updated value.</p>
      </div>
      <Six />
      <Seven />
      <Eight />
      <Nine />
      <Ten />
      <Eleven />
      <Twelve />
      <Thirteen />
      <Fourteen />
      <Fifteen />
      <Sixteen />
      <Seventeen />
      <Eighteen />
      <Nighteen />
      <Twenty />
      <Twentyone />
      <TwentyTwo />
      <TwentyThird />
      <TwentyFour />
    </div>
  );
}

export default App;
