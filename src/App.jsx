import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from "react";
import { HomeView } from "./views/HomeView";
import { EditContactView} from "./views/EditContactView";
import { ContactsView } from "./views/ContactsView";
import { AddNewContactView } from "./views/AddNewContactView";



function App() {


  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="/newcontact" element={<AddNewContactView />} />           
            <Route path="/editcontact" element={<EditContactView />} />
            <Route render={() => <h1>Not found!</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
