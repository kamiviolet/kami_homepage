import socialmediaList from "@/lib/constants/social_media";
import SocialMediaType from "@/types/socialmedia.type";
import SocialMediaCard from "./socialmedia_card";

export default function SocialMediaContainer() {
  return (
    <div className="card_wrapper">
      {socialmediaList.map((sc: SocialMediaType, i: number) => {
        return <SocialMediaCard key={sc + "_" + i} sc={sc} />;
      })}
    </div>
  );
}
