import { render, screen } from '@testing-library/react';
import OutlinedCard from '../layouts/Cards';
import PopUp from '../layouts/Popup';
import AdminDashboard from '../pages/Persistant';

// require('dotenv').config()
// const bcrypt = require('bcrypt');

// console.log(bcrypt.compareSync('123456', pswrd));
// test('checks password encription', async ()=>{
//     await const pswrd = bcrypt.hashSync(process.env.REACT_APP_DEFAULT_PASSWORD, 9);
//     const pwd = "Password123"
//     expect(bcrypt.compareSync(pwd, pswrd)).toBe(true)
// })

// to check card
test('renders a card and checks', () => {
  render(<OutlinedCard name={"Vinojith"} />);
  const textElement = screen.getByText("Vinojith");
  expect(textElement).toBeInTheDocument();
});


//to check card outcomes
// test('renders learn react link', () => {
//     render(<OutlinedCard num={5} />);
//     const textElement = screen.getByText("5 Doctors");
//     expect(textElement).toBeInTheDocument();
//   });
// test('renders ', () => {
//     render(<PopUp option = {1} opener={true} closer={()=>{}} DefaultOption={()=>{}} />);
//     const textElement = screen.getByText("Add Consultant");
//     expect(textElement).toContainHTML("p") ;
//   })


//to check admin dashboard redering
// test('renders learn react link', () => {
//     render(<AdminDashboard />);
//     const textElement = screen.getByText("MENU");
//     expect(textElement).toBeInTheDocument();
//   });
  

  // to check admin dashboard
  // test('renders learn react link', () => {
  //   render(<AdminDashboard />);
  //   const textElement = screen.getByText("Settings");
  //   expect(textElement).toBeInTheDocument();
  // });
  


