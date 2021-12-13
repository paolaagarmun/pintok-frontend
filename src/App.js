import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import AddCategoryView from './views/AddCategoryView'
import SingleCategoryView from './views/SingleCategoryView';
import AddVideoView from './views/AddVideoView';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/addCategory" element={<AddCategoryView/>}/>
        <Route path="/singleCategoryView/:id" element={<SingleCategoryView/>}/>
        <Route path="/addVideo/:id" element={<AddVideoView/>}/>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
