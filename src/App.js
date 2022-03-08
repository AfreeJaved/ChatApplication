// import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';

// import './App.css';

//  const App = () => {
//      return (
//          <ChatEngine 
//             height="100vh"
//             projectID="8fe1ac76-e08b-4d9d-9dbc-e0d4d2a79ca0"
//             userName="AfreeJaved"
//             userSecret="1234"
//             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//          />
//      );
//  };

//  export default App;

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '8fe1ac76-e08b-4d9d-9dbc-e0d4d2a79ca0';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;