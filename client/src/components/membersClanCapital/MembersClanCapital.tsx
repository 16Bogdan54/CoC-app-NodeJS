import React from 'react';
import {useQueryCache} from "@/hooks/useQueryCache";
import {Clan} from "clashofclans.js";

const MembersClanCapital = () => {
    const clan = useQueryCache<Clan>("clanData");
    return (
        <div>
            {clan.members.map((member, index) => (
                <div key={index}>
                    <h1>{member.clanRank}</h1>
                    <h1>{member.}</h1>
                </div>
            ))}
        </div>
    );
};

export default MembersClanCapital;
