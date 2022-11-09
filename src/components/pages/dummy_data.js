import { pink, purple, teal, amber, deepOrange } from "@mui/material/colors";

export const appointments = [
    {
        id: 0,
        title: "Watercolor Landscape",
        roomId: 1,
        members: [1],
        startDate: new Date(2022, 9, 1, 9, 30),
        endDate: new Date(2022, 9, 1, 11),
        rRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10",
    },
    {
        id: 1,
        title: "Oil Painting for Beginners",
        roomId: 2,
        members: [2],
        startDate: new Date(2022, 9, 1, 9, 30),
        endDate: new Date(2022, 9, 1, 11),
        rRule: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10",
    },
    {
        id: 2,
        title: "Testing",
        roomId: 3,
        members: [3],
        startDate: new Date(2022, 9, 1, 12, 0),
        endDate: new Date(2022, 9, 1, 13, 0),
        rRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
    },
    {
        id: 3,
        title: "Meeting of Instructors",
        roomId: 4,
        members: [4, 1],
        startDate: new Date(2022, 9, 1, 9, 0),
        endDate: new Date(2022, 9, 1, 9, 15),
        rRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20220601",
    },
    {
        id: 4,
        title: "Recruiting students",
        roomId: 5,
        members: [3, 4, 5],
        startDate: new Date(2022, 9, 26, 10, 0),
        endDate: new Date(2022, 9, 26, 11, 0),
        rRule: "FREQ=YEARLY;BYWEEKNO=23",
        exDate: "20220611T100000",
    },
    {
        id: 5,
        title: "Final exams",
        roomId: 3,
        members: [2, 3],
        startDate: new Date(2022, 9, 26, 12, 0),
        endDate: new Date(2022, 9, 26, 13, 35),
        rRule: "FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR",
    },
    {
        id: 6,
        title: "Monthly Planning",
        roomId: 4,
        members: [1, 3],
        startDate: new Date(2022, 9, 26, 14, 30),
        endDate: new Date(2022, 9, 26, 15, 45),
        rRule: "FREQ=MONTHLY;BYMONTHDAY=27;COUNT=1",
    },
    {
        id: 7,
        title: "Open Day",
        roomId: 5,
        members: [1, 3, 5],
        startDate: new Date(2022, 9, 1, 9, 30),
        endDate: new Date(2022, 9, 1, 13),
        rRule: "FREQ=YEARLY;BYYEARDAY=148",
    },
];

export const doctordetais = [
    {
        text: "Andrew Glover",
        id: 1,
        color: "#7E57C2",
    },
    {
        text: "Arnie Schwartz",
        id: 2,
        color: "#FF7043",
    },
    {
        text: "John Heart",
        id: 3,
        color: "#E91E63",
    },
    {
        text: "Taylor Riley",
        id: 4,
        color: "#E91E63",
    },
    {
        text: "Brad Farkus",
        id: 5,
        color: "#AB47BC",
    },
    {
        text: "Arthur Miller",
        id: 6,
        color: "#FFA726",
    },
];

export const resourcesData = [
    {
        text: "Room 101",
        id: 1,
        color: amber,
    },
    {
        text: "Room 102",
        id: 2,
        color: pink,
    },
    {
        text: "Room 103",
        id: 3,
        color: purple,
    },
    {
        text: "Meeting room",
        id: 4,
        color: deepOrange,
    },
    {
        text: "Conference hall",
        id: 5,
        color: teal,
    },
];
