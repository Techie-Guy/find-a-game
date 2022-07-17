<script>
    import "../app.css";
    import SideBar from "../components/SideBar.svelte";
</script>

<div class="flex flex-col items-center">
    <SideBar/>
    <slot></slot>
</div>
