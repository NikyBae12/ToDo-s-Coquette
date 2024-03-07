import './Header.css'

function Header() {
  const date = new Date();
  const day = date.toDateString();

  return (
    <header className='header'>
      <h1>ToDo's Coquette 🎀</h1>
      <h3>{day}</h3>
    </header>
  );
}

export { Header }