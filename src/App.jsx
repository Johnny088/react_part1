import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* <button onClick={() => setActive(1)}>hello</button> */}
      <button onClick={() => setActive(1)}>About city</button>
      <button onClick={() => setActive(2)}>Favorite book</button>
      <button onClick={() => setActive(3)}>Favorite movie</button>
      <button onClick={() => setActive(4)}>Private Information</button>

      {active === 1 && (
        <div>
          <h1>Dnipro region</h1>
          <p>
            Dnipro, city, south-central Ukraine.. It lies along the Dnieper
            River, near its confluence with the Samara. The river was
            considerably widened by the construction of a dam about 50 miles (80
            km) downstream. Founded in 1783 as Katerynoslav on the river’s north
            bank, the settlement was moved to its present site on the south bank
            in 1786. The community was known as Novorosiysk from 1796 to 1802,
            when its old name was restored and it became a provincial centre.
            Despite the bridging of the Dnieper in 1796 and the growth of trade
            in the early 19th century, Katerynoslav remained small until
            industrialization began in the 1880s, when railways were built to
            Odessa, the Donets Basin, and Moscow. In 1926 the Soviets renamed it
            Dnipropetrovsk after the Dnieper and Ukrainian communist official
            Grigory Petrovsky. In an effort to shed the geographical legacy of
            the Soviet era, the Ukrainian government launched a
            “decommunization” initiative in 2016 that led to the renaming of
            more than 900 towns and cities. Dnipropetrovsk was by far the
            largest city to be so affected, and in May 2016 its name was
            officially shortened to Dnipro. Although Dnipro was initially spared
            during the Russian invasion of Ukraine in 2022, the city was
            subjected to missile strikes as Russia expanded its attacks on
            population centres and other nonmilitary targets.
          </p>
          <img
            src="https://visitukraine.today/media/blog/previews/9Uuc09Hh93rg0y3bMKvYMdacM5j8YsPF6sgEdcVM.webp"
            alt="there can be your ads"
          />
        </div>
      )}
      {active === 2 && (
        <div>
          <h1>Favorite book</h1>
          <img
            src="https://imgv2-2-f.scribdassets.com/img/word_document/443031553/original/595596dc47/1590909673?v=1"
            alt=""
          />
          <p>
            This book is by far the best I've ever read. It makes you think
            deeply about your life, and gives energy to grow up.
          </p>
          <ul>
            <li>Author: George S. Clason</li>
            <li>Pages: 136</li>
            <li>Review date: January 1, 1926</li>
            <li>Finance/Self-Help</li>
          </ul>
        </div>
      )}
      {active === 3 && (
        <div>
          <h1>Favorite movie</h1>
          <h2>Out cold</h2>
          <ul className="movie">
            <li>Director: Geoffrey Scott</li>
            <li>Year: 2001</li>
            <li>Studio: Touchstone Pictures</li>
            <li>Genre: Comedy</li>
            <li>
              Cast: Jason London, Zach Galifianakis, A.J. Cook, Willie Garson
            </li>
            <li>
              Description: A group of laid-back snowboarders at a resort in
              Alaska get into wild antics and hilariously fight to save their
              mountain lifestyle when outsiders try to change everything.
            </li>
            <li>
              <img
                src="https://pics.filmaffinity.com/out_cold-437780375-large.jpg"
                alt="Out Cold"
              />
            </li>
          </ul>
        </div>
      )}
      {active === 4 && (
        <div>
          <h1>Info</h1>
          <img src="./images/test1.jpeg" alt="avatar" />
          <ul>
            <li>Name: Johnny</li>
            <li>Mnemonic</li>
            <li>Johnny@proton.me</li>
            <li>Kepler-438 b</li>
            <li>expierence: 10 years</li>
            <li>Skills: can work, can not work</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
