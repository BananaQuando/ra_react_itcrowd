import React from 'react';
import './css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from 'pages/LoginPage';
import ContentPage from 'pages/ContentPage';
import PrivateRoute from 'components/PrivateRoute';
import IUserStore from 'stores/UserStore';
import { inject, observer } from 'mobx-react';

interface Props {
  userStore?: IUserStore,
}

@inject("userStore")
@observer
class App extends React.Component<Props>{


  render(){
    return (
      <Router>
        <Switch>
          <Route path="/login" exact >
            <LoginPage />
          </Route>
          <PrivateRoute path="/" component={ContentPage} />
        </Switch>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" exact >
//           <LoginPage />
//         </Route>
//         <PrivateRoute path="/" >
//           <ContentPage />
//         </PrivateRoute>
//       </Switch>
//     </Router>
//   );
// }

export default App;
