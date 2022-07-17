<script>
    import { onMount } from "svelte";

    export let icon = "";
    export let link = "";
    export let text = "tooltip";
    export let classes = "";

    if (classes != "") {
        onMount(() => {
            let icon = document.querySelectorAll(".sidebar-icon")[5];
            let classlist = classes.split(" ");
            classlist.forEach((classe) => {
                icon.classList.add(classe);
            });
        });
    }
</script>

<a href={link} class="sidebar-icon group">
    <img src={icon} alt="" class="w-10 text-center" />
    <span class="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
</a>
