import React from 'react';
import msdos from '../images/msdos.JPG';
import eclipse from '../images/eclipse.JPG';

const Work = () => {
    return ( 
        <div className="work">
             <div className="work__top">
                    <h1>Working Platforms</h1>

             </div>
               <div className="work__secondtop">
             <img src="./images/vscode.jpg" style={{height:'400px', width:'400px', padding:'5rem 5rem' }} xalt="screen image of visual studio" ></img>
             <div className="work__secondtop--text">
                  <h2>Visual Studio Code</h2>
                    <p>I have used Visual Studio for being React/Node.js applications. Within visual studio I have
                         implemented tools such as <strong>WebPack, Npm and Sass Compilers</strong>.
                    </p>
             
             
             
             </div>
             </div>


               <div className="work__thirdtop">
             <img src={eclipse} style={{height:'400px', width:'400px', padding:'5rem 5rem' }} xalt="screen image of eclipse workspace" ></img>
             <div className="work__thirdtop--text">
                  <h2>Eclipse</h2>
                    <p>I have used Eclipse when programming within <strong>Java</strong>. I have integrated Spring IO Maven applications
                         within Eclipse. I have good knowledge of using Maven and the <strong>Maven Pom.xml</strong> structure.
                    </p>
             
             
             
             </div>
        </div>

        <div className="work__forthtop">
             <img src={msdos} style={{height:'400px', width:'400px', padding:'5rem 5rem' }} xalt="screen image of msdos" ></img>
             <div className="work__forthtop--text">
                  <h2>Command Shell</h2>
                    <p>I use the Command Shell regularly when creating applications. I also have used Bash Terminals
                         with Linux commands to apply commands to <strong>Docker and AWS containers</strong>.
                    </p>
             
             
             
             </div>
        </div>
        </div>
     );
}
 
export default Work;