import React from "react";

const videos = [
    { thumb: "/assets/imgs/video/video-1.jpg", url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
    { thumb: "/assets/imgs/video/video-2.jpg", url: "https://www.youtube.com/embed/1La4QzGeaaQ" },
    { thumb: "/assets/imgs/video/video-3.jpg", url: "https://www.youtube.com/embed/jNQXAC9IVRw" },
];

export default function VideoGallerySection() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Video nổi bật</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {videos.map((v, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-2 flex flex-col items-center">
                        <div className="aspect-w-16 aspect-h-9 w-full rounded overflow-hidden mb-2">
                            <iframe
                                src={v.url}
                                title={`Video ${idx + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-48"
                            ></iframe>
                        </div>
                        {/* Có thể thêm tiêu đề hoặc mô tả nếu muốn */}
                    </div>
                ))}
            </div>
        </section>
    );
}