import Header from "../components/Header.js";
import MainTitle from "../templates/MainTitle.js";
import SubTitle from "../templates/SubTitle.js";
import Paragraph from "../templates/Paragraph.js";
import Section from "../templates/Section.js";

const Home = () => {
	return (
		<Header />
		<Section id="content">
			<MainTitle content="Scratch API Documentation" />
			<Section >
				<SubTitle content="Fully Explained" />
				<Paragraph content="The developpers explored the full API to keep the coders informed." />
			</Section>
			<Section>
				<SubTitle content="Verified and Tested" />
				<Paragraph content="All the scripts are verified and tested to avoid spreading errors." />
			</Section>
		</Section>
	)
};

export default Home;
