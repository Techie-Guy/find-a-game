<script>
    import { onMount } from 'svelte';

    export let icon;
    export let text = 'tooltip';
    export let classes = "";

    if(classes != "")
    {
        onMount(() => {
            let icons = document.getElementsByClassName('sidebar-icon');
            icons[5].classList.add(classes);
        });
    }
</script>

<div class="sidebar-icon group">
    <img src={icon} alt="" class="w-10 text-center">
    <span class="sidebar-tooltip group-hover:scale-100">
        {text}
    </span>
</div>