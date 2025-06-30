import React from "react";

const team = [
    {
        name: "Nguyễn Văn A",
        position: "Founder & CEO",
        avatar: "/assets/imgs/team/team-1.jpg",
    },
    {
        name: "Trần Thị B",
        position: "Customer Support",
        avatar: "/assets/imgs/team/team-2.jpg",
    },
    {
        name: "Lê Văn C",
        position: "Logistics Manager",
        avatar: "/assets/imgs/team/team-3.jpg",
    },
];

export default function TeamIntro() {
    return (
        <section className="container mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Đội ngũ của chúng tôi</h3>
            <div className="flex flex-wrap justify-center gap-8">
                {team.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-64">
                        <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-3 object-cover" />
                        <div className="font-bold text-lg">{member.name}</div>
                        <div className="text-green-700 font-semibold text-sm">{member.position}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}