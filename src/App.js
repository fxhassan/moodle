import React from "react"
import  "bulma/css/bulma.min.css"

const App = () => {
    return (
        <div>
            <nav class="navbar  is-success is-fixed-top" style = {{backgroundColor:"#003049"}} >
            </nav>
            <section class="hero is-fullheight is-light" >
                <div class="hero-body">
                    <div class="container has-text-centered"   >
                        <div class="column is-4 is-offset-4" >
                            <h1 class="title" style={{ color: "black",fontWeight:800 , marginBottom:30, fontSize:30 }} >Welcome to E-Learning Classroom </h1>
                            <h1 class="subtitle" style={{ color: "black",fontWeight:300 , marginBottom:30, fontSize:24 }}> Login using your School ID</h1>
                            <a href = "http://edubase.cc/login/index.php/" class="button is-medium is-rounded is-fullwidth"  style = {{backgroundColor:"#003049" , color:"white"}}> Login</a>
                            <h1 class="subtitle" style={{ color: "black",fontWeight:600 , marginBottom:10, fontSize:24 , marginTop:60 }}> Need Help ? </h1>
                            <a href = "http://edubase.cc/login/index.php/" class="button is-medium is-rounded is-fullwidth is-outlined"  style = {{backgroundColor:"#003049" , color:"white"}}> Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App