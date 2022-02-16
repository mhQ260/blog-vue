import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import Manage from "../views/Manage.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";


const routes = [
    {
        path: "/",
        name: 'home',
        component: Home
    },
    {
        path: "/post/add",
        name: 'addpost',
        component: AddPost
    },
    {
        path: "post/:id",
        name: "post",
        component: Post
    },
    {
        path: "/manage",
        name: 'manage',
        component: Manage
    },
    {
        path: "/about",
        name: 'About',
        component: About
    },
]

export default routes