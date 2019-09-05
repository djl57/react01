import HomePage from "../view/blog/App/homePage/index";
import BlogPage from "../view/blog/App/blogPage/index";
import RegisterPage from "../view/blog/App/registerPage/index";
import LoginPage from "../view/blog/App/loginPage/index";
import MyCollectionPage from "../view/blog/App/myCollectionPage/index";
import PersonalCenterPage from "../view/blog/App/personalCenterPage/index";
import AccountSettingsPage from "../view/blog/App/accountSettingsPage/index";
import MyBlogPage from "../view/blog/App/myBlogPage/index";
import BlogManagementPage from "../view/blog/App/blogManagementPage/index";

const routerLists = [
  { path: "/app/home", component: HomePage, auth: false },
  { path: "/app/blog", component: BlogPage, auth: false },
  { path: "/app/login", component: LoginPage, auth: true },
  { path: "/app/register", component: RegisterPage, auth: false },
  { path: "/app/myCollection", component: MyCollectionPage, auth: true },
  { path: "/app/personalCenter", component: PersonalCenterPage, auth: true },
  { path: "/app/accountSettings", component: AccountSettingsPage, auth: true },
  { path: "/app/myBlog", component: MyBlogPage, auth: true },
  { path: "/app/blogManagement", component: BlogManagementPage, auth: true }
];

export default routerLists;
