import '../global.css'

export default function Navbar(){
    return(
        <> 
         <nav className="h-[60px] w-screen bg-white flex justify-between items-center stickey px-10">
            <section className="h-full w-1/5 flex justify-evenly content-start items-center">
            <button className="fa-solid fa-bars h-10 w-10 text-2xl rounded-full hover:bg-[#e6e5e5] flex justify-center items-center cursor-pointer"></button>
            <img src="/youtube.jpg" alt="Youtube image"
            className="h-10 w-24 bg-transparent"/>
       
            </section>
            <section className="h-full w-full flex justify-center items-center px-12 gap-2">
              <div className="h-10 w-[70%] border-radius-3xl flex items-center">
                <input type="text"  name="search" placeholder="Search"
                className="h-10 w-[80%] rounded-l-full  px-4 text-l border-[0.5px] flex items-center"/>

                <button className="h-10 w-[10%] bg-[#e6e5e5] flex justify-center items-center rounded-r-full border-[o.5px]">
                      <i className="fa-solid fa-magnifying-glass h-10 w-[15%] text-2xl flex justify-center items-center cursor-pointer"></i>
                </button>
              </div>  

              <i className="fa-solid fa-microphone h-10 w-10 text-2xl rounded-full bg-[#e6e5e5] flex justify-center items-center cursor-pointer"></i>

            </section>
            <section className="h-10 w-1/5 flex justify-between items-center">

             <i className="fa-solid fa-video h-10 w-10 text-2xl rounded-full hover:bg-[#e6e5e5] flex justify-center items-center cursor-pointer"></i>      
           
             <i className="fa-regular fa-bell h-10 w-10 text-2xl rounded-full hover:bg-[#e6e5e5] flex justify-center items-center cursor-pointer"></i>

             <img src="/img.jpg" alt="Profile image"
             className="h-10 w-10 rounded-full bg-transparent"/>

            </section>
         </nav>
        </>
    );
}