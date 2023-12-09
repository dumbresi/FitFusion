import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import axios from "axios";
import { useRef, useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const UploadData = ({ setSelectedPage }: Props) => {
  const inputStyles =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Check if a file is selected
    if (
      fileInput.current &&
      fileInput.current.files &&
      fileInput.current.files.length > 0
    ) {
      const file = fileInput.current.files[0];
      let data = new FormData();
      data.append("file", file);

      axios
        .post("http://localhost:8080/api/upload-csv", data)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          alert("File uploaded successfully.");
          selectedFile && setSelectedFile(null);
        })
        .catch((error) => {
          console.log(error);
          alert("File upload failed.");
        });
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div id="uploaddata" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.UploadData)}
      >
        {/* contact us header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Admin Upload Bulk Data</HText>
        </motion.div>
        {/* contact us form */}
        <div className="mt-10 justify-between gap-8 ">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className={inputStyles}>
                <div className="mb-8 ">
                  <input
                    type="file"
                    accept=".csv"
                    id="file"
                    className="sr-only"
                    ref={fileInput}
                    onChange={(e) =>
                      setSelectedFile(e.target.files && e.target.files[0])
                    }
                  />
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex bg-secondary-500 rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
                {selectedFile && (
                  <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                        {selectedFile.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Upload Data
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UploadData;
