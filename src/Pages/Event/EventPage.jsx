import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tabs } from "./eventsData.js"; // path check karo
import ImageSlider from "../../Component/ImageSlider.jsx";
import { FaTimes } from "react-icons/fa";
// import { FaHandshake, FaTint, FaLeaf, FaCertificate } from "react-icons/fa";


function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const EventPage = () => {
  const { slug } = useParams();
  const event = tabs.find((ev) => createSlug(ev.name) === slug);
  const [heroOpen, setHeroOpen] = useState(false);

  if (!event) return <p className="text-center mt-20 text-xl">Event not found</p>;

  const isFamilyMeet = event.name === "31 Jan 2026 WAPTAI Family Special Meet";

  return (
    <div className="bg-gray-50">
      {/* Container */}
      <div className="px-4 sm:px-6 md:px-12 py-5 max-w-full mx-auto">

        {/* HERO GRID */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:py-5 ${
            isFamilyMeet ? "items-start md:gap-6" : "items-center md:gap-12 md:max-h-screen"
          }`}
        >
          
          {/* LEFT TEXT */}
          <div
            className={`flex flex-col justify-center space-y-6 md:space-y-8 ${
              isFamilyMeet ? "md:col-span-5" : "md:col-span-7"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug drop-shadow-sm">
              {event.name}
            </h1>
            <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4 md:space-y-6">
              {event.content.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            {/* <div className="text-gray-700 space-y-3 md:space-y-4">
  <p className="flex items-center gap-2">
    <FaHandshake className="text-sky-500" /> Partner with industry & government
  </p>
  <p className="flex items-center gap-2">
    <FaTint className="text-blue-500" /> Ensure safe drinking water
  </p>
  <p className="flex items-center gap-2">
    <FaLeaf className="text-green-500" /> Promote responsible water management
  </p>
  <p className="flex items-center gap-2">
    <FaCertificate className="text-yellow-500" /> Support certified water tech growth
  </p>
</div> */}
            </div>
          </div>

          {/* RIGHT IMAGE / VIDEO */}
          <div
            className={`flex justify-center relative ${
              isFamilyMeet ? "md:col-span-7 md:justify-end md:pl-4 lg:pl-8" : "md:col-span-5 md:mt-0"
            }`}
          >
            <div
              className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ${
                isFamilyMeet ? "w-full max-w-xl p-2 sm:p-3 bg-white" : "w-full max-w-md"
              }`}
            >
              {event.youtubeId ? (
                <iframe
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[23rem] rounded-3xl"
                  src={`https://www.youtube.com/embed/${event.youtubeId}`}
                  title="Event Video"
                  allowFullScreen
                />
              ) : (
                <img
                  src={event.hero}
                  alt={event.name}
                  className={
                    isFamilyMeet
                      ? "w-full h-auto object-contain rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
                      : "w-full h-auto sm:h-80 lg:h-[33rem] rounded-3xl transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                  }
                  onClick={() => setHeroOpen(true)}
                />
              )}

              {/* Optional overlay play button */}
              {event.youtubeId && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center hover:bg-white/90 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 2v20l20-10L4 2z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* HERO MODAL */}
        {heroOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            onClick={(e) => e.target === e.currentTarget && setHeroOpen(false)}
          >
            <img
              src={event.hero}
              alt={event.name}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-black/70 hover:scale-110 transition"
              onClick={() => setHeroOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        )}

        {/* IMAGE GALLERY */}
        {event.images?.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M3 7h18M3 17h18M5 7v10M19 7v10" />
              </svg>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                {event.name === "31 Jan 2026 WAPTAI GST Podcast" ? "Podcast Images" : "Event Moments"}
              </h3>
            </div>
            <ImageSlider images={event.images} cardStyle="shadow-lg rounded-xl" />
          </section>
        )}

        {/* YOUTUBE VIDEOS */}
        {event.youtubeIds?.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-5">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Event Videos</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {event.youtubeIds.map((id, i) => (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`Event Video ${i + 1}`}
                      allowFullScreen
                      className="absolute inset-0 w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EVENT VIDEOS */}
        {event.videos?.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-5">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Event Videos</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {event.videos.map((video, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full aspect-video bg-black">
                    <video
                      src={video}
                      controls
                      className="absolute inset-0 w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PODCAST / REELS */}
        {event.reels?.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-5">
              <svg
                className="w-6 h-6 text-pink-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Podcast Reels</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {event.reels.map((reel, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative w-full aspect-[9/16]">
                    <iframe
                      src={reel}
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                      title={`podcast-reel-${i}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default EventPage;