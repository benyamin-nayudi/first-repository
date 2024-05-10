import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import EmailForm from './email/EmailForm';



// // function App() {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route exact path="/" component={Home} />
// //         <Route path="/Blogs" component={Blogs} />
// //         <Route path="/contact" component={CNew} />
// //       </Switch>
// //     </Router>
// //   );
// // }

function App() {
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} /> {/* Home without Layout */}
          <Route>
            <Layout> {/* All other routes with Layout */}
              <Switch>
                <Route path="/Blogs" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/email" component={EmailForm} />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
    );
  }
  
  export default App;

