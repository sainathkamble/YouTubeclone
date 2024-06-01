import '../global.css'

export default function Gonra(){
    return(    
        <section className="h-[60px] w-4/5 absolute top-[60px] left-60 px-4 flex justify-center items-center gap-4">

          {[['All','https://youtubeclone-4bwo.onrender.com'],
            ['Computers','https://www.youtube.com/results?search_query=computers'],
            ['Programming','https://www.youtube.com/results?search_query=programming'],
            ['Javascript','https://www.youtube.com/results?search_query=javascript'],
            ['Gaming','https://www.youtube.com/results?search_query=gaming'],
            ['Coding','https://www.youtube.com/results?search_query=coding'],
            ['Java','https://www.youtube.com/results?search_query=java'],
            ['CSS','https://www.youtube.com/results?search_query=css'],
            ['Web development','https://www.youtube.com/results?search_query=webdevelopment'],
            ['Backend development','https://www.youtube.com/results?search_query=Backend+Development'],
           ].map(([title,url]) => {
            <a className="rounded-lg bg-[#e6e5e5] px-2 py-1 text-md flex justify-center items-center hover:bg-black hover:text-[white]" href={url}>
              {title}
            </a>
          })}
         
       </section>
    );
}