
import AboutPage from './components/AboutPage.jsx';
import Header from './components/Header.jsx';

export default function MyApp() {
  return (
    <div>
        <div className="header">
          <Header />
        </div>
        <div className="body">
            <AboutPage />
        </div>
    </div>
  );
}