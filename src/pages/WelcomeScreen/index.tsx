

interface IProps{}

function WelcomeScreen(props: IProps) {

    
        const today = new Date();
    
    return (
        <>
     <div className="wrapper ">
        <div >
          <img src="/images/Group 4.png" alt=" " className="container container1"/>
         <div className="groups">
          <img src="/images/Group 15.png" alt=" " className="pics pics1"/>
          <img src="/images/animation 3.png" alt=" " className="group"/>
         </div>
        </div>

        <div className="text">
            <h1>Welcome!!!</h1>
            <p>At Career Connect, we're dedicated to 
            connecting exceptional talent with outstanding 
            opportunities. We understand the importance of finding the right fit for both job seekers and 
            companies, and that's where we come in. Employers searching for top tech talent to join your team? 
            Look no further! Our platform provides highly skilled job seekers who have successfully completed 
            rigorous tech assessments.
            Tech enthusiast looking to showcase your skills by taking the tech skill assessment which enables 
            you to prove your abilities and stand out to potential Employers.
            </p>
        </div>

        <div className="but">
            <button>
                Take practice quiz
            </button>

            <button>
                Take Test
            </button>
        </div>

        <footer>
            <p className="foot">
                 &copy; {today.getFullYear()} .Career Connect
            </p>
        </footer>
     </div>

     <footer>
            <p className="foot">
                 &copy; {today.getFullYear()} .Career Connect
            </p>
        </footer>
     </>
  
    )
}

export default WelcomeScreen;