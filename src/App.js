import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import AkonOrgInnov from "./pages/AkonOrgInnov/AkonOrgInnov";
import Contact from "./pages/Contact/Contact";
import ContractParty from "./pages/ContractParty/ContractParty";
import ContractSigning from "./pages/ContractSigning/ContractSigning";
import CoverDiscosure from "./pages/CoverDiscosure/CoverDiscosure";
import HomePage from "./pages/HomePage/HomePage";
import NovelPromo from "./pages/NovelPromo/NovelPromo";
import PublishWithUs from "./pages/PublishWithUs/PublishWithUs";
import Ourwriters from "./pages/Ourwriters/Ourwriters";
import TVInterview from "./pages/TVInterview/TVInterview";
import OurServices from "./pages/OurServices/OurServices";
import Marketing from "./pages/Marketing/Marketing";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="nav-bar-divider" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/من-نحن" component={About} />
          <Route exact path="/كت-اب-الدار" component={Ourwriters} />
          <Route exact path="/الاتصال" component={Contact} />
          <Route exact path="/لحظة-توقيع-العقد" component={ContractSigning} />
          <Route exact path="/برومو-روايات" component={NovelPromo} />
          <Route exact path="/حفل-توقيع" component={ContractParty} />
          <Route exact path="/انشر-معنا" component={PublishWithUs} />
          <Route exact path="/مقابلات-تلفزيونية" component={TVInterview} />
          <Route exact path="/اعلان-عن-اغلفة" component={CoverDiscosure} />
          <Route exact path="/خدماتنا-المميزة" component={OurServices} />
          <Route exact path="/دعاية-و-تسويق" component={Marketing} />
          <Route exact path="/مؤسسة-اكون-للابداع" component={AkonOrgInnov} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
