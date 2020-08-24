import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/Greet'  //Imported using const hence name should be in {}

import Greet from './components/Greet' //Imported using default hence name doesnt matter only location matters

import ClassComp from './components/ClassComp'

import Hello from './components/jsx'

import Message from './components/Message'

import Counter from './components/Counter'

import FunctionClick from './components/FunctionClick'

import ClassClick from './components/ClassClick'

import EventBind from './components/EventBind'

import ParentComponent from './components/ParentComponent'

import UserGreeting from './components/UserGreeting'

import NameList from './components/NameList'

import Stylesheet from './components/Stylesheet'


import Inline from './components/Inline'

import './appStyles.css'
import styles from "./appStyles.module.css";

import Form from './components/Form'

import LifecycleA from './components/LifecycleA'

// import LifecycleB from './components/LifecycleB'

import FragmentDemo from "./components/FragmentDemo";

import Table from './components/Table'

import ParentComp from "./components/ParentComp";

import RefsDemo from './components/RefsDemo'

import FocusInput from './components/FocusInput';

import FRParentInput from './components/FRParentInput';

import PortalDemo from './components/PortalDemo';

import Hero from './components/Hero';





function App() {
  return (
    <div className="App">
       {/* <Greet/>   */}

      {/* <ClassComp /> */}

      {/* <Hello name="bruce" roll="21"> <p>we can add paras by seperating tag Hello this is called in return rag using props.children. make sure you use children.</p> </Hello>
      <Hello name="john" roll="12"> <button>yeh bhi call ho jayega ek baar prop.children return kiya to in js file</button> </Hello>     
      <Hello name="diana" roll="11"> <p>This Hello components are called by using functional components</p> </Hello> */}



      {/* <ClassComp name="bruce" roll="21"/>
      <ClassComp name="john" roll="12"/>
      <ClassComp name="diana" roll="11"/> */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}

      {/* <ClassClick/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <Stylesheet primary={true}/> */}

      {/* <Inline/> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className= {styles.success}>Success</h1> */}

      {/* <Form/> */}

      {/* <LifecycleA/> */}

      {/* <LifecycleB/> */}

      {/* <FragmentDemo/> */}

      {/* <Table/> */}

      {/* <ParentComp/> */}

      {/* <RefsDemo/> */}

      {/* <FocusInput/> */}

      {/* <FRParentInput/> */}

      {/* <PortalDemo/> */}

      <Hero HeroName= 'batman'/>
      <Hero HeroName= 'superman'/>


    </div>
  );
}

export default App;
