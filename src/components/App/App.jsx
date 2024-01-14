import React from 'react';
import Header from '../Header/Header';
import FamousSection from '../FamousSection/FamousSection';
import './App.css';
import { getPeople } from '../peopleApi/peoopleApi';

function App() {

//  let [famousPeopleArray, setPeopleArray] = useState([]);
//   const refershPeople = () => {
//   const peoplePromise = getPeople();
//   peoplePromise

//   .then((response) => { 
//     console.log(response.data)
//     setPeopleArray(response.data);
//   })
//   .catch((error) => {
//     console.log('this sucks you are wrong', error)
//   });
//   };

  return (
    <div className="App">
    <Header />
    <FamousSection />
    {/* 
      The list shouldn't go here.
      The list goes inside of the FamousSection Component
    */}
  </div>
  );
}

export default App;
