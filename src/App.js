import React from "react"
import  "bulma/css/bulma.min.css"

const App = () => {
    return (
        <div>
            <nav class="navbar  is-success is-fixed-top" style = {{backgroundColor:"black"}} >
            </nav>
            <section class="hero is-fullheight is-white" >
                <div class="hero-body">
                    <div class="container has-text-centered"   >
                        <div class="column is-4 is-offset-4" >
                            <h1 class="title" style={{ color: "black",fontWeight:600 , marginBottom:30, fontSize:26 ,}} >Welcome to E-Learning Portal </h1>
                            <h1 class="subtitle" style={{ color: "black",fontWeight:300 , marginBottom:30, fontSize:20 }}> Login using your School ID</h1>
                            <a href = "http://elearning.edubase.cc/login/index.php/" class="button is-large is-rounded is-fullwidth"  style = {{backgroundColor:"black" , color:"white"}}> Login</a>
                            <h1 class="subtitle" style={{ color: "black",fontWeight:600 , marginBottom:30, fontSize:20 , marginTop:60 }}> Need Help ?</h1>
                            <a href = "mailto:hafeez.admc@gmail.com" class="button is-medium is-rounded is-large is-fullwidth is-outlined"  style = {{backgroundColor:"black" , color:"white"}}> Contact Us </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App