window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById('terminal-input').addEventListener('keypress', function(e) {
  var commandHistory = [];
   if (e.key === 'Enter') {
    //  console.log('Enter key pressed');
     e.preventDefault();
     var input = this.value;

     commandHistory.push(input);

     var terminalLine = document.getElementById('user').innerHTML; // Get the terminal line
     var output = document.getElementById('terminal-output');
     output.innerHTML += '<p>' + terminalLine + ' ' + input + '</p>'; // Append the terminal line and the user's input to the 'terminal-output' paragraph
     this.value = ''; // Clear the input field
     handleCommand(input);
   }
  });
 });

 function openInNewWindow(url) {
  window.open(url, '_blank');
}
 
 function handleCommand(input) {
  var output = document.getElementById('terminal-output');
  switch (input) {
    case 'HELP':
    case 'help':
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">whois</span>    <span class="description">Who is Rohnit Rathod?                    </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">whoami</span>   <span class="description">Who are you?                             </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">linkedin</span> <span class="description">Check my LinkedIn                        </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">resume</span>   <span class="description">View My Resume                           </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">social</span>   <span class="description">Display social networks                  </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">gitHub</span>   <span class="description">View Projects On Github                  </span></p>';
      // output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">projects</span> <span class="description">View coding projects                     </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">email</span>    <span class="description">Send Me A Email                          </span></p>';
      // output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">history</span>  <span class="description">View command history                     </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">clear</span>    <span class="description">Clear terminal                           </span></p>';
      output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">help</span>     <span class="description">You obviously already know what this does</span></p>';
      // output.innerHTML += '<p>&nbsp;&nbsp;&nbsp;<span class="command">banner</span>   <span class="description">Display the header                       </span></p>';
      break;

      case 'WHOIS':
      case 'whois':
        output.innerHTML += '<p><span class="description">Hi, I’m Rohnit! <br> I’m a B.Tech student at KJSCE with a passion for technology and cybersecurity.<br><br>I’m proficient in programming languages such as C, C++, and Python. <br><br> My fascination with cybersecurity fuels my commitment to creating a safer digital world. I possess hands-on experience with various Vulnerability Assessment and Penetration Testing (VAPT) tools<br><br>My experience spans diverse networking tools, ranging from navigating the hidden layers of the internet through Tor (onion protocols) to understanding proxies, DNS, and VPNs.<br><br>The potential of AI to revolutionize our world is immense, and I’m excited to be at the forefront of this evolution. I’m particularly drawn to the synergy between AI and cybersecurity<br><br>Beyond the tech realm, I actively engage in the stock market as an investor.<br><br></span></p>';
        break;

      case 'WHOAMI':
      case 'whoami':
        output.innerHTML += '<p><span class="description">&nbsp;&nbsp;&nbsp;If you are a recruiter, please feel free to inquire about my professional background by using the </span><span class="command">linkedin</span> <span class="description">and</span> <span class="command">resume</span> <span class="description">commands</span></p>';
        output.innerHTML += '<p><span class="description">&nbsp;&nbsp;&nbsp;If you are a friend or family member, you can use the Socials command to access my social media profiles.</span></p>';
        break;

      case 'LINKEDIN':
      case 'LinkedIn':
      case 'linkedin':
      case 'Linkedin':
        output.innerHTML += '<p><span class="command">linkedin</span> <a href="https://www.linkedin.com/in/rohnitrathod/">Click Here or type in command promt</a><p>';
        window.open('https://www.linkedin.com/in/rohnitrathod/') ;
        // output.innerHTML += '<p><span class="command">linkedin</span> <a href="#" onclick="openInNewWindow(\'https://www.linkedin.com/in/rohnitrathod\')">Click Here or type in command prompt</a><p>';
        break;        
      
      case 'RESUME':
      case 'Resume':
      case 'resume':
        output.innerHTML += '<p><span class="command">resume</span> <a href="https://drive.google.com/file/d/15APNqO9NMeKW5G0GSRX8dE8vqFsAPVdV/view?usp=drive_link">Click Here or type in command promt</a><p>';
        window.open('https://drive.google.com/file/d/15APNqO9NMeKW5G0GSRX8dE8vqFsAPVdV/view?usp=drive_link');
        break;

      case 'GITHUB':
      case 'GitHub':
      case 'github':
        output.innerHTML += '<p><span class="command">github</span> <a href="https://github.com/roroRathod">Click Here or type in command promt</a><p>';
        window.open('https://github.com/roroRathod');
        break;

      case 'INSTA':
      case'insta':
      case 'INSTAGRAM':
      case 'instagram':
      case 'Instagram':
        output.innerHTML += '<p><span class="command">resume</span> <a href="https://www.instagram.com/rohnit_rathod/">Click Here or type in command promt</a><p>';
        window.open('https://www.instagram.com/rohnit_rathod/');
        break;

      case 'TWITTER':
      case 'twitter':
      case 'Twitter':
      case 'X':
      case 'x':
        output.innerHTML += '<p><span class="command">resume</span> <a href="https://twitter.com/RathodRohnit">Click Here or type in command promt</a><p>';
        window.open('https://twitter.com/RathodRohnit');
        break;
      
      case 'SOCIALS':
      case 'Socials':
      case 'socials':
      case 'social':
      case 'SOCIAL':
      case 'Social':
        output.innerHTML += '<p><span class="command">instagram</span> <a href="https://www.instagram.com/rohnit_rathod/">Click Here or type in command promt</a><p>';
        output.innerHTML += '<p><span class="command">Twitter(now X)</span> <a href="https://twitter.com/RathodRohnit">Click Here or type in command promt</a><p>';
        break;

      case 'email':
      case 'Email':
      case 'EMAIL':
      case 'E-mail':
      case 'e-mail':
      case 'mail':
      case 'Mail':
      case 'MAIL':
        output.innerHTML += '<p><span class="command">resume</span> <a href="mailto:rohnitrathod12@gmail.com">Click Here or type in command promt</a><p>';
        window.open('mailto:rohnitrathod12@gmail.com');
        break;

      case 'CLEAR':
      case 'clear':
      case 'clear':
        output.innerHTML = '';
        break;

      
      // case 'history':
      // case 'HISTORY':
      //   output.innerHTML += '<p>Command history:</p>';
      //   for (var i = 0; i < commandHistory.length; i++) {
      //   output.innerHTML += '<p>' + commandHistory[i] + '</p>';
      //   }
      //   break;
      
    default:
      output.innerHTML += '<p>Command not found: ' + input + '</p>';

  }
 }
 
