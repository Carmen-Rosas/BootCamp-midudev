import './App.css';
import Mensaje from './Mensaje';

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message= "Estamos trabajando" />
      <Mensaje color="yellow" message= "en un curso" />
      <Mensaje color="green" message= "de React" />
    </div>
  )
}

export default App;
