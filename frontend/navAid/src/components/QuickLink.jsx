const QuickLink = ({ img, altText, quickLinkText }) => {
  return (
    <div className="h-20 w-20 flex-center text-center flex-col">
      <button className="flex-center text-center bg-[#e5e5e5] rounded-[50%] border-none cursor-pointer p-[0.8rem]">
        <img className="w-6 h-6" src={img} alt={altText} />
      </button>

      <p>{quickLinkText}</p>
    </div>
  );
};

export default QuickLink;
