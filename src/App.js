import Home from './components/Home/Home';
import Login from './components/Home/Login';
import Register from './components/Home/Register';
import NewArticle from './components/page/newArticle';
import UserProfile from './components/page/userProfile';
import EditProfile from './components/page/editProfile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Header & footer/Footer';
import DetailArticle from './components/page/detailArticle'
function App () {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/newArticle' element={<NewArticle />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/article/:slug' element={<DetailArticle />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App
