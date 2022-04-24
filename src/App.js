import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MainLayout } from './components';
import { HomePage } from './pages';
import './App.scss'


function App() {
  return (
    <BrowserRouter>
     <MainLayout>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
       </Routes>
     </MainLayout>
    </BrowserRouter>
  );
}

export default App;
