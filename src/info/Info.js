import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Varssa",
    lastName: "S",
    initials: "S", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Back End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

        {
            emoji: '🌎',
            text: 'Based in the INDIA'
        },
        {
            emoji: "💼",
            text: "Final year Student"
        },
        {
            emoji: "📧",
            text: "varsapgpcet.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/varsasaravanan",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/varsha3/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am Varsa, final-year student Bachelor of Engineering  specializing in Computer Science and Engineering at PGP College of Engineering and Technology. With a strong foundation in programming, algorithms, and software development, Dharshika has developed skills in [mention specific technologies  [Python,React, Git, GitHub]. Passionate about leveraging technology to solve real-world problems, she continuously expands her technical knowledge and stays current with industry trends to prepare for a career in the tech industry.",
    skills:
        {
            proficientWith: ['python', 'react', 'git', 'github'],
            exposedTo: ['nodejs']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ]
    
}