import './App.css';

 // Remove duplicate "Router" import


import Button from './Button';
import List from './componets/starwars/List';
import Hellow from './componets/Hellow';
import Posts from './componets/railsposts/Posts';

function App() {


  return (
    <>
      <div className="main">
        <h1>ここはAPPの場所</h1>
        <Hellow />

        <Button color="red" msg="ログイン" width="500px" />
        <Button color="blue" msg="会員登録" width="300px" />
        <input type="text" />

        <div className="posts">
          <List />
          <Posts />
        </div>

     
      </div>
    </>
  );
}

export default App;
