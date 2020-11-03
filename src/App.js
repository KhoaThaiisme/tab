import TabHeader from './components/index.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {
      selected: false,
      title: "tab 1",
      content: "content 1"
    },
    {
      selected: false,
      title: "tab 2",
      content: "content 2"
    },
    {
      selected: false,
      title: "tab 3",
      content: "content 3"
    }
  ])

  const handleClick = (clickedindex) => {
    tabs.map((tab, i) => {
      let t = tab;
      if (clickedindex === i) {
        t.selected = true;
      }
      else {
        t.selected = false;
      }
      setTabs([...tabs.slice(0, i),
        t,
      ].concat(tabs.slice(i + 1)))
    })
  }

  return (
    <div className="App">
      {
        tabs.map((tab, i) => {
          return <TabHeader selected={tab.selected} index={i} title={tab.title} Click={handleClick} />
        })
      }
      {
        tabs.map((tab, i) => {
          if (tab.selected) {
            return <p>{tab.content}</p>
          }
        })
      }
    </div>
  );
}

export default App;
