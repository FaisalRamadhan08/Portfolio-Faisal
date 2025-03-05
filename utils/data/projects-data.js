import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'E-Koperasi Bhumi Karya App',
        description: "I developed the E-Koperasi Bhumi Karya Savings and Loan Cooperative Information System website. I identified the system's required features, designed the website interface, designed the Entity Relational Database (ERD) & Table Relational Database (TRD), built the database structure and business logic using PHP programming language, created Activity Diagrams, built the website frontend using HTML5, CSS, and JavaScript, integrated the frontend with the backend system, created a monitoring dashboard, implemented reporting and data export systems, and performed system testing and debugging.",
        tools: ['Codeigniter 3', 'CSS', "PHP", "JavaScript", "MySQL"],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Sitangan App',
        description: 'My colleague and I developed an Air Quality Index (AQI) / Indeks Kualitas Udara (IKU) monitoring website for the Cimahi region. I created the AQI monitoring dashboard, designed the database, managed the MySQL database, and integrated the frontend with the backend.',
        tools: ['Codeigniter 4', 'CSS', "PHP", "JavaScript", "MySQL", "Bootstrap"],
        role: 'BackEnd Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Smart Plant Monitoring',
        description: 'My team developed a Smart Plant Monitoring website to monitor plant environmental conditions in real-time. We managed the temperature, humidity, and water turbidity database, integrated sensor data with the web using Ngrok, conducted API testing using Postman, and visualized sensor data in the form of graphs and tables.',
        tools: ['Laravel', 'Bootstrap', 'CSS', 'PHP', 'Java Script', 'MySQL', 'Ngrok', 'ArduinoIDE', 'Postman'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Laundry Management',
        description: "My colleague and I built a Laundry Management website. My responsibilities included designing the website dashboard interface, designing the database, and managing the database.",
        tools: ['Laravel', 'Bootstrap', 'CSS', 'PHP', "Java Script", "MySql"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },