<script>
    import SideBarIcon from "./SideBarIcon.svelte";
    import Games from "./icons/games.svg";
    import Gear from "./icons/gear.svg";
    import SignUp from "./icons/signup.svg";
    import SignIn from "./icons/signin.svg";
    import Search from "./icons/search.svg";

    const User = `https://avatars.dicebear.com/api/human/:seed.svg`;
</script>

<div
    class="sidebar fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white"
>
    <SideBarIcon icon={User} text="Home" link="/" />
    <SideBarIcon icon={Search} text="Explore" link="/explore" />
    <SideBarIcon icon={Games} text="All Games" link="/games" />
    <SideBarIcon icon={SignUp} text="Create Acoount"  link="/signup" />
    <SideBarIcon icon={SignIn} text="Sign In" link="/signin" />
    <SideBarIcon icon={Gear} text="Settings" classes="mt-auto" link="/" />
</div>
