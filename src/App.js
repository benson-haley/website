import './App.scss';

import { usePage } from './components/PageContext';

import Tie from './components/Tie';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  const { page } = usePage();

  return (
    <div className="app">
      <Tie clipContent={page}></Tie>
      <Main/>
      <Sidebar/>
    </div>
  );
}

export default App;
