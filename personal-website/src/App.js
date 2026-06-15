import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="Screen">
      <h1>Nicholas Lucky</h1>
      <h4>Computer Science Student | Developer | AI Enthusiast | Problem Solver</h4>

      {/* About Me Section */}
      <h2>About Me</h2>
      <p>Hi, I am Nicholas Lucky, a Computer Science student at the University of Florida with a strong interest in software development, web technologies, artificial intelligence and problem-solving.</p>
      <p>I enjoy learning how technology works and using programming to create useful applications that solve real-world problems. As I continue my studies, I am building my skills through personal projects, coursework, and independent learning.</p>
      <p>My goal is to become a skilled software engineer who leverages artificial intelligence and modern technologies to build innovative products that make people's lives easier while continuously learning and adapting to new advancements in the field.</p>

      {/* Projects Section */}
      <h2>Projects</h2>

      <h3>Personal Portfolio Website</h3>
      <a href="https://github.com/Nicholas-Lucky/Nicholas-Lucky">github.com/Nicholas-Lucky/Nicholas-Lucky</a>
      <p>Designed and developed a personal portfolio website to showcase my projects, technical skills, educational background, and interests.</p>
      <p>Through this project, I learned:</p>
      <ul>
        <li>HTML, CSS, and JS</li>
        <li>Responsive web design</li>
        <li>Website deployment with GitHub Pages</li>
        <li>Version control using Git and GitHub</li>
      </ul>
      <p>This project serves as the foundation of my professional online presence and will continue to evolve as I gain more experience.</p>

      <h3>IMC Prosperity 4 Trading Competition (2025)</h3>
      <a href="https://github.com/Nicholas-Lucky/IMC-Prosperity-4-Submission">github.com/Nicholas-Lucky/IMC-Prosperity-4-Submission</a>
      <p><b>Ranked top 0.79% in Manual Trading, and top 5.74% in Algorithmic Trading.</b></p>
      <p>Our team's code repository for the IMC Prosperity 4 trading competition. Includes code for our main training algorithm and manual trading logic for each round.</p>
      <p>Participating in this competition strengthened my understanding of object-oriented programming, data ingestion, transformation, analysis, and visualization, game theory, cross-functional communication, and documentation.</p>    

      <h3>Hallow Eve</h3>
      <a href="https://github.com/NoInfoOrg/Hallow-Eve ">github.com/NoInfoOrg/Hallow-Eve</a>
      <p>A 2D local co-op puzzle game about a spirit sister and a human brother trying to traversing through and escape a haunted mansion. Developed in collaboration with a team for a senior project.</p>
      <p>Features include:</p>
      <ul>
        <li>Player movement and collision</li>
        <li>Enemy design and AI</li>
        <li>Map and level design and collision</li>
        <li>Original music and sound effects</li>
      </ul>
      <p>Collaboratively developing this project strengthened my skills in game development, game and sprint planning, Godot, documentation, presentations, and meeting and communication facilitation.</p>

      <h3>Math Game Website</h3>
      <a href="https://github.com/Masiesworld/math-game-website">github.com/Masiesworld/math-game-website</a>
      <p>A web application that houses a simple math game for users to practice their basic math skills.</p>
      <p>Features include:</p>
      <ul>
        <li>User sign up and log in pages</li>
        <li>Separate admin dashboard for admin users</li>
        <li>Math game logic and scoring functionality</li>
        <li>Updating score leaderboards</li>
        <li>Music customization</li>
      </ul>
      <p>Building this project strengthened my understanding of Agile and Scrum principles, sprint planning and participation, API creation, logic, and usage, debugging, user interface design, code quality, code reviews, and documentation.</p>

      <h3>IMC Prosperity 3 Trading Competition (2025)</h3>
      <a href="https://github.com/Nicholas-Lucky/IMC-Prosperity-3-Submission">github.com/Nicholas-Lucky/IMC-Prosperity-3-Submission</a>
      <p><b>Ranked top 1% in Manual Trading, and top 23% in Algorithmic Trading.</b></p>
      <p>Our team's code repository for the IMC Prosperity 3 trading competition. Includes code for our main training algorithm and manual trading logic for each round.</p>
      <p>Participating in this competition strengthened my understanding of object-oriented programming, data ingestion, transformation, analysis, and visualization, game theory, cross-functional communication, and documentation.</p>      

      <h3>Chrome Bookmark Searcher Extension</h3>
      <a href="https://github.com/Nicholas-Lucky/Google-Chrome-Bookmark-Searcher-Extension">github.com/Nicholas-Lucky/Google-Chrome-Bookmark-Searcher-Extension</a>
      <p>A Google extension that allows users to search through their bookmarks by title. Works with the chrome API.</p>
      <p>Features include:</p>
      <ul>
        <li>Real-time bookmark searching based on the title of the bookmarks</li>
        <li>Displayed information on the folders a found bookmark is in</li>
        <li>Storage functionality to change and keep different themes across different visits to the extension</li>
      </ul>
      <p>Building this project strengthened my understanding of API logic and usage, debugging, algorithms, time and space complexity, and user interface design.</p>

      <h3>Microsoft Excel Task Assignment Macro</h3>
      <p>A Visual Basic macro that can assign names to tasks, given a calendar and task schedule and a list of names to include</p>
      <p>Features include:</p>
      <ul>
        <li>Macro that can be run on a cell; the macro will autofill the rest of the cells in the calendar</li>
        <li>Names that are absent on a day will not be assigned a task</li>
        <li>If absences allow, names cannot handle the same task in consecutive days</li>
      </ul>
      <p>Building this project introduced me to VBA, Visual Basic, macros, and macro-related concepts such as ranges, data types, and functions.</p>

      
    </div>
  );
}

export default App;
