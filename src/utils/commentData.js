const commentData = [
  {
    name: "user001",
    text: "This is awesome!",
    reply: [],
  },
  {
    name: "user002",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe aut consequatur autem vero, obcaecati nobis quaerat dolore officiis eaque!",
    reply: [
      {
        name: "user001",
        text: "This is awesome!",
        reply: [
          {
            name: "user001",
            text: "😊😂🤣👌",
            reply: [
              {
                name: "user001",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, a?",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "user001",
    text: "This is awesome!",
    reply: [
      {
        name: "user001",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, alias. Magnam repellat eius asperiores quis.",
        reply: [],
      },
    ],
  },
  {
    name: "user001",
    text: "This is awesome!",
    reply: [],
  },
  {
    name: "user001",
    text: "This is awesome!",
    reply: [],
  },
  {
    name: "user001",
    text: "This is awesome!",
    reply: [],
  },
];

export default commentData;
