import { MessageType } from "../../../common/types/chat.type";

const messages: MessageType[] = [
    {
        id: "1",
        content: "Hello world",
        parentId: null,
        type: "text",
        user: {
            id: "1",
            username: "Minh Hieu",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        content: "xin chao",
        parentId: null,
        type: "text",
        user: {
            id: "2",
            username: "Minh Anh",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        content: "Hello world again!",
        parentId: null,
        type: "text",
        user: {
            id: "1",
            username: "Minh Hieu",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "4",
        content: `    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        nulla et beatae ipsa explicabo quo optio asperiores. Ipsum inventore
        ratione in dicta, alias minus laudantium dolore quibusdam aliquam
        similique omnis nobis! Deserunt quidem tempore, harum accusantium
        nostrum dolor, asperiores, veniam ullam impedit dicta doloremque
        perspiciatis quo! Inventore recusandae exercitationem odit hic sunt
        aliquid non voluptate voluptatum illum iusto, sequi blanditiis magni
        officia. Obcaecati blanditiis laudantium, molestias dolorum maxime
        quod eius excepturi numquam aperiam mollitia repellat, recusandae
        sequi sit error illo nostrum provident quo aspernatur culpa libero
        quae non autem aliquid! Dicta eveniet illum ullam adipisci ratione,
        aspernatur nisi nostrum non?`,
        parentId: null,
        type: "text",
        user: {
            id: "2",
            username: "Minh Anh",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "5",
        content: "What's your name ?",
        parentId: null,
        type: "text",
        user: {
            id: "1",
            username: "Minh Hieu",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "6",
        content: "..........",
        parentId: null,
        type: "text",
        user: {
            id: "2",
            username: "Minh Anh",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "7",
        content: "Hello hi",
        parentId: null,
        type: "text",
        user: {
            id: "2",
            username: "Minh Anh",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "8",
        content: "Hello hi",
        parentId: null,
        type: "text",
        user: {
            id: "2",
            username: "Minh Anh",
            avatar: "/avatar.png",
        },
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export default messages;
