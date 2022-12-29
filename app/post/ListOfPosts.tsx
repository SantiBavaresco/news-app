import {urlAPI} from "../../components/urlAPI"
import style from "./ListOfPost.module.css"

const fetchPosts = () => {
    
    return (fetch(urlAPI()).then(res => res.json())
    
    )
}

export async function ListOfPost (){
    const posts = await fetchPosts();
    
    return(
        <>
            {posts.articles.slice(0,25).map(post => (
                
                    <article key={post.id} className={style.card}>
                        <img src={post.urlToImage} alt={post.urlToImage} />
                        <h2 className={style.text} >{post.description}</h2>
                        
                    </article> 
               
                ) 
            )
            }
        </>
    )
}