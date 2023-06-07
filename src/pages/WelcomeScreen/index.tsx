

interface IProps{}

function WelcomeScreen(props: IProps) {

    
        const today = new Date();
    
    return (
     <div className="wrapper ">
        <div >
          <img src="/images/Group 4.png" alt=" " className="container container1"/>
         <div className="groups">
          <img src="/images/Group 15.png" alt=" " className="pics pics1"/>
          <img src="/images/animation 3.png" alt=" " className="group"/>
         </div>
        </div>

        <footer>
            <p className="foot">
                 &copy; {today.getFullYear()} .Career Connect
            </p>
        </footer>
     </div>
  
    )
}

export default WelcomeScreen;