import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import AddCategoryView from './views/AddCategoryView'
import SingleCategoryView from './views/SingleCategoryView';
import AddVideoView from './views/AddVideoView';
import LoginView from './views/LoginView';
import SignupView from './views/SignupView';
import AuthRoute from './components/AuthRoute';
import EditCategoryView from './views/EditCategoryView';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/login" element={<LoginView/>}/>
        <Route path="/signup" element={<SignupView/>}/>
        <Route path="/singleCategoryView/:id" element={<SingleCategoryView/>}/>
        <Route element={<AuthRoute/>}>
          <Route path="/addCategory" element={<AddCategoryView/>}/>
          <Route path="/addVideo/:id" element={<AddVideoView/>}/>
          <Route path="/editCategory/:id" element={<EditCategoryView/>} />
        </Route>
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;
