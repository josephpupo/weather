<div>
	<slot></slot>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		overflow-y: scroll;
		scrollbar-width: none;
		overscroll-behavior: none;
		
		scroll-snap-type: x mandatory;
	}
	div::-webkit-scrollbar {
		display: none;
	}
	div > :global(*) {
		flex-basis: 100%;
		flex-shrink: 0;
		scroll-snap-align: start
	}
</style>