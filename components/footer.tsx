import { APP_NAME } from "../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t w-full  text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="px-4 md:px-8  flex justify-center items-center h-[500px] text-center">
        <p className="text-lg font-medium">
          {currentYear} {APP_NAME}. All Rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
