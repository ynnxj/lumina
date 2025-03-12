<template>
	<div>
    <h2>Vårt Koncept</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Elementum amet mattis in placerat placerat elit maecenas. Fermentum placerat volutpat diam purus justo. Accumsan eget vehicula eget amet arcu nibh.  Vulputate dictumst pulvinar ipsum mauris feugiat.</p>
	</div>
</template>

<style lang="scss" scoped>
	div {
		background-color: #283618;
		padding: 100px 150px 50px 150px;

		h2 {
			margin-bottom: 50px;
			color: #F4C96D;
			text-transform: uppercase;
			font-weight: 600;
		}

		p {
			color: #D7D3CB;
		}
	}

	@media (max-width: 900px) {
		div {
			padding: 50px;
		}
	}

	@media (max-width: 765px) {
		div {
			padding: 30px;

			h2 {
				margin-top: 35px;
			}
		}
	}
</style>
