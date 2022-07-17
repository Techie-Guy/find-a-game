<script>
    import { onMount } from "svelte";
    import Game from "../../components/Game.svelte";
    const endpoint = "https://find-a-game-api.herokuapp.com/games/all";
    let games = [];

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        games = data;
    });
</script>

<div class="flex flex-col justify-evenly">
    <header>
        <h1>All Games</h1>
    </header>
    <main class="flex flex-row space-x-4 text-center text-black">
        {#each games as game}
            <Game name={game.name} price={game.price} />
        {/each}
    </main>
</div>
