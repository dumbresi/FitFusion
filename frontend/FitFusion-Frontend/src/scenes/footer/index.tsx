import Horizontal_Logo from "@/assets/Horizontal_Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Horizontal_Logo" src={Horizontal_Logo} className="h-8" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ad fuga magni eum soluta facilis doloribus perferendis! Quaerat at
            saepe tempore reiciendis quis, perspiciatis porro, eligendi
            consectetur ea, cum illo!
          </p>
          <p>© FitFusion All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">More Links</h4>
          <p className="my-5">One Month Plan</p>
          <p className="my-5">Diet Plan For Beginners</p>
          <p>Live Coaching</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">360 Huntington Ave, Boston, MA 02115</p>
          <p>(617) 373-2000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
