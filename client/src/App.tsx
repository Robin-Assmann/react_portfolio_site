import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import { SECTIONS } from './constants/index';

function App() {
  return (
    <>
<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-neutral-600 selection:text-neutral-200 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,150,198,0.3),rgba(255,255,255,0))] min-h-screen relative px-4 md:px-60">
        {/* Side Navigation */}
        <SideNav />

        {/* Main Content */}
        <div>
          <NavBar />
          {SECTIONS.map(({ id, component: Component }) => (
            <section id={id} key={id}>
              <Component />
            </section>
          ))}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
