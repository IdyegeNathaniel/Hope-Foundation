import IMG1 from "./Images/IMG 1.jpg"
import IMG2 from "./Images/IMG 2.jpg"
import IMG3 from "./Images/IMG 3.jpg"
import IMG4 from "./Images/IMG 4.jpg"
import IMG5 from "./Images/IMG 5.jpg"
import IMG6 from "./Images/IMG 6.jpg"



// TYPES

interface CardDetsType {
    number: string,
    name: string
}


interface CauseType {
    image: string,
    title: string,
    tag: string
}

interface ImagesType {
    IMG1: string,
    IMG2: string,
    IMG3: string,
    IMG4: string,
    IMG5: string,
    IMG6: string,   
}

//IMAGES
export const images: ImagesType = {
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
}

//CONSTANTS

export const cardDets: CardDetsType[] = [
    {
        number: "15+",
        name: "Countries Visited",
    },
    {
        number: "100+",
        name: "Kids Rehabilitated",
    },
    {
        number: "300",
        name: "Communities Served",
    },
    {
        number: "35+",
        name: "Ongoing Projects",
    }
]

export const CauseItems: CauseType[] = [
    {
        image: IMG1,
        title: "Education for All",
        tag: 'Providing quality education and learning resources to children in underprivileged communities.',
    },
    {
        image: IMG2,
        title: "Healthcare Access",
        tag: 'Ensuring communities have access to essential healthcare services and medical supplies.',
    },
    {
        image: IMG1,
        title: "Clean Water Initiative",
        tag: 'Building wells and water systems to provide clean, safe drinking water to communities.',
    },
    {
        image: IMG2,
        title: "A Home for All",
        tag: 'Providing quality education and learning resources to children in underprivileged communities.',
    }, {
        image: IMG1,
        title: "Education for All",
        tag: 'Providing quality education and learning resources to children in underprivileged communities.',
    },
    {
        image: IMG2,
        title: "Healthcare Access",
        tag: 'Ensuring communities have access to essential healthcare services and medical supplies.',
    },
]