import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';

import ClickCounter from './Components/ClickCounter';

import HoverCounter from "./Components/HoverCounter";

import Practice2 from './Components/Practice2';

import ClickCounter2 from './Components/clickCounter2';
import HoverCounter2 from './Components/hoverCounter2';
import User from './Components/User';
import Counter from './Components/Counter';

import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <div className="App">
      
      {/* <ErrorBoundary><Hero heroName = "batman"></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroName = "superman"></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroName = "joker"></Hero></ErrorBoundary> */}

      {/* <ClickCounter/>

      <HoverCounter/> */}

      {/* <Practice2 name='heloo'/> */}

      {/* <ClickCounter2/>
      <HoverCounter2/>
      <User render={(isLoggedIn) => isLoggedIn? "hello" : "guest"}/> */}
      
      {/* <Counter
         render = {(count, incrementCount) => (
        <ClickCounter2 count = {count} incrementCount={incrementCount}/>
         )}
      />
      <Counter
          render={(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount}/>
          )}
      /> */}

      {/* we can write above code as using <></> for counter but then we have to call children in Counter:
      <Counter>
        {(count, incrementCount) => (
        <ClickCounter2 count = {count} incrementCount={incrementCount}/>
         )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount}/>
          )}
      </Counter> */}

      <UserProvider value="helloo">
        <ComponentC/>
      </UserProvider>

    </div>
  );
}

export default App;
