import Image from "next/image";

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h2>Gallery</h2>

      <Image
        src="https://i.ibb.co.com/xJqDrW2/dessert-bg.jpg"
        alt="next image"
        width={800}
        height={800}
        className="m-auto"
      />
    </div>
  );
};

export default GalleryPage;
