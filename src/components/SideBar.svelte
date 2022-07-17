<script>
    import SideBarIcon from "./SideBarIcon.svelte";
    import Games from './icons/games.svg';
    import Gear from './icons/gear.svg';
    import User from './icons/user.svg';
    import SignIn from './icons/signup.svg';
    import Search from './icons/search.svg';
</script>
<div class="sidebar fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white">
    <SideBarIcon icon={User} text="Home"/>
    <SideBarIcon icon={Search} text="Explore"/>
    <SideBarIcon icon={Games} text="All Games"/>
    <SideBarIcon icon={SignIn} text="Sign Up"/>
    <SideBarIcon icon={SignIn} text="Sign In"/>
    <SideBarIcon icon={Gear} text="Settings" classes="mt-auto"/>
</div>
