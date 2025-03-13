<script>
// Items Object Arrays
	export default {
		data() {
			return {

				// Signature Drinks
				signature: [
					{
						name: "Lumina Soleil",
						description: "Mörk premiumrom ⬝ färskpressad apelsin- och citronjuice ⬝ honungssirap ⬝ grand marnier ⬝ en stänk appelsinbitters",
					},
					{
						name: "Ember Old Fashioned",
						description: "Fatlagrad burbon ⬝ lönnsirap ⬝ några droppar chokladbitters ⬝ apelsinzest",
					},
					{
						name: "Dirty Martini",
						description: "Premiumvodka (eller gin) ⬝ torr vermouth ⬝ olivlake ⬝ garneras med gröna oliver",
					},
					{
						name: "Lorem Ipsum",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod temporv",
					}
				],

				// Classics
				classics: [
					{
						name: "Lumina Colada",
						description: "Ljus premiumrom ⬝ kokos ⬝ färskpressad limejuice ⬝ ananas ⬝ soda",
					},
					{
						name: "Lumina Colada",
						description: "Ljus premiumrom ⬝ kokos ⬝ färskpressad limejuice ⬝ ananas ⬝ soda",
					},
					{
						name: "Negroni Sbagliato",
						description: "Campari ⬝ röd vermouth ⬝ prosecco ⬝ apelsinskiva",
					},
					{
						name: "Negroni Spagliato",
						description: "Campari ⬝ röd vermouth ⬝ prosecco ⬝ apelsinskiva",
					},
					{
						name: "Lorem Ipsum",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						name: "Lorem Ipsum",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					}
				],

				// Mocktails
				mocktails: [
					{
						name: "Lorem Ipsum",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					}
				],

				// Spritzers
				spritzers: [
					{
						name: "Spritz",
						description: "Mörk premiumrom ⬝ färskpressad apelsin- och citronjuice ⬝ honungssirap ⬝ grand marnier ⬝ en stänk appelsinbitters",
					},
					{
						name: "Fizzy",
						description: "Fatlagrad burbon ⬝ lönnsirap ⬝ några droppar chokladbitters ⬝ apelsinzest ",
					},
					{
						name: "Fizzy spritzer",
						description: "Premiumvodka (eller gin) ⬝ torr vermouth ⬝ olivlake ⬝ garneras med gröna oliver",
					}
				],

				// Gin and Tonics
				gintonic: [
					{
						name: "Gurka & Rosepeppar",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						name: "Rosmarin & Apelsin",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						name: "Monkey 47 & granskott",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						name: "Härnö & grapefrukt",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					}
				],

				// Wine and Champagne
				wine: [
					{
						name: "Röda viner",
						description: "Sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						name: "Vita viner",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur",
					},
					{
						name: "Orange viner",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur",
					},
					{
						name: "Bubblor",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur",
					},
					{
						name: "Champange",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					}
				],

				// Snacks
				snacks: [
					{
						name: "Lorem Ipsum",
						description: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
						price: 35
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
						price: 30
					},
					{
						name: "Incididunt Ut Labore",
						description: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
						price: 45
					}
				]
			}
		}
	};
</script>

<template>

	<!-- Menu Container -->
	<section class="menu-container">

		<!-- First Column -->
		<div class="menu-column">
			<div class="inner">

				<!-- Signarue Drinks -->
				<div class="category-item">
					<h3>Signaturdrinkar 185:-</h3>
					<div v-for="(item, index) in signature" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>

				<img src="/src/assets/images/images-and-videos/menu-page/drink1.png" alt="Two illustrated tall drinks, one martini glass and one with ice and a straw" loading="lazy" height="1041" width="1041">

				<!-- Classics -->
				<div class="category-item">
					<h3>Klassiker 165:-</h3>
					<div v-for="(item, index) in classics" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</div>

			<!-- Mocktails (desktop version) -->
			<div class="inner-short desktop-screen">
				<div class="category-item">
					<h3>Mocktails 105:-</h3>
					<div v-for="(item, index) in mocktails" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Second Column -->
		<div class="menu-column">
			<div class="inner">

				<!-- Spritzers -->
				<div class="category-item">
					<h3>Spritzers 145:-</h3>
					<div v-for="(item, index) in spritzers" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>

				<!-- Gin and Tonics -->
				<div class="category-item">
					<h3>Gin & Tonic 135:-</h3>
					<div v-for="(item, index) in gintonic" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>

				<!-- Wine and Champagne -->
				<div class="category-item">
					<h3>Vin och Bubblor</h3>
					<div v-for="(item, index) in wine" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>

					<img src="/src/assets/images/images-and-videos/menu-page/drink2.png" alt="Illustrated picture of two cocktails, one short glass with ice and one tall with a lemon slice" loading="lazy" height="1041" width="1041">
			</div>

			<!-- Mocktails (small screen version)-->
			<div class="inner-short small-screen">
				<div class="category-item">
					<h3>Mocktails 105:-</h3>
					<div v-for="(item, index) in mocktails" :key="index" class="menu-item">
						<h4>{{ item.name }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</div>

			<!-- Snacks -->
			<div class="inner-short">
				<div class="category-item">
					<h3>Barsnacks</h3>
					<div v-for="(item, index) in snacks" :key="index" class="menu-item bar-snacks">
						<div>
							<h4>{{ item.name }}</h4>
							<p>{{ item.description }}</p>
						</div>
						<span>{{ item.price }}:-</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.menu-container {
		background-color: #283618;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		justify-content: center;
		padding-bottom: 150px;
		font-size: 0.9em;

		h3, h4 {
			text-transform: uppercase;
			margin-bottom: 5px;
		}

		h3 {
			margin-bottom: 50px;
			margin-top: 30px;
			font-size: 1.5em;
			font-weight: 550;
		}

		img {
			width: 50%;
			height: auto;
			display: block;  // Gör så att margin fungerar
			margin: 0 auto;  // Centrerar bilden
		}

		.small-screen {
			display: none;
		}

		.menu-column {
			display: flex;
			flex-direction: column;
			border: #F4C96D solid 3px;
			padding: 25px;

			&:nth-child(1) {
				grid-column: 2 / span 4;
				margin-right: 50px;
			}

			&:nth-child(2) {
				grid-column: 6 / span 4;
				margin-left: 50px;
			}

			.inner {
				height: 100%;
			}

			.inner-short {
				margin-top: 30px;
			}

			.inner, .inner-short {
				background-color: #D7D3CB;
				padding: 40px;
			}

			.category-item {
				margin-bottom: 70px;
			}

			.menu-item {
				margin-bottom: 35px;
			}

			.bar-snacks {
				display: flex;
				flex-direction: row;
				gap: 30px;
			}
		}
	}

	@media (max-width: 1023px) {
		.menu-container {
			display: flex;
			flex-direction: column;
			padding: 50px;

			h3 {
				font-size: 1.3em;
			}

			.small-screen {
				display: block;
			}

			.desktop-screen {
				display: none;
			}

			.menu-column:nth-child(1) {
				border-bottom: none;
				margin-right: 0;
				padding-bottom: 0;
			}

			.menu-column:nth-child(2) {
				border-top: none;
				margin-left: 0;
			}
		}
	}

	@media (max-width: 480px) {
		.menu-container {
			padding: 5px;

			.menu-column {
				border: none;

				.category-item {
					margin-bottom: 10px;
				}
			}
		}
	}
</style>
