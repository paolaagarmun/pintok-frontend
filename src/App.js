import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import AddCategoryView from './views/AddCategoryView'
import SingleCategoryView from './views/SingleCategoryView';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/addCategory" element={<AddCategoryView/>}/>
        <Route path="/singleCategoryView" element={<SingleCategoryView/>}/>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
