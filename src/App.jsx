import './App.css';
import AddEvent from './component/AddEvent';
import EventList from './component/EventList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='event-app'>
      <EventList />
      <AddEvent />
    </div>
  );
}

export default App;
