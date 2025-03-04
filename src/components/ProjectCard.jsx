import React, { useState } from "react";

export default function ProjectCard({ image, title, tags = [], details }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="bg-amber-100 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg cursor-pointer"
        onClick={openModal}
      >
        <div
          className="h-40 lg:h-55 bg-blue-700 bg-cover start"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col gap-4 p-6">
          <h3 className="text-xl font-bold text-[#0B2447]">{title}</h3>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#0B2447] px-4 py-1 rounded-full text-sm text-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-transparant flex items-center justify-center z-50 p-5 xl:p-4 transition-opacity duration-300 opacity-100"
          onClick={closeModal}
        >
          <div
            className="bg-[#0B2447] rounded-xl border border-[#A5D7E8] shadow-2xl w-full max-w-4xl max-h-screen overflow-y-auto transform transition-transform duration-300 scale-95 opacity-0 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-10 flex flex-col gap-4">
              {/* HEADER */}
              <div className="flex justify-between items-start md:items-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold">{title}</div>
                <button onClick={closeModal} className="text-white hover:text-amber-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mt-1 md:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* TAGS */}
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, index) => (
                  <span key={index} className="px-5 py-1 rounded-full border border-[#A5D7E8] text-sm text-white">
                    {tag}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              {details?.description && (
                <div className="mt-6">
                  <div className="text-lg md:text-xl lg:text-2xl text-amber-100 font-semibold mb-2">
                    Description
                  </div>
                  {details.description.split("<br>").map((paragraph, index) => (
                    <p key={index} className="text-sm md:text-base lg:text-lg mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* IMAGES */}
              {details?.images && details.images.length > 0 && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.images.map((img, index) => (
                      <div key={index} className="overflow-hidden">
                        <img src={img} alt={`${title} image ${index + 1}`} className="max-h-[400px] w-fit rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* LINKS */}
              {details?.links && (
                <div className="mt-6">
                  <div className="text-lg md:text-xl lg:text-2xl text-amber-100 font-semibold mb-2">Link</div>
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(details.links).map(([label, url]) => (
                      <a 
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center bg-[#A5D7E8] text-[#0B2447] text-sm md:text-base font-semibold px-5 py-2 rounded-full hover:bg-amber-100 transition-colors"
                      >
                        {label}
                        <span className="">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              {details?.additionalContent && details.additionalContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
