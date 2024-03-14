import Container from "../components/ui/Container";
import AppreciationPosts from "../components/ui/community/AppreciationPosts";
import GratitudeForm from "../components/ui/community/GratitudeForm";

const Community = () => {
  return (
    <Container className="p-5">
      <div className="text-center my-5">
        <h5 className="text-[--color1] text-xl md:text-3xl mb-3 font-serif ">
          Community Gratitude Wall
        </h5>

        <h2 className="text-3xl md:text-4xl font-semibold mb-5 ">
          Sharing Support, Spreading Joy
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        <AppreciationPosts></AppreciationPosts>
        <GratitudeForm></GratitudeForm>
      </div>
    </Container>
  );
};

export default Community;
