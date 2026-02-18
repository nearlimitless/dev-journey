
import AboutPage from './components/AboutPage.jsx';
import Header from './components/Header.jsx';
import MyLinks from './components/MyLinks.jsx';
import Draggable from 'react-draggable';

export default function MyApp() {
  return (
    <Draggable>
    <div>          
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <AboutPage />      
        </div>
    </div>
    </Draggable>
  );
}