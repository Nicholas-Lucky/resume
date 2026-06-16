import './App.css';

function App() {
  return (
    <div className="Screen">
      <h1>Nicholas Lucky</h1>
      <h4>Computer Science Student | Developer | AI Enthusiast | Problem Solver</h4>
      
      <a href="https://github.com/Nicholas-Lucky">
        <div>
          <div className="social-media-button-circle-outer">
            <div className="social-media-button-circle-inner"/>
            <img className="social-media-button-logo"/>
          </div>
        </div>
      </a>

      <div><hr/></div>

      {/* About Me Section */}
      <h2>About Me</h2>
      <p>Hi, I am Nicholas Lucky, a Computer Science student at the University of Florida with a strong interest in software development, web technologies, artificial intelligence and problem-solving.</p>
      <p>I enjoy learning how technology works and using programming to create useful applications that solve real-world problems. As I continue my studies, I am building my skills through personal projects, coursework, and independent learning.</p>
      <p>My goal is to become a skilled software engineer who leverages artificial intelligence and modern technologies to build innovative products that make people's lives easier while continuously learning and adapting to new advancements in the field.</p>

      <div><hr/></div>

      {/* Projects Section */}
      <h2>Projects</h2>

      <h3>Personal Portfolio Website</h3>
      <a href="https://github.com/Nicholas-Lucky/resume" className="project-link">github.com/Nicholas-Lucky/resume</a>
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
      <a href="https://github.com/Nicholas-Lucky/IMC-Prosperity-4-Submission" className="project-link">github.com/Nicholas-Lucky/IMC-Prosperity-4-Submission</a>
      <p><b>Ranked top 0.79% in Manual Trading, and top 5.74% in Algorithmic Trading.</b></p>
      <p>Our team's code repository for the IMC Prosperity 4 trading competition. Includes code for our main training algorithm and manual trading logic for each round.</p>
      <p>Participating in this competition strengthened my understanding of object-oriented programming, data ingestion, transformation, analysis, and visualization, game theory, cross-functional communication, and documentation.</p>    

      <h3>Hallow Eve</h3>
      <a href="https://github.com/NoInfoOrg/Hallow-Eve" className="project-link">github.com/NoInfoOrg/Hallow-Eve</a>
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
      <a href="https://github.com/Masiesworld/math-game-website" className="project-link">github.com/Masiesworld/math-game-website</a>
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
      <a href="https://github.com/Nicholas-Lucky/IMC-Prosperity-3-Submission" className="project-link">github.com/Nicholas-Lucky/IMC-Prosperity-3-Submission</a>
      <p><b>Ranked top 1% in Manual Trading, and top 23% in Algorithmic Trading.</b></p>
      <p>Our team's code repository for the IMC Prosperity 3 trading competition. Includes code for our main training algorithm and manual trading logic for each round.</p>
      <p>Participating in this competition strengthened my understanding of object-oriented programming, data ingestion, transformation, analysis, and visualization, game theory, cross-functional communication, and documentation.</p>      

      <h3>Chrome Bookmark Searcher Extension</h3>
      <a href="https://github.com/Nicholas-Lucky/Google-Chrome-Bookmark-Searcher-Extension" className="project-link">github.com/Nicholas-Lucky/Google-Chrome-Bookmark-Searcher-Extension</a>
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

      <div><hr/></div>

      {/* Education Section */}
      <h2>Education</h2>
      <h3>University of Florida</h3>
      <p>Bachelor of Science in Computer Science</p>
      <p>2023 - 2027</p>
      <p><i>Founded in 1853, the University of Florida is one of the nation's leading public research universities and is consistently ranked among the top public institutions in the United States. Its Computer Science program is recognized for its rigorous curriculum, innovative research opportunities, and strong preparation for careers in software engineering, artificial intelligence, cybersecurity, and other technology fields.</i></p>
      <p>Studying Computer Science at the University of Florida provides me with a strong foundation in software development, algorithms, data structures, and emerging technologies. Through rigorous coursework and hands-on projects, I am developing the technical and problem-solving skills necessary to succeed in the rapidly evolving technology industry.</p>
      <p>My time at UF is helping me grow not only as a programmer but also as a lifelong learner, preparing me to contribute to innovative projects and make a meaningful impact in the field of technology.</p>

      <div><hr/></div>

      {/* Skills Section */}
      <h2>Skills</h2>

      <h3>Programming Languages</h3>
      <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>C++</li>
        <li>GDScript</li>
      </ul>

      <h3>Software Development</h3>
      <ul>
        <li>Agile/scrum development</li>
        <li>Sprint planning and facilitation</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ul>

      <h3>Programming Concepts</h3>
      <ul>
        <li>Object-oriented programming</li>
        <li>Algorithm design and analysis</li>
        <li>Analytical thinking</li>
        <li>Problem solving</li>
        <li>Communication and presentation</li>
        <li>Documentation</li>
        <li>Data structures</li>
      </ul>

      <h3>Tools</h3>
      <ul>
        <li>Visual Studio</li>
        <li>PyCharm</li>
        <li>IntelliJ</li>
        <li>Godot</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Docker</li>
        <li>SonarQube</li>
        <li>Command Prompt</li>
        <li>Git Bash</li>
      </ul>

      <div><hr/></div>

      {/* A Little More About Me Section */}
      <h2>A Little More About Me</h2>
      <p>Alongside my interests in technology, some of my other interests and hobbies are:</p>
      <ul>
        <li>Gaming</li>
        <li>Drawing</li>
        <li>Listening to music</li>
      </ul>
      <p>I believe that consistent learning, curiosity, and perseverance are the keys to success in technology and life.</p>
      
    </div>
  );
}

export default App;
