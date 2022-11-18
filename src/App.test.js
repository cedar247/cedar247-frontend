import { render, screen } from '@testing-library/react';
import App from './App';
import AddConsultant from './components/layouts/AddConsultant';
import AddDoctor from './components/layouts/AddDoctor';
import { LandingPage } from './components/pages/LandingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("cedar247");
  expect(linkElement).toBeInTheDocument();
});

test('renders landing page', () => {
  render(<LandingPage/>);
  const linkElement = screen.getByText("cedar247");
  expect(linkElement).toBeInTheDocument();
});

// test('renders Consultant popup', () => {
//   render(<AddConsultant/>);
//   const linkElement = screen.getByText("ADD");
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders Consultant popup', () => {
//   render(<AddConsultant title = "Add Consultant"/>);
//   const linkElement = screen.getByText("Add Consultant");
//   expect(linkElement).toBeInTheDocument();
// });

test('renders Doctor Popup', () => {
  render(<AddDoctor title = "Add Doctor"/>);
  const linkElement = screen.getByText("Add Doctor");
  expect(linkElement).toBeInTheDocument();
});
