import '../../global.css';

export default function sideActitvity() {
 return(
    <section className="w-[200px] p-3 border-b">

          {[ ['Library','https://www.youtube.com/feed/library','fa-solid fa-book'],
             ['History','https://www.youtube.com/feed/history','fa-solid fa-clock-rotate-left'],
             ['Your videos','https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Ffeed%252Ftrending%253Fbp%253D6gQJRkVleHBsb3Jl&ec=65620&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhftU2PQsyax6qqSxKJVwrSpH8hZP4v9VlS0DIJWruHG_GjN9VZ6iUctRgmHcsHgjRTqCli3&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin','fa-solid fa-video'],
             ['Watch later','https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Ffeed%252Ftrending%253Fbp%253D6gQJRkVleHBsb3Jl&ec=65620&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhftU2PQsyax6qqSxKJVwrSpH8hZP4v9VlS0DIJWruHG_GjN9VZ6iUctRgmHcsHgjRTqCli3&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin','fa-regular fa-clock'],
             ['Liked videos','https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Ffeed%252Ftrending%253Fbp%253D6gQJRkVleHBsb3Jl&ec=65620&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhftU2PQsyax6qqSxKJVwrSpH8hZP4v9VlS0DIJWruHG_GjN9VZ6iUctRgmHcsHgjRTqCli3&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin','fa-solid fa-thumbs-up'],
             ].map(([title,url,icon]) => {
              <div key={title} className="side-nav-option">
                <i className={icon}></i>
                <a href={url}>
                 {title}
                </a>
              </div>
            })} 

         </section> 
 );
}