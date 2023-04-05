import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function App() {
  const { mode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    if (mode) document.body.classList.add('body-dark');
    else document.body.classList.remove('body-dark');
    return () => {
      document.body.classList.remove('body-dark');
    };
  }, [mode]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
