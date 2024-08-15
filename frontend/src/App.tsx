
import EditorPage from './page/EditorPage';
import Home from './page/Home';
import Journals from './page/Journals';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import ProfilePage from './page/ProfilePage';
import EntriesPage from './page/EntriesPage';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                 
               <Route path="/login" element={<Login/>}/>
               <Route path="/" element={<EditorPage/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/journals" element={<Journals/>}/>
               <Route path="/profile" element={<ProfilePage/>}/>
               <Route path="/entries" element={<EntriesPage/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;