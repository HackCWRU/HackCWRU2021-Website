import React, { Component } from 'react';
import waterFall from '../Assets/waterfall_and_bridge.svg';
import FAQBox from './FAQBox';

class FAQ extends Component{
    render(){
        return (
            <div id = "FAQSection">
                {/*<div id="FAQBackgroundContainer">
                    <img id = "waterFall" src= {waterFall}></img>
                </div>
                <div className = "skewTitleBox">
                    <div>
                        FAQ
                    </div>
                </div>}*/}
                <div id = "FAQBoxesContainer">
                    <div id ="FAQBoxesGrid">
                        <div className="row">
                            <div class="FAQItem">
                                <FAQBox question={"Where will HackCWRU 2022 take place?"} 
                                answer={`HackCWRU 2022 will be fully digital, to accomodate the ongoing COVID-19 pandemic`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Who can attend?"} 
                                answer={`Anyone currently enrolled in an
                                undergraduate or graduate program can attend.`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"What if I don't have a lot of experience?"} 
                                answer={`First and foremost, hackathons are a learning experience. 
                                It wouldn't be fun if you knew exactly what to do! 
                                If you need help, we have a team of mentors to get you started.`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"What if I don't have an idea or team?"} 
                                answer={`No problem. There are plenty of other hackers with your same dilemma you can 
                                join forces with. Also, we will have team building and idea brainstorming workshops. 
                                You are not required to be part of a team.`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"How much does it cost?"} 
                                answer={`Nothing. Signups are free!`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"How will we receive swag and prizes if the Hackathon is digital?"} 
                                answer={`Prizes and swag will all be delivered via mail.`}/>
                            </div>

{/*
                            <div class="FAQItem">
                                <FAQBox question={"Is it still possible to do a hardware project if the hackathon is digital?"} 
                                answer={`Yes! At the end of the Hackathon, you will submit a 5-10 minute video presentation 
                                explaining your project and demonstrating its feasibility.`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"I want to do a hardware project, but I don't the resources to make it. What should I do?"} 
                                answer={`You can design your hardware project using a CAD tool like Solidworks or Inventor, which you will 
                                then show in your recording.`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"My computer isn't powerful enough to make my Hack. What should I do?"} 
                                answer={`Computer not powerful enough? We've set up 100 remote AWS dev environments. For more info go to hackcwru.info/remotedev`}/>
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Placeholder"} 
                                answer={`Placeholder.`}/>
                            </div>

                            <div class="FAQItem">
                                <FAQBox question={"Placeholder"}
                                answer={`Placeholder`}
                                />
                            </div>
                            <div class="FAQItem">
                                <FAQBox question={"Placeholder"}
                                answer={`Placeholder`}
                                />
                            </div>
        */}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ;