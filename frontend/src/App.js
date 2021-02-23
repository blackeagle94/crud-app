import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Headers from './components/Headers';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Post from './components/Post';

function App() {
  return (
   <Router>
      <div className="app">
    <Headers />
    <Switch>
      <Route path="/posts" component={Posts}/>
      <Route path="/addPost" component={AddPost}/>
      <Route path="/getpost/:id" component={Post}/>
    </Switch>
    </div>
   </Router>
  );
}

export default App;
