import {urlAPI} from "./urlAPI"
import style from "./ListOfPost.module.css"
import Link from "next/link";
import {HashStr} from "./HashStr";

// Mensaje hablado 
//let msg = new SpeechSynthesisUtterance();
// msg.text = "hola que tal";
// msg.lang = "es-Es";
// window.speechSynthesis.speak(msg);

const fetchPosts = () => {
    
    return (fetch(urlAPI(),{
        next: { revalidate: 320}
    })
    .then(res => res.json())
    )
}

export async function ListOfPost (){
    const posts = await fetchPosts();
    const p = posts.articles;
    console.log(p);
    return(
        <>
            {
            
            p.slice(0,25).map((post: { id: string; title: string; urlToImage: string }) => (
                <Link href="/post/[id]" as={`/post/${post.title}`}>
                  <article key={post.id} className={style.card}>
                    <img src={post.urlToImage} alt={post.urlToImage} />
                    <h2 className={style.text} >{post.title}</h2>
                  </article> 
                </Link>
              ))
            // p.slice(0,25).map(post => (
            //     // console.log(post)
            //     <Link href="/post/[id]" as={`/post/${(post.title)}`}>
            //         <article key={post.id} className={style.card}>

            //                 <img src={post.urlToImage} alt={post.urlToImage} />
            //                 <h2 className={style.text} >{post.title}</h2>

            //         </article> 
            //     </Link>
            //     ) 
            // )
            }
        </>
    )
}