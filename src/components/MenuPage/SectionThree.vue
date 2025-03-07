<script>
// Items Object Arrays
	export default {
		data() {
			return {
				
				// Signature Drinks
				signature: [
					{
						namn: "Lumina Soleil",
						beskrivning: "Mörk premiumrom ⬝ färskpressad apelsin- och citronjuice ⬝ honungssirap ⬝ grand marnier ⬝ en stänk appelsinbitters",
					},
					{
						namn: "Ember Old Fashioned",
						beskrivning: "Fatlagrad burbon ⬝ lönnsirap ⬝ några droppar chokladbitters ⬝ apelsinzest",
					},
					{
						namn: "Dirty Martini",
						beskrivning: "Premiumvodka (eller gin) ⬝ torr vermouth ⬝ olivlake ⬝ garneras med gröna oliver",
					},
					{
						namn: "Lorem Ipsum",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod temporv",
					}
				],

				// Classics
				classics: [
					{
						namn: "Lumina Colada",
						beskrivning: "Ljus premiumrom ⬝ kokos ⬝ färskpressad limejuice ⬝ ananas ⬝ soda",
					},
					{
						namn: "Lumina Colada",
						beskrivning: "Ljus premiumrom ⬝ kokos ⬝ färskpressad limejuice ⬝ ananas ⬝ soda",
					},
					{
						namn: "Negroni Sbagliato",
						beskrivning: "Campari ⬝ röd vermouth ⬝ prosecco ⬝ apelsinskiva",
					},
					{
						namn: "Negroni Spagliato",
						beskrivning: "Campari ⬝ röd vermouth ⬝ prosecco ⬝ apelsinskiva",
					},
					{
						namn: "Lorem Ipsum",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						namn: "Lorem Ipsum",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					}
				],

				// Mocktails
				mocktails: [
					{
						namn: "Lorem Ipsum",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					}
				],

				// Spritzers
				spritzers: [
					{
						namn: "Spritz",
						beskrivning: "Mörk premiumrom ⬝ färskpressad apelsin- och citronjuice ⬝ honungssirap ⬝ grand marnier ⬝ en stänk appelsinbitters",
					},
					{
						namn: "Fizzy",
						beskrivning: "Fatlagrad burbon ⬝ lönnsirap ⬝ några droppar chokladbitters ⬝ apelsinzest ",
					},
					{
						namn: "Fizzy spritzer",
						beskrivning: "Premiumvodka (eller gin) ⬝ torr vermouth ⬝ olivlake ⬝ garneras med gröna oliver",
					}
				],

				// Gin and Tonics
				gintonic: [
					{
						namn: "Gurka & Rosepeppar",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						namn: "Rosmarin & Apelsin",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						namn: "Monkey 47 & granskott",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					},
					{
						namn: "Härnö & grapefrukt",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
					}
				],

				// Wine and Champagne
				wine: [
					{
						namn: "Röda viner",
						beskrivning: "Sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					},
					{
						namn: "Vita viner",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur",
					},
					{
						namn: "Orange viner",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur",
					},
					{
						namn: "Bubblor",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur",
					},
					{
						namn: "Champange",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
					}
				],

				// Snacks
				snacks: [
					{
						namn: "Lorem Ipsum",
						beskrivning: "Lorem ipsum dolor ⬝ sit amet ⬝ consectetur ⬝ adipiscing elit ⬝ sed do ⬝ eiusmod tempor",
						price: 35
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
						price: 30
					},
					{
						namn: "Incididunt Ut Labore",
						beskrivning: "Et dolore ⬝ magna aliqua ⬝ Ut enim ⬝ ad minim ⬝ veniam ⬝ quis nostrud ⬝ exercitation",
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
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
					</div>
				</div>

				<img src="/src/assets/images/images-and-videos/menu-page/drink1.png" alt="Two illustrated tall drinks, one martini glass and one with ice and a straw" loading="lazy" height="1041" width="1041">

				<!-- Classics -->
				<div class="category-item">
					<h3>Klassiker 165:-</h3>
					<div v-for="(item, index) in classics" :key="index" class="menu-item">
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
					</div>
				</div>
			</div>

			<!-- Mocktails (desktop version) -->
			<div class="inner-short desktop-screen">
				<div class="category-item">
					<h3>Mocktails 105:-</h3>
					<div v-for="(item, index) in mocktails" :key="index" class="menu-item">
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
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
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
					</div>
				</div>

				<!-- Gin and Tonics -->
				<div class="category-item">
					<h3>Gin & Tonic 135:-</h3>
					<div v-for="(item, index) in gintonic" :key="index" class="menu-item">
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
					</div>
				</div>
				
				<!-- Wine and Champagne -->
				<div class="category-item">
					<h3>Vin och Bubblor</h3>
					<div v-for="(item, index) in wine" :key="index" class="menu-item">
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
					</div>
				</div>

					<img src="/src/assets/images/images-and-videos/menu-page/drink2.png" alt="Illustrated picture of two cocktails, one short glass with ice and one tall with a lemon slice" loading="lazy" height="1041" width="1041">
			</div>

			<!-- Mocktails (small screen version)-->
			<div class="inner-short small-screen">
				<div class="category-item">
					<h3>Mocktails 105:-</h3>
					<div v-for="(item, index) in mocktails" :key="index" class="menu-item">
						<h4>{{ item.namn }}</h4>
						<p>{{ item.beskrivning }}</p>
					</div>
				</div>
			</div>

			<!-- Snacks -->
			<div class="inner-short">
				<div class="category-item">
					<h3>Barsnacks</h3>
					<div v-for="(item, index) in snacks" :key="index" class="menu-item bar-snacks">
						<div>
							<h4>{{ item.namn }}</h4>
							<p>{{ item.beskrivning }}</p>
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
			width: 100%;
			height: auto;
			padding: 20px 80px;
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

			.inner, .inner-short {
				background-color: #D7D3CB;
				padding: 40px;
				height: 100%;
			}

			.inner-short {
				margin-top: 30px;
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

	@media (max-width: 768px) {
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
			}

			img {
				padding: 10px 55px;
			}
		}
	}
</style>