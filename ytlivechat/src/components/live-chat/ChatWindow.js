import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

// const data = [
//   {
//     id: 0,
//     name: "Surya",
//     photo: "https://avatars.githubusercontent.com/u/155764762?v=4",
//     message: "Wonderful videos enjoying your session",
//   },
// ];

const CHAT_MESSAGE_LIMIT = 50;

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

function generateRandomNames() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [newResponse, setNewResponse] = useState();

  const fetchData = () => {
    const data = [
      {
        name: generateRandomNames(),
        photo: "https://avatars.githubusercontent.com/u/155764762?v=4",
        message: "Wonderful videos  - enjoying your session a lot",
      },
    ];

    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGE_LIMIT);
      return newMessageList;
    });
  };

  useEffect(() => {
    const s = setInterval(fetchData, 1000);

    //cleanup
    return () => {
      clearInterval(s);
    };
  }, []);

  const AddMessageToTheList = () => {
    if (newResponse) {
      setMessages((messages) => {
        let newMessageList = [
          {
            name: generateRandomNames(),
            photo: "https://avatars.githubusercontent.com/u/155764762?v=4",
            message: newResponse,
          },
          ...messages,
        ];
        newMessageList = newMessageList.splice(0, CHAT_MESSAGE_LIMIT);
        return newMessageList;
      });
      setNewResponse("");
    }
  };

  return (
    <div className="border border-black">
      <div className="flex w-full h-[600px] overflow-y-scroll flex-col-reverse">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
      <div className="m-3">
        <input
          type="text"
          value={newResponse}
          className="p-1 border border-black w-2/3"
          onChange={(e) => setNewResponse(e.target.value)}
        />
        <button
          className="bg-blue-500 px-2 py-1 mx-1 rounded text-white"
          onClick={AddMessageToTheList}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
