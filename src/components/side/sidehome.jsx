import '../../global.css';

export default function sideHome() {
 return(
 
<section className="w-[200px] p-3 border-b">
   
        {[ ['Home', 'https://youtubeclone-4bwo.onrender.com','fa-solid fa-house'],
           ['Shorts', 'https://www.youtube.com/shorts/USc22MHu9cU','fa-brands fa-youtube'],
           ['Subscription', 'https://www.youtube.com/feed/subscriptions','fa-solid fa-list'],
           ].map(([title,url,icon]) => (
           <div key={title} className="side-nav-option">
             <i className={icon}></i>
             <a href={url}>
              {title}
             </a> 
           </div>
         ))}
</section>
 );
}