import { ReactNode } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export interface Community {
    name: string;
    img: string;
}

export interface PolicyLink {
    name: string;
    url: string;
}

export interface Tier {
    name: string;
    description: string[];
    image: string;
}

export interface TechStackItem {
    name: string;
    img: string;
}

export interface SocialLink {
    icon: ReactNode;
    name?: string;
    url: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    social: SocialLink[];
    bio: string;
}

export interface TeamMembers {
    leadership: TeamMember[];
    coreTeam: TeamMember[];
    supportTeam: TeamMember[];
}

interface Partner {
    name: string;
    img: string;
}

export const socialLinks: SocialLink[] = [
    // { icon: <FaDiscord />, name: "Discord", url: "#" },
    { icon: <FaLinkedin />, name: "Linkedin", url: "https://www.linkedin.com/company/innovatex-coders/" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://x.com/InnovateX8158" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/innovatex_main/" },
    { icon: <FaFacebook />, name: "Facebook", url: "https://www.facebook.com/profile.php?id=61574101536875" }
];

export const policyLinks: PolicyLink[] = [
    { name: "Code of Conduct", url: "#" },
    { name: "Community Guidelines", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" }
];

export const partners: Partner[] = [
    { name: "Technique Polytechnic Institute (TPI)", img: "or07poavtUuSN2T0sC01BqPyW7p3Zz9Lbjakrgxnvdhi20MQ" },
    { name: "Academy of Technology (AOT)", img: "or07poavtUuSTLqUUWwhPJIxte3pqad2L0wy64cBVriW1QMn" },
    { name: "National Institute of Technology Durgapur", img: "or07poavtUuSmSSCixhQWPqGBKui27bJUenZ3cHEOgpQY1tj" },
    { name: "Indian Institute of Technology Delhi (IITD)", img: "or07poavtUuSxvDr5pUzBhL8EyfKpm09ACvZRFrTwI32qaMS" },
    { name: "Hooghly Engineering & Technology College (HETC)", img: "or07poavtUuS1BtFyIHWsecTkKxOqYDry8Cli9tZ1JVP7FmS" },
    { name: "MCKV Institute of Engineering", img: "or07poavtUuSTn1hv1whPJIxte3pqad2L0wy64cBVriW1QMn" },
    { name: "Swami Vivekananda University (SVU)", img: "or07poavtUuS6ZgTV7jmO9QKv5tqplnZbudNaWCDSHTxL3Ak" },
    { name: "Ideal Institute Of Engineering", img: "or07poavtUuS95G4tH5gdZbul84TexfO0Er1V7nq6csD9wSy" },
    { name: "Institute of Engineering and Management (IEM)", img: "or07poavtUuSyVZWJyrRIsNHYfWkTKj0mVQEd4hGaDAMw2oz" },
    { name: "Swami Vivekananda Institute of Science & Technology (SVIST)", img: "or07poavtUuScpSzlTXYp8lVByOuqsZNihr315mfwtM0nPST" },
    { name: "Jalpaiguri Government Engineering College (JGEC)", img: "or07poavtUuSZ9FZIzVS2gpAMR0EsbTYWX6JdB8jPxiwqvma" },
    { name: "Kalyani Government Engineering College (KGEC)", img: "or07poavtUuSn9sjEMd0cpY9zDhgSZHWkvK8eQfC3TFEsMwa" },
    { name: "Kalinga Institute of Industrial Technology (KIIT)", img: "or07poavtUuSBF9QBk3TrRGtQwM0gYklX3DNxZden1cP68Cq" },
    { name: "JIS College of Engineering Kalyani", img: "or07poavtUuSo8gb0zvtUuSm0jhpDZRLoJKB2vfTMw6dyCaY" },
    { name: "Seacom Engineering College (SEACOM)", img: "or07poavtUuS6f0txBjmO9QKv5tqplnZbudNaWCDSHTxL3Ak" },
    { name: "Techno India College of Technology International", img: "or07poavtUuSyVh7FHTRIsNHYfWkTKj0mVQEd4hGaDAMw2oz" },
    { name: "University of Engineering & Management (UEM)", img: "or07poavtUuSN3RRz51BqPyW7p3Zz9Lbjakrgxnvdhi20MQ5" },
    { name: "Sri Jagadguru Chandrasekaranathaswamiji Institute of Technology", img: "or07poavtUuSbLWlxruUFRNpu6iywhZJakgfOWqY9vo0CTnr" },
    { name: "Jadavpur University (JU)", img: "or07poavtUuSEVTQKQSXO3w2dgZLSC4W8kxP7nDisQoy9Iba" },
    { name: "Greater Noida Institute of Technology (GNIOT)", img: "or07poavtUuSUE6aTgnMDkSix8JypzPKh0gm69jFWX32eqAQ" },
    { name: "Narula Institute of Technology (NIT)", img: "or07poavtUuSin2Himx2Hgdbph0GIAl97ksFXT4jLOWxrQKq" },
    { name: "Heritage Institute of Technology (HIT)", img: "or07poavtUuS8IMvPmHILm36hjusFaJfd7ARvbcHXkwYq9go" },
    { name: "B. P. Poddar Institute of Management & Technology", img: "or07poavtUuSck3i0rYp8lVByOuqsZNihr315mfwtM0nPSTb" },
    { name: "iU International University of Applied Sciences", img: "or07poavtUuS3GHW25rFdpekfAWO5JYj1ETgHPMrxwnhzKoQ" },
    { name: "Effat University Saudi Arabia", img: "or07poavtUuScpWmy6EYp8lVByOuqsZNihr315mfwtM0nPST" },
    { name: "St. Joseph's University Bangalore", img: "or07poavtUuS0HcDRBzAwiuAKJaOmSnY9dTqMv4j0eIXkHgN" },
    { name: "Université PSL", img: "or07poavtUuS6YEcpNcjmO9QKv5tqplnZbudNaWCDSHTxL3A" },
    { name: "Modern Institute of Engineering & Technology (MIET)", img: "or07poavtUuSYUQLkNMRyGYjPUBWgEI2LqAVpXTrf5FbCtdu" }
];

export const techStack: TechStackItem[] = [
    { name: 'React', img: 'or07poavtUuS2uWA8NBb6ov5KJTIFQLEUSY1lx039XfDadNV' },
    { name: 'GCP', img: 'or07poavtUuSA612iPs8tarEUqGVQDh4KJmBTcS0Oey5glLP' },
    { name: 'Next', img: 'or07poavtUuSEdC8EFSXO3w2dgZLSC4W8kxP7nDisQoy9Iba' },
    { name: 'Docker', img: 'or07poavtUuSVPfLi6VJSYBqhosJ3IMHrFgDpZR4ljC58Wn0' },
    { name: 'NodeJS', img: 'or07poavtUuS0TcIv2AwiuAKJaOmSnY9dTqMv4j0eIXkHgNV' },
    { name: 'Firebase', img: 'or07poavtUuSmhBC6WQWPqGBKui27bJUenZ3cHEOgpQY1tjv' },
    { name: 'AWS', img: 'or07poavtUuSefEHpkKLyiGlw8A14E0FaR7MVqzfDhudoTXx' },
    { name: 'Git', img: 'or07poavtUuSiJkrsXx2Hgdbph0GIAl97ksFXT4jLOWxrQKq' },
    { name: 'GitHub', img: 'or07poavtUuSio4YC1Mx2Hgdbph0GIAl97ksFXT4jLOWxrQK' }
];

export const communities: Community[] = [
    { name: "GDG Kolkata", img: "or07poavtUuSw23skSFg1LMDfRTaiVOBk7ZE5HpvCusShN4W" },
    { name: "GDG DevFest Kolkata", img: "or07poavtUuSVP8IkYHJSYBqhosJ3IMHrFgDpZR4ljC58Wn0" },
    { name: "Resourcio Community", img: "or07poavtUuS8ik90pHILm36hjusFaJfd7ARvbcHXkwYq9go" },
    { name: "Hack4Bengal", img: "or07poavtUuSNfbRls1BqPyW7p3Zz9Lbjakrgxnvdhi20MQ5" },
    { name: "Apertre 2.0", img: "or07poavtUuSEG2hdSXO3w2dgZLSC4W8kxP7nDisQoy9IbaH" },
    { name: "GDG On Campus AOT", img: "or07poavtUuSjMEWEa6cQYv4UIA5w3ThaGy29e1mVPXSOs6N" },
    { name: "SCCSE IEI CHAPTER AOT", img: "or07poavtUuSigf667x2Hgdbph0GIAl97ksFXT4jLOWxrQKq" },
    { name: "GDG on campus JIS", img: "or07poavtUuSN2BAnXw1BqPyW7p3Zz9Lbjakrgxnvdhi20MQ" },
    { name: "Postman Kolkata", img: "or07poavtUuSijKjMbx2Hgdbph0GIAl97ksFXT4jLOWxrQKq" },
    { name: "The Innovator's Garage", img: "or07poavtUuSVzVC9PJSYBqhosJ3IMHrFgDpZR4ljC58Wn0A" }
];

export const companies: Community[] = [
    { name: "Tata Consultancy Services(TCS)", img: "or07poavtUuS06nU2AwiuAKJaOmSnY9dTqMv4j0eIXkHgNVb" },
    { name: "Amazon India", img: "or07poavtUuS0ddvJuAwiuAKJaOmSnY9dTqMv4j0eIXkHgNV" },
    { name: "Vedam India", img: "or07poavtUuSiqgMJUx2Hgdbph0GIAl97ksFXT4jLOWxrQKq" },
    { name: "Coding Ninjas", img: "or07poavtUuSc7kFGHYp8lVByOuqsZNihr315mfwtM0nPSTb" },
    { name: "Infosys", img: "or07poavtUuSbw8Q1vuUFRNpu6iywhZJakgfOWqY9vo0CTnr" },
    { name: "TransUnion CIBIL", img: "or07poavtUuSv75Osc3qYPZgjuhsNkzxMVdJeoCr3GIHcB5U" },
    { name: "Quantum Brize", img: "or07poavtUuSz1petZoqgpRFv8AM4TQrfZ5Bt3jhweDWilSU" },
    { name: "SigiloTech", img: "or07poavtUuSmJ4ZXzQWPqGBKui27bJUenZ3cHEOgpQY1tjv" },
    { name: "RootNik Labs", img: "or07poavtUuSA6pTX358tarEUqGVQDh4KJmBTcS0Oey5glLP" }
];

export const tiers: Tier[] = [
    {
        name: "Free Workshops",
        description: [
            "Get access to fully free, hands-on workshops designed for beginners and intermediate learners.",
            "Topics include Cybersecurity, AI/ML, GitHub & Open Source, Cloud Computing, and more.",
            "Learn from experienced mentors and industry professionals who guide you through real-world applications.",
            "Improve your resume with certifications and practical knowledge.",
            "No prior experience required — just your curiosity and passion for learning!"
        ],
        image: "or07poavtUuSHAzNuF6cYuFzfnxOvmJDpeILslVNEPk4Bhyi"
    },
    {
        name: "Tech Sessions",
        description: [
            "Dive deep into the world of technology with our regular expert-led tech sessions.",
            "Explore the latest tools, frameworks, and industry trends across various domains.",
            "Sessions include live coding, walkthroughs of real-life projects, and Q&A rounds.",
            "Gain insights on career paths, job preparation, and project building strategies.",
            "A perfect platform to get mentorship, clear your doubts, and grow your tech confidence."
        ],
        image: "or07poavtUuSCE49e67IVfpjF4NvTemsbR8nudW0o6DXJkhy"
    },
    {
        name: "Amazing Tech Events & Swags",
        description: [
            "Join thrilling tech events including hackathons, coding contests, tech quizzes, and innovation challenges.",
            "Showcase your skills, build awesome projects, and win exciting prizes and recognition.",
            "Participate in project expos, developer talks, and panel discussions with tech leaders.",
            "Expand your network by collaborating with fellow developers, designers, and creators.",
            "Boost your portfolio and confidence by presenting your ideas to the community."
        ],
        image: "or07poavtUuSmPg8OAQWPqGBKui27bJUenZ3cHEOgpQY1tjv"
    }
];

export const teamMembers: TeamMembers = {
    leadership: [
        {
            name: "Dhrubojyoti Chakraborty",
            role: "Convenor @InnovateX",
            image: "or07poavtUuScTsPXnYp8lVByOuqsZNihr315mfwtM0nPSTb",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/i_am_dhrubojyoti_chakraborty/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dhrubojyoti-chakraborty-567857257/" },
                { icon: <FaGithub />, url: "https://github.com/Dhrubojyot/" }
            ],
            bio: "Trust the timing of your journey, God's plan is always greater than our own."
        },
        {
            name: "Jit Sarkar",
            role: "Co-Convenor @InnovateX",
            image: "or07poavtUuSVZPWYBJSYBqhosJ3IMHrFgDpZR4ljC58Wn0A",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/_________.jitu___________/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jit-sarkar-a597b6271/" },
                { icon: <FaFacebook />, url: "https://www.facebook.com/jit.sarakara.704839" }
            ],
            bio: "Beauty attracts the eye, but personality captures the heart."
        }
    ],
    coreTeam: [
        {
            name: "Sk Mirajul Islam",
            role: "Organizer & Tech Lead @InnovateX",
            image: "or07poavtUuSAuqWAA8tarEUqGVQDh4KJmBTcS0Oey5glLPd",
            social: [
                { icon: <FaTwitter />, url: "https://x.com/SkMirajulI5686" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sk-mirajul-islam-876438261/" },
                { icon: <FaGithub />, url: "https://github.com/skmirajulislam" }
            ],
            bio: "A man who is master of patience is a master of everything."
        },
        {
            name: "Arnab Das",
            role: "Organizer @InnovateX",
            image: "or07poavtUuSvTCesN3qYPZgjuhsNkzxMVdJeoCr3GIHcB5U",
            social: [
                { icon: <FaTwitter />, url: "https://x.com/ArnabCoding" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/arnab-das-42204b265/" },
                { icon: <FaGithub />, url: "https://github.com/Arnabdas123456" }
            ],
            bio: "Great people became famous by making the best use of their time."
        },
        {
            name: "Souramoy Shee",
            role: "Organizer & Backend Lead @InnovateX",
            image: "or07poavtUuSgN19aFOqEjbc4PzBJD3R7nH5e6mNyLQwrWgK",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/soura_shee/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/souramoy-shee-16656123a/" },
                { icon: <FaGithub />, url: "https://github.com/Souramoy" }
            ],
            bio: "The best time to learn coding was yesterday. The next best time is now."
        },
        {
            name: "Sk Sahil",
            role: "Organizer & Finance Lead @InnovateX",
            image: "or07poavtUuSHZyIfA6cYuFzfnxOvmJDpeILslVNEPk4Bhyi",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/web_developer_sahil/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/programmer-sahil/" },
                { icon: <FaGithub />, url: "https://github.com/programmer-sahil" }
            ],
            bio: "Embrace, innovate, impact with tech and finance."
        },
        {
            name: "Anindya Adhikari",
            role: "Organizer & CIFS Lead @InnovateX",
            image: "or07poavtUuSXq2S7wiyWqHPjo6CvNSQZAOcB4JYpn8MGITk",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/anindya_adhikari11/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/anindya-adhikari-55aa89239/" },
                { icon: <FaFacebook />, url: "https://www.facebook.com/share/14JDqLah58H/" }
            ],
            bio: "Try harder....!"
        },
        {
            name: "Arijit Kumar Roy",
            role: "Organizer @InnovateX",
            image: "or07poavtUuSN2FcVrN1BqPyW7p3Zz9Lbjakrgxnvdhi20MQ",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/arijit_k_r0y/" },
                { icon: <FaLinkedin />, url: "https://in.linkedin.com/in/arijit-kumar-roy" },
                { icon: <FaGithub />, url: "https://github.com/arijitkroy" }
            ],
            bio: "Embrace the Challenge, Conquer the Goal."
        },
        {
            name: "Sukanta Chowdhury",
            role: "Organizer @InnovateX",
            image: "or07poavtUuS4eHuMH7PAopu1cVa8RQ5YSkIXqCWsfOU9EdL",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/hustlewithsukanta/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sukantachowdhury/" },
                { icon: <FaGithub />, url: "http://github.com/sukanta-chowdhury" }
            ],
            bio: "All power is within you, You can do anything and everything."
        },
        {
            name: "Rupsa Adhikary",
            role: "Organizer & UI/UX Designer @InnovateX",
            image: "or07poavtUuSmsXEYYQWPqGBKui27bJUenZ3cHEOgpQY1tjv",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/_r_a_ii__/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rupsa-adhikary-358024286/" },
                { icon: <FaGithub />, url: "https://github.com/Rupsa004" }
            ],
            bio: "The mind is everything, what you think, you become."
        },
        {
            name: "Yashaswini K M",
            role: "Organizer @InnovateX",
            image: "or07poavtUuSihklRtx2Hgdbph0GIAl97ksFXT4jLOWxrQKq",
            social: [
                { icon: <FaTwitter />, url: "#" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yashaswini-k-m-98382a225/" },
                { icon: <FaGithub />, url: "https://github.com/Yashaswinikm1" }
            ],
            bio: "It is never too late to be what you might have been."
        },
        {
            name: "Rupanjana Sanyal",
            role: "Organizer @InnovateX",
            image: "or07poavtUuSETzNEPSXO3w2dgZLSC4W8kxP7nDisQoy9Iba",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/c_nn04/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rupanjana-sanyal-88288334a/" },
                { icon: <FaGithub />, url: "#" }
            ],
            bio: "Connector who builds meaningful relationships within our community."
        },
    ],
    supportTeam: [
        {
            name: "Adreeraj Das",
            role: "Admin & Designer @InnovateX",
            image: "or07poavtUuSEsurdfSXO3w2dgZLSC4W8kxP7nDisQoy9Iba",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/addreeraj" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/adreerajdas" },
                { icon: <FaGithub />, url: "https://github.com/adreerajdas" }
            ],
            bio: "Code with logic, design with passion, and innovate without limits."
        },
        {
            name: "Sayan Das",
            role: "Admin & Designer @InnovateX",
            image: "or07poavtUuSJ9a6yB4EM6K8tCnb7BSVyZUATjIORG4pYNmu",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/sayandas.neel/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sayan-das-5937b3343/" },
                { icon: <FaGithub />, url: "#" }
            ],
            bio: "The power of concentration is the only key to the treasure-house of knowledge."
        },
        {
            name: "Sayak Bhattacharyya",
            role: "Admin & Tech Associate @InnovateX",
            image: "or07poavtUuSJU8lBS4EM6K8tCnb7BSVyZUATjIORG4pYNmu",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/_.i_am_an_extra._/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sayak-bhattacharyya-abb785310/" },
                { icon: <FaGithub />, url: "https://github.com/Coding-enthu" }
            ],
            bio: "The power of concentration is the only key to the treasure-house of knowledge."
        },
        {
            name: "Biswasrita Hazra",
            role: "Admin & Designer @InnovateX",
            image: "or07poavtUuSjMQ507scQYv4UIA5w3ThaGy29e1mVPXSOs6N",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/_imbiswasri0507_/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/biswasrita-hazra-947570349/" },
                { icon: <FaGithub />, url: "https://github.com/Biswasrita" }
            ],
            bio: "Eager to create user-friendly and impactful web applications."
        },
        {
            name: "Bhumi Prasad",
            role: "Admin & Designer @InnovateX",
            image: "or07poavtUuSmte3wDQWPqGBKui27bJUenZ3cHEOgpQY1tjv",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/bhumiprasad14/" },
                { icon: <FaLinkedin />, url: "#" },
                { icon: <FaGithub />, url: "#" }
            ],
            bio: "Opportunities don't happen,you create them."
        },
        {
            name: "Srijan Paul",
            role: "Admin & Design Lead @InnovateX",
            image: "or07poavtUuS6y300WjmO9QKv5tqplnZbudNaWCDSHTxL3Ak",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/iampaulsrijan/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/srijan-paul-547354260/" },
                { icon: <FaGithub />, url: "https://github.com/paul-srijan" }
            ],
            bio: "Pixels with Purpose, Where Imagination Meets Execution."
        },
        {
            name: "Soumalyo Kundu",
            role: "Admin & PR Lead @InnovateX",
            image: "or07poavtUuS6HwmgvjmO9QKv5tqplnZbudNaWCDSHTxL3Ak",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/soumalyo_kundu/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/soumalyo-kundu-a38157256/" },
                { icon: <FaGithub />, url: "https://github.com/soumalyokundu123" }
            ],
            bio: "If there is a system, I want to break it."
        },
        {
            name: "Abhisumat Kundu",
            role: "Admin & Ml Developer @InnovateX",
            image: "or07poavtUuSdCsfOMKa9VoReBDEIAGKQ4xPC3fqjy8LW1dM",
            social: [
                { icon: <FaInstagram />, url: "https://www.instagram.com/abhisumatkundu/" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abhisumat-kundu" },
                { icon: <FaGithub />, url: "https://github.com/AbhisumatK" }
            ],
            bio: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine."
        },
    ]
}