
import { addPost, deletepost } from "@/lib/action";

const ServerActionTestPage = ()=>{
    return(
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title"/>
                <input type="text" placeholder="desc" name="desc"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userid" name="userid"/>
                <button>click</button>
            </form>
            <form action={deletepost}>
                <input type="text" placeholder="postId" name="id"/>
                <button>delete</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage;