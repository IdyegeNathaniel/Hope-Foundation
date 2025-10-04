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


interface BlogType {
    title: string,
    image: string,
    tag: string,   
    timeframe: string,
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
        name: "Kids Rehabilitaed",
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

export const blogStories: BlogType[] = [
    {
        title: "Compassion in action: How You Can Make a Difference",
        image: IMG6,
        tag: "Jessica Sigha",
        timeframe: "Feb 2024 . 3 mins read",
    },
    {
        title: "From Local to Global: The Ripple Effects of Charity",
        image: IMG6,
        tag: "Jessica Sigha",
        timeframe: "Feb 2024 . 3 mins read",
    },
    {
        title: "Giving is Receiving: The Mutual Benefits of Giving",
        image: IMG6,
        tag: "Jessica Sigha",
        timeframe: "Feb 2024 . 3 mins read",
    },
    {
        title: "Unlocking Generosity: The Impact of Your Contribution",
        image: IMG6,
        tag: "Jessica Sigha",
        timeframe: "Feb 2024 . 3 mins read",
    },
    
    {
        title: "Charity Starts Here: Simplr Ways to Get Invovlved",
        image: IMG6,
        tag: "Jessica Sigha",
        timeframe: "Feb 2024 . 3 mins read",
    },
    
    {
        title: "Join the Movement: Together We Can Make a Difference",
        image: IMG6,
        tag: "Jessica Sigha",
        timeframe: "Feb 2024 . 3 mins read",
    },
]