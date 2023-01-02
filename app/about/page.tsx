"use client"
import style from "./about.module.css"
import Image from 'next/image'
import Titulo from "../../public/santi.png";

export default function AboutPage (){
    return(
        <div className={style.about}>
            <div style={{width: "95%", margin: "auto"}}> 
                <Image
                    src="/public/santi.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
                <h3>Created by Santiago Bavaresco</h3>

                {/* <div className={style.shape_outer}
                    // style={{width: "13%", margin: "auto"}}
                > 
                    <img src="../public/santi.png" alt="../public/santi.png" /> 
                    <div className={style.shape_inner} src={santi}></div>
                </div> */}
                <hr/>
                <p>
                    Hi, I'm Santiago, passionate about the IT world and software development.
                </p>

                <p>
                    I am very interested in technology, very patient, meticulous and manage to seek efficiency in the emerging
                    problems that are presented to us in the world of programming. Currently I am taking Henry's course to
                    be able to update myself in Full Stack Web Development.
                </p>
                
                <p>       
                    With a proactive, analytical, creative, professional with the capacity for planning, organization and team
                    leadership; also with skills and criteria for decision making and problem solving labor problems, common
                    sense, security and permanent dialogue to meet the objectives with different areas.
                </p>
                <hr/>
                <p > 
                    <a href="https://www.linkedin.com/in/santiago-bavaresco/">
                        Click here to visit my LinkedIn Profile Page. </a>
                </p>

            </div>
            
            {/* <div>
                <button onClick={()=>navigate("/home")} className={style.button}
                style={{marginTop: "2%", marginBottom: "2%"}}>Volver</button>
            </div> */}
    </div>
    )
}