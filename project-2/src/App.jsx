import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader'
import Nav from './components/Navigation/Nav'

function App() {

  return (
    <div>
      <Nav />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
