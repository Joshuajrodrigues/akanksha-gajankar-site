export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    text2?: string;
    image?: Image;
    video?: Video;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type Video = {
    src: string
}
export type SiteConfig = {
    logo?: Image;
    title: string;
    heading: string;
    subtitle?: string;
    description: string;
    image?: Image;

    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Akanksha Gajankar',
    heading: 'HELLO! <br/> I&apos;M AKANKSHA',
    subtitle: '',
    description: '',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },

    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: '',
        text: "I'm a <span class='text-blue-700'> uiux designer </span> passionate about crafting and  <span class='text-blue-700'> exploring experiences </span> that stay with you.",
        text2: "This is a showcase of my <br/> professional and personal work. <br/>I hope you enjoy it.",
        image: {
            src: '',
            alt: ''
        },
        video: {
            src: './maui.webm'
        },
        actions: [
            {
                text: 'Resume'
            },
            {
                text: 'Let\'s talk',
                href: '/contact'
            },
        ],

    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
