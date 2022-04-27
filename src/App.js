import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MainLayout } from './components';
import { BlogPage, HomePage } from './pages';
import './App.scss'


function App() {
  return (
    <BrowserRouter>
     <MainLayout>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/blog' element={<BlogPage/>}/>
       </Routes>
     </MainLayout>
    </BrowserRouter>
  );
}

export default App;
