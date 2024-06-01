import '../global.css'
import sideHome from './side/sidehome.jsx'
import sideActitvity from './side/sideactivity.jsx'

export default function Sidebar(){
    return(
      <nav className="sidebar h-[580px] w-60 bg-white overflow-y-scroll">
        
        <sideHome/>
        <sideActitvity/>

         <section className="w-[200px] p-3 border-b">

           <p className="h-1/3 w-full text-md">
             Sign in to like videos, comment and subscribe.
           </p>
           <a className="h-full w-1/2 flex justify-evenly items-center text-blue-500 my-1 rounded-md cursor-pointer">
           <i className="fa-regular fa-user text-xl rounded-full"></i>
            Sign in
            </a>

        </section>
        <section className="w-[200px] p-3 border-b">

         <p>Explore</p>
          <div className="side-nav-option">
            <i className="fa-solid fa-arrow-trend-up"></i>
           <a href="https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl">
             Trending
          </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-bag-shopping"></i>
           <a href="https://www.youtube.com/channel/UCkYQyvc_i9hXEo4xic9Hh2g">
             Shopping
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-music"></i>
           <a href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
             Music
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-film"></i>
           <a href="https://www.youtube.com/feed/storefront?bp=ogUCKAI%3D">
             Movies
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-users-between-lines"></i>
           <a href="https://www.youtube.com/channel/UC4R8DWoMoI7CAwX8_LjQHig"> 
             Live
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-headset"></i>
           <a href="https://www.youtube.com/gaming">  
             Gaming
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-newspaper"></i>
           <a href="https://www.youtube.com/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
             News
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-trophy"></i>
           <a href="https://www.youtube.com/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
             Sports
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-lightbulb"></i>
           <a href="https://www.youtube.com/channel/UCtFRv9O2AHqOZjjynzrv-xg">
             Learning
           </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-shirt"></i>
           <a href="https://www.youtube.com/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ">
             Fashion & beauty
           </a>
         </div>
        </section>
        <section className="w-[200px] p-3 border-b">
         <p>More from YouTube</p>
          <div className="side-nav-option">
           <img className="h-7 w-10" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg?w=389"/>
            <a href="https://www.youtube.com/premium">
               YouTube Premium
            </a>
          </div>
          <div className="side-nav-option">
            <i className="fa-solid fa-play"></i>
            <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Ffeed%252Ftrending%253Fbp%253D6gQJRkVleHBsb3Jl&ec=65620&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhftU2PQsyax6qqSxKJVwrSpH8hZP4v9VlS0DIJWruHG_GjN9VZ6iUctRgmHcsHgjRTqCli3&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              YouTube Studio
            </a>
          </div>
          <div className="side-nav-option">
            <i className="fa-solid fa-circle-play"></i>
            <a href="https://music.youtube.com/">
              YouTube Music
            </a>
          </div>
          <div className="side-nav-option">
            <i className="fa-brands fa-youtube"></i>
            <a href="https://www.youtubekids.com/?source=youtube_web">
              YouTube Kids
            </a>
          </div> 
        </section>
        <section className="w-[200px] p-3 border-b">
        <div className="side-nav-option">
           <i className="fa-solid fa-gear"></i>
           <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Faccount%253Fpbjreload%253D102%26feature%3Dredirect_login&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhfZ_J2_phGOt-zNTxQkByiaWK5oRDswVrW-fuhY4XgKFUWvy8MoH6Z-RInfcRXkEon2eTB7ow&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            Settings
          </a>
         </div>
         <div className="side-nav-option">
          <i className="fa-solid fa-flag"></i>
           <a href="https://www.youtube.com/reporthistory">
             Report history
           </a>
         </div>
         <div className="side-nav-option">
           <i className="fa-solid fa-circle-question"></i>
           <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Faccount%253Fpbjreload%253D102%26feature%3Dredirect_login&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhfZ_J2_phGOt-zNTxQkByiaWK5oRDswVrW-fuhY4XgKFUWvy8MoH6Z-RInfcRXkEon2eTB7ow&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
             Help
           </a>
         </div>
         <div className="side-nav-option">
           <i className="fa-solid fa-exclamation"></i>
           <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Faccount%253Fpbjreload%253D102%26feature%3Dredirect_login&hl=en&passive=true&service=youtube&uilel=3&ifkv=AYZoVhfZ_J2_phGOt-zNTxQkByiaWK5oRDswVrW-fuhY4XgKFUWvy8MoH6Z-RInfcRXkEon2eTB7ow&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
             Send feedback
           </a>
          </div>
        </section>
        <section className="w-[200px] p-3 border-b">
          
          {[ ['About','https://about.youtube/'],
             ['Press','https://blog.youtube/'],
             ['Copryright','https://www.youtube.com/howyoutubeworks/policies/copyright/'],
             ['Contact us','https://www.youtube.com/t/contact_us/'],
             ['Creators','https://www.youtube.com/creators/'],
             ['Advertise','https://www.youtube.com/ads/'],
             ['Developers','https://developers.google.com/youtube'],
             ['Terms','https://www.youtube.com/t/terms'],
             ['Privacy','https://policies.google.com/privacy?hl=en'],
             ['Policy & Safety','https://www.youtube.com/howyoutubeworks/policies/community-guidelines/'],
             ['How Youutube works','https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'],
             ['Try new features','https://www.youtube.com/new'],
            ].map(([title,url]) => {
              <a className="w-[200px] text-[#606060] text-[12px] mr-3 mb-[5px] bg-contain" key={title} href={url}>
              {title}
              </a>
            })}

          <div className="h-12 w-[200px] flex justify-center items-center text-[12px] text-[#606060] gap-2">
           <i className="fa-regular fa-copyright"></i>
           <p>2024 Google LLC</p>
          </div>

        </section>
      </nav>
    );
}